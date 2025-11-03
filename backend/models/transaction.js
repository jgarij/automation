const mongoose  =  require("mongoose");
const TransactionSchema = new mongoose.Schema({
date:Date,
description:String,
amount:Number,
category:String,
account:String,
tags:String,
});
module.exports = mongoose.model("Transaction",TransactionSchema);