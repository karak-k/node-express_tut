// filesystem 
// This is very important built-in-module,this is used to read write any file 
// and this task is done in two ways :
//   1.synchronusly 
//   2.asynchronusly

//First we learn about synchronus file read write 



const {readFileSync,writeFileSync}=require('fs')

const fdata=readFileSync('./content/first.txt','utf8')
const sdata=readFileSync('./content/second.txt','utf8')
console.log(fdata,sdata)


writeFileSync('./content/result-sync.txt',`Here is the result: ${fdata},${sdata}`,
  {flag:'a'}
)