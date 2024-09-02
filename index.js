//create an array
let array=['vinson','viswaa','raja']
console.log(array)
//array methods
console.log(array.shift())
console.log("after shift:",array)
var a=array.unshift("prashanth")
console.log("after unshift:",array)
array.push("santhosh")
console.log("after push:",array)
array.pop()
console.log("after pop:",array)
//map method
const num= [5, 15, 12, 4];
const Arr = num.map((num)=>{
    return num*5
})
console.log(Arr)
//filter method
const age=[10,50,25,40,35,17,19]
const qualification=age.filter((age)=>{
    
        if(age>18){
            console.log(age)
        }
    
})
console.log(qualification)
