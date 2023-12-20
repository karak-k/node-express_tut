const path = require('path');

//--->>>  use of path.sep  <<<---

// Example function creating a file path using path.sep
function createFilePath(directory, filename) {
    return directory + path.sep + filename;
}

// Usage of createFilePath function
const directory = 'myFolder';
const filename = 'example.txt';

const filepath = createFilePath(directory, filename);
console.log(`File path using path.sep: ${filepath}`);


//-->> use of path.basename() <<--
// 
// The path.basename() method in Node.js is used 
// to extract the last portion of a file path, providing 
// the base name of the file or the last segment of the path.



const filePath = '/path/to/some/file.txt';

const basename = path.basename(filePath);

console.log(`File basename: ${basename}`);


const fileRoute=path.join("/content","/subfolder","/test.txt")
console.log(fileRoute)

const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)






// Differnce between path.join() and path.resolve can be understood by these examples
//    path.join() just join the given arguments using path seprator while
//    path.resolve() connect the given arguments with main directory and resolve the path into an absolute path
   

const absolutePath = path.resolve('path', 'to', 'file.txt');
console.log(`Absolute path: ${absolutePath}`);




const concatenatedPath = path.join('path', 'to', 'file.txt');
console.log(`Concatenated path: ${concatenatedPath}`);



console.log(path.isAbsolute(concatenatedPath))