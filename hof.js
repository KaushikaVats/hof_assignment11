//1.
const orderList = [
    {name:"Laptop", price:120000},
    {name:"Mobile",price:70000},
    {name:"Mobile Charger" , price:1500},
    {name:"Laptop Charger" ,price:10500}
]
let sum = 0
orderList.forEach((item)=>{
    sum = sum+item.price
    return sum
})

console.log(sum);

function generateRandomNum(){
    setInterval(() => {
        console.log(Math.random());
        
    }, 2000);
}
generateRandomNum()
//3.
let expenses = [
    {amount:100 ,category:"utilities"},
    {amount:200 ,category:"Groceries"},
    {amount:50 ,category:"Entertainment"}
]

let tax = 0.1
let newArray = expenses.map(x => x.amount*tax)
console.log(newArray)
// //4.
let filteredArray = expenses.filter(x => x.category === "Groceries" )
console.log(filteredArray);
 //5.
 const initialValue = 0
 const sumWithInitial = expenses.reduce((accumulator,currentValue) => accumulator + currentValue.amount,initialValue)
console.log(sumWithInitial);

//6.
function categoriseExpense (expenses){
    if( expenses.amount >100){
       return "High Expense"
    }else{
        return "Low Expense"
    }
}
 const categorisedExpense =  expenses.map(expense => categoriseExpense(expense))
console.log(categorisedExpense);

//7.
 let originalNumbers = [2,5,8,10,3]
let double = originalNumbers.forEach( x => console.log(x*2))
double;
// //8.
let even = []
originalNumbers.forEach(x =>{
    if(x%2==0){
        even.push(x)
    }
})

console.log(even);
