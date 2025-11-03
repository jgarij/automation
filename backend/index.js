import express from 'express';

import fs from 'fs';
import path from 'path';
import { connectDB } from './config/db.js'
connectDB();

import multer from 'multer';
import PDFParser from 'pdf2json';
import cors from 'cors';

// import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.js';
import pdfjsLib from 'pdfjs-dist/legacy/build/pdf.js';
const { getDocument } = pdfjsLib;



const app = express();


app.use(express.json());
import PdfModel from './models/pdfSchema.js';


app.get("/pdf",async(req,res)=>{
 console.log("gaima")
  res.send("gairma");

});

app.get("/", async (req, res) => {
  res.send("API is running WITH CHANGES...");
});

const upload = multer({ storage: multer.memoryStorage() });
console.log(upload.single('pdfFile'))
app.post("/upload-pdf", upload.single('pdfFile'),async (req, res) => {

console.log("req.file", req);
  try {
    // console.log("req.file", req.file);
    const buffer = req.file.buffer;
const uint8Array = new Uint8Array(buffer);
const pdf = await getDocument({ data: uint8Array }).promise;
const page = await pdf.getPage(1);
    const textContent = await page.getTextContent();
    const textItems = textContent.items.map(item => item.str);
    const finalText = textItems.join(' ');
    console.log("finalText", finalText);

    // Extract fields with regex (independent to allow flexible formats)
    const dateMatch = finalText.match(/Date:\s*([\d\s\-]+)/i);
    const descriptionMatch = finalText.match(/Description:\s*(.+?)(?=\s+(Amount|Category|Account|$))/i);
    const amountMatch = finalText.match(/Amount:\s*(\d+)/i);
    const categoryMatch = finalText.match(/Category:\s*(\w+)/i);
    const accountMatch = finalText.match(/Account:\s*(.+)/i);

    const extractedData = {
      date: dateMatch ? dateMatch[1].trim() : null,
      description: descriptionMatch ? descriptionMatch[1].trim() : null,
      amount: amountMatch ? parseFloat(amountMatch[1].trim()) : null,
      category: categoryMatch ? categoryMatch[1].trim() : null,
      account: accountMatch ? accountMatch[1].trim() : null,
    };

    // Save both file data and extracted metadata in MongoDB
    const pdfDocument = new PdfModel({
      filename: req.file.originalname,
      data: buffer,
      contentType: req.file.mimetype,
      extracted: extractedData,
    });
    console.log("pdfDocument", pdfDocument);

    await pdfDocument.save();

    res.json({ message: "PDF processed successfully parsed" });
  } catch (error) {
    console.error("Error processing PDF:", error);
    res.status(500).json({ error: error.message });
  }
});


app.use(cors());




app.get("/get-data", async (req, res) => {

  try {

    const pdfDocuments = await PdfModel.find({}, "filename extracted").lean();
    console.log("pdfDocuments", pdfDocuments);
    if (pdfDocuments.length === 0) {
      return res.status(404).json({ message: "No PDF documents found" });
    }

    res.json(pdfDocuments);
    res.status(200).json({ data: "Kuch toh aaya" });
  }
  catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: err.message });
  }
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
})    