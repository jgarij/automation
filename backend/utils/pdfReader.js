const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');
// const pdfParse = require("pdf-parse");
;
const pdf=require('pdf-parse');




const readTranactionsFromPDF = async (filePath) => {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);

    console.log("filePath in ind1", filePath);  
    // const parser =new  PDFParse(filePath);

    // const data = await parser.getText();
    console.log("data", data.text);
    // const text = data.text?.trim();
    // const lines = text?.split('\n').map(line => line).filter(Boolean);
    const transaction = {};
    // for (const line of lines) {
    //     if (line.startsWith("Date:")) {
    //         transaction.date = line.replace("Date:", "");
    //     }
    //     else if (line.startsWith("Description:")) {
    //         transaction.description = line.replace("Description:", "");
    //     }
    //     else if (line.startsWith("Amount:")) {
    //         transaction.amount = parseFloat(line.replace('Amount:', '')?.trim());
    //     }
    //     else if (line.startsWith('Category:')) {
    //         transaction.category = line.replace('Category:', '')?.trim();
    //     } else if (line.startsWith('Account:')) {
    //         transaction.account = line.replace('Account:', '')?.trim();
    //     }

    //     return transaction;
    // }
    return transaction;

}


const readAllTransactionsFromPDF = async (dirPath) => {
    console.log("Reading all PDF files from:", dirPath);
    const files = fs.readdirSync(dirPath).filter(file => file.endsWith('pdf'));
    console.log("files", files);
    const transactions = [];

    for (const file of files) {
        const filePath = path.join(dirPath, file);
        console.log("reading file:", filePath);
        const transaction = await readTranactionsFromPDF(filePath);
        transactions.push(transaction);
    }
    return transactions;


}

module.exports = { readAllTransactionsFromPDF ,readTranactionsFromPDF};