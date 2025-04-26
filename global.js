// MOdule Loading and Require Keywords 
// const modules = require('./modules.js')

// Running Simple Console
// console.log(1+2)

// Console Globel and find the inner Function
// // console.log(global)

// Running one of Globel built in funtions
// global.setTimeout((err,data) => {
    //     console.log("Hallo ")
// }, 1000);

// Console Module Data comingfrom other Files using require
// console.log(modules)

// File Handling 
const fs = require('fs')

// Reading File
// fs.readFile('./dummy.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     else
//     console.log(data)
// })
// console.log("Hallo Code Ninga, Its Last Line")

// Writing File

// fs.writeFile("./dummy.txt", "Hallo Talal, How are you?", (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("File Saved")
//     }
// })

//directory Handling
// if (!fs.existsSync("./test")) {
// fs.mkdir("./test", (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("Directory Created")
//     }
// })
// }
// //else remove the directory
// else {
//     fs.rmdir("./test", (err) => {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log("Directory Removed")
//         }
//     })
// }

// Deleting File
// if (fs.existsSync("./test/delete.txt"))  {
// fs.unlink("./test/delete.txt", (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("File Deleted")
//     }
// })
// }
// else {
//     console.log("File Doesn't Exist")
// }

// Stream Handling

// const readStream = fs.createReadStream("./dummy.txt", "utf8")
// const writeStream = fs.createWriteStream("./dummy2.txt")


// readStream.on('data', (chunk) => {
//     console.log("-------------------------New Data Chunk---------------------------")
//     console.log(chunk)
//     writeStream.write("\n -----------------------New Chunk---------------------------\n")
//     writeStream.write(chunk)
// })

//ShortCut/ Easy way to write the Stream
// readStream.pipe(writeStream)