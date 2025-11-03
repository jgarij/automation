function autoCategorize(transaction,rules){
    for(const rule of rules){
        if(transaction.description.inclues(rule.keyword)){
            transaction.tags=rule.category;
            break;
        }
    }

 if (transaction.amount < 0 && !transaction.category)
    transaction.category = 'Expense';
    return transaction;
}
module.exports=autoCategorize;  