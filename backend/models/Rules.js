const RuleSchema=new mongoose.Schema({
    keyword:String,
    category:String,
    condition:String
})
module.exports=mongoose.model("Rule",RuleSchema)