/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  
let ansArr = [];
let totalSpent = [];


for(let i=0; i<transactions.length; i++){
  
  // storing elements of category in selected variable 
  let selected = transactions[i];
  // if category is not present in categories array then push it and also push its price in totalSpent array
  if(!totalSpent[selected.category]){
     totalSpent[selected.category] = selected.price;
  }
  // if category is already present in categories array then add its price in totalSpent array
  else{
     totalSpent[selected.category] += selected.price;
  }
  
}

// Adding in the ansArr
for(let i in totalSpent){
  // pushing the object in ansArr
  ansArr.push({ category: i, totalSpent: totalSpent[i]});
}

return ansArr;
}

module.exports = calculateTotalSpentByCategory;
