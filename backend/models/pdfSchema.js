import mongoose from "mongoose";
const  pdfSchema = new mongoose.Schema({
  filename: String,
  data: Buffer,
  contentType: String,
  extracted: {
    date: String,
    description: String,
    amount: Number,
    category: String,
    account: String,
  },
});

const PdfModel = mongoose.model("PdfModel", pdfSchema);

export default PdfModel;