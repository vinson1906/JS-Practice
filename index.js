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
//to illustrate objects in an array
let obj =[{
    name:"vinson",
},
{
  name:'vinson2',  
}
]
let result=obj.push({name:'vinson3'},{name:"joseph"},{name:"samuel"})

let addstudent=obj.forEach((ele,i)=>{
    if(ele.name==="john"){
        ele.college="NaN institute of technology"
    }
    else if(ele.name==="joseph" || ele.name==="samuel"){
        ele.college="KPC ENGINEERING COLLEGE"
    }
    
    
    else{
        ele.college="SSM COLLEGE OF ENGINEERING"
    }
})

console.log(obj)
