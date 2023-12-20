// const {readFile,writeFile}=require('fs')



//  readFile('./content/first.txt','utf8',(err,data)=>{
//      if(err)
//       return
//     else
//      console.log(data)
//  })


// This is normal way of reading a file asynchronusly , this is just a one task if we want to read another file inside it or do more asynchronus task then it lead to a callback hell
// for eg:


// readFile('./content/first.txt','utf8',(err,data)=>{
//     if(err)
//      return
//    else{
//     const first=data;

//      readFile('./content/second.txt','utf8',(err,data)=>{
//         if(err)
//          return
//         else
//         {
//             const second=data;
//             console.log(first,second)
//         }
//      })
//    }
// })

// This is like a callback hell

// So to get rid of this we have a concept of promise 

// what basically promise is , it ensure u that it will give u an result , either it will be data or error 

// The question here is why we are reading the second file inside the first , if we avoid that then there will be no callback hell , 
// but the problem here is that we cant access the data given by first file outside the block of readFile function because it is asynchronus function 
// let's see what happen if try to aceess the data outside the block 

 
// let x=readFile('./content/first.txt','utf8',(err,data)=>{
//     if(err)
//      return
//    else
//     return data;
// })

// console.log(x);

// It gives output as undefined , beacause the variable x has declared but no value has been asigned to x yet , because this function is ofloaded.

// so this the problem which is resolved by the promise concept 
//lets see how does that work 



// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//          readFile(path,'utf8',(err,data)=>{
//                  if(err)
//                   reject(err)
//                 else
//                  resolve(data)
//              })
//     })
// }

// getText('./content/first.txt').then((result)=>console.log(result)).catch((error)=>console.log(error))
// getText('./content/second.txt').then((result)=>console.log(result)).catch((error)=>console.log(error))

//see here ,we have access the output of first and second file outside their blocks , and also we had read the data seprately without making and callback hell 

// Now this is the correct time to introduce async await ,
// So what is async await and what was its need ->
    
// Promises and async/await are both tools used to handle asynchronous operations in JavaScript. 
// While Promises provide a way to work with asynchronous code in a more structured manner compared to callbacks, 
// async/await is a syntax that simplifies working with Promises, making asynchronous code more readable and easier to reason about.

// lets try to understand it with an different example , then we apply this concept 
//  to this example also 



// const delay=(ms)=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(`Work done after ${ms}millisec`)
//         },ms)
//     })
// }

// delay(2000)
//      .then((message)=>{
//         console.log(message);
//          return delay(1500)
//      })
//      .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });

    // In the example using Promises, the code uses .then() and .catch() to handle asynchronous operations. 
    // Each .then() block handles the result of the preceding Promise, creating a chain of operations.
    //  This can sometimes lead to nested or chained Promise calls, which might become difficult to read or maintain in more complex scenarios.

    // In contrast, with async/await, the code looks more synchronous, making it easier to follow the flow of asynchronous operations. 
    // The await keyword pauses the execution of the function until the Promise resolves, allowing you to write code that looks sequential, 
    // enhancing readability and reducing nested structures compared to Promise chains.


    // const delay = (ms) => {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(`Operation done after ${ms} milliseconds`);
    //         }, ms);
    //     });
    // };
    
    // const executeOperations = async () => {
    //     try {
    //         const result1 = await delay(2000);
    //         console.log(result1);
    
    //         const result2 = await delay(1500);
    //         console.log(result2);
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };
    
    // executeOperations();
    


    // Now , lets try to apply this on our original example 



// const getText =(path) => {
//     return new Promise((resolve,reject)=>{
//           readFile(path, 'utf8',(err,data)=>{
//             if(err)
//             reject(err)
//             else
//             resolve(data)
//         })  
//     })
// };


// const start=async()=>{
//     try{
//     const first=await getText('./content/first.txt')
//     const second=await getText('./content/first.txt')
//       console.log(first,second)
//       await writeFile('./content/result-async.txt',`Aasan Hai!! ${data}`)
//     }
//     catch(err)
//     {
//         console.log(err)
//     }
// }

// start();



// now, if we import the promise module then all the asynchronus function directly returns a promise 
// we just have to handle them either using .then() or async await 

// lets try:

// const {readFile,writeFile}=require('fs').promises;


// const start=async()=>{
//     try {
//          const first=await readFile('./content/first.txt','utf8');
//          const second=await readFile('./content/second.txt','utf8');

//           console.log(first,second)
//     } catch (error) {
//         console.log(error)
//     }
// }

// start();




// So now just a small thing here 


// const {readFile,writeFile}=require('fs')
//this library contains a promisify method which directly returns a promise of any asynchronus function 
// const util=require('util');

// const read =util.promisify(readFile)
// const write=util.promisify(writeFile)
// const start=async()=>{
//     try {
//           const first=await read('./content/first.txt','utf8')
//           const second=await read('./content/second.txt','utf8')
//           console.log(first,second)
//           await write('./content/result-async.txt',`Here we are : ${first},${second}`, {flag:'a'})
         
//     } catch (error) {
//         console.log(error)
//     }
// }
// start()

// But we have used more cool way than this in upper cases where we used 
// ->const {readFile,writeFile}=require('fs').promises;(This the more preferable way )