
// Here we see that we dont need to exports things every time to use another file 
// we can just use it in main file (see syntax in main file)

const num1=5
const num2=10

function add(){
    console.log(`the sum is :${num1+num2}`)
}

add()
console.log("Hii")