const readline = require('readline');

console.log("*************************************************")
console.log("************* Welcome to Kalculate! *************")

const q = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let n1, n2

q.question("****  Enter first number: ", (a0) => {
    if (a0 === "") {
        console.log("********  You didn't entered anything!  ********")
        q.close()
    } else {
        n1 = new Number(a0)
        q.question("****  Enter second number: ", (a1) => {
            if (a1 === "") {
                console.log("* You didn't enter anything for the second part *")
                q.close()
            } else {
                n2 = new Number(a1)
                q.question("Choose one of these ('+', '-', '*', '/', '%'): ", (a2) => {
                    try {
                        switch (a2){
                        case ("+"):
                            console.log(`****  Your answer: '${+n1 + +n2}'`);
                            break;
                        case ("-"):
                            console.log(`****  Your answer: '${+n1 - +n2}'`);
                            break;
                        case ("*"):
                            console.log(`****  Your answer: '${+n1 * +n2}'`);
                            break;
                        case ("/"):
                            console.log(`****  Your answer: '${+n1 / +n2}'`);
                            break;
                        case ("%"):
                            console.log(`****  Your answer: '${+n1 % +n2}'`);
                        }
                    } catch(err) {
                        console.log(err.name)
                        console.log(err.message)
                    } finally {
                        console.log("\n###\nThanks for using!")
                        q.close()
                    }
            }   )
            }
        })
    }
})
