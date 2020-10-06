// Create directory called fs-try

// - Using fs module:
// - create a directory called content using fs method and it should log 'content folder created'
// - create a file using fs method called randomText.txt that lives outside the content directory
// - randomText.txt should be created using fs method and given just a short string of any data you want to put in it, using fs method
// - when you create the randomText.txt file you should also log 'randomtext.txt created' in the terminal.
// - write the randomText.txt data to a new file called verbage.txt inside the content folder and log 'verbage.txt created'
// - Now create a separate setTimeout function that after 7 seconds deletes the content directory

// Create directory called fs-try

// - Using fs module:
// - create a directory called content using fs method and it should log 'content folder created'
// - create a file using fs method called randomText.txt that lives outside the content directory
// - randomText.txt should be created using fs method and given just a short string of any data you want to put in it, using fs method
// - when you create the randomText.txt file you should also log 'randomtext.txt created' in the terminal.
// - write the randomText.txt data to a new file called verbage.txt inside the content folder and log 'verbage.txt created'
// - Now create a separate setTimeout function that after 7 seconds deletes the content directory


const fs = require('fs')
fs.mkdir('content', (err) => {
    if (err) return console.log(err)
    console.log('content folder created')
} )

fs.writeFile('randomText.txt', '1st line', (err) => {
    if (err) return console.log(err)
    console.log('randomText.txt  created')
})

fs.readFile('randomText.txt', 'utf8', (err, info) => {
    if (err) return console.log(err)
    fs.writeFile('./content/verbage.txt', info, (err)=> {
        if (err) return console.log(err)
        console.log('successfully write content of randomText to verbage.txt')
    })
} )

setTimeout(()=> {
    fs.rmdir('content/verbage.txt', (err) => {
        if (err) return console.log(err)
        console.log('Deleted content directory')
    })
}
    ,7000)

 
