
// Modules (NodeJS):
const readline = require('readline'); // This one is for prompt

//Welcome
console.log("*************************************************")
console.log("*****  Welcome to project called Kalculate! *****")

// Code itself:

//this one is for "Enter fist name"
const q = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/* This will not work if write like (q1, q2, q3)!

const q1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const q2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
*/


// This type also does not work!

// let n1 = new Number()
// let n2 = new Number()

let n1, n2

q.question("****  Enter first number: ", (a0) => {
    if (a0 === "") {
        console.log("********  You didn't entered anything!  ********")
        q.close()
    } else {
        //Must have
        n1 = new Number(a0)

        q.question("****  Enter second number: ", (a1) => {
            if (a1 === "") {
                console.log("* You didn't enter anything for the second part *")
                q.close()
            } else {
                //Must have
                n2 = new Number(a1)

                q.question("Choose one of these ('+', '-', '*', '/', '%'): ", (a2) => {
                    
                    switch (a2){
                    case ("+"):
                        console.log(`****  Your answer: '${+n1 + +n2}'`);
                        //Next 3 lines for 'Thanks'
                        console.log("")
                        console.log("###")
                        console.log("Thanks for using!")
                        break;
                    case ("-"):
                        console.log(`****  Your answer: '${+n1 - +n2}'`);
                        console.log("")
                        console.log("###")
                        console.log("Thanks for using!")
                        break;
                    case ("*"):
                        console.log(`****  Your answer: '${+n1 * +n2}'`);
                        console.log("")
                        console.log("###")
                        console.log("Thanks for using!")
                        break;
                    case ("/"):
                        console.log(`****  Your answer: '${+n1 / +n2}'`);
                        console.log("")
                        console.log("###")
                        console.log("Thanks for using!")
                        break;
                    case ("%"):
                        console.log(`****  Your answer: '${+n1 % +n2}'`)
                        console.log("")
                        console.log("###")
                        console.log("Thanks for using!")
                    }

                q.close();
            })
            }
        })
    }
})

//
