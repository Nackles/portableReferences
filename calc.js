if (process.argv[2] === "add") {
    console.log(parseFloat(process.argv[3]) + parseFloat(process.argv[4]))
} else if (process.argv[2] === "subtract") {
    console.log(parseFloat(process.argv[3]) - parseFloat(process.argv[4]))
} else if (process.argv[2] === "multiply") {
    console.log(parseFloat(process.argv[3]) * parseFloat(process.argv[4]))
} else if (process.argv[2] === "divide") {
    console.log(parseFloat(process.argv[3]) / parseFloat(process.argv[4]))
} else if (process.argv[2] === "remainder") {
    console.log(parseFloat(process.argv[3]) % parseFloat(process.argv[4]))
} else if (process.argv[2] === "exp") {
    console.log(Math.pow(parseFloat(process.argv[3]), parseFloat(process.argv[4])))
} else if (process.argv[2] === "algebra") {
    //split the argument into a string since i will always know its exact format
    var arr = process.argv[3].split("");
    //the number that will be multiplied by x
    var one = arr[0];
    //the number that is being added to one*x
    var two = arr[3];
    //the target two-digit number which apparently is handled perfectly by js
    var result = (arr[5]+arr[6]);
    console.log(result)
    //variable capturing the variable multipled by one (just in case)
    var x = arr[1];
    //the actual math forced to proper execution (PEMDAS)
    var give = ((result-two)/one);
    //if x is some other variable it will be changed
    console.log(x+" = "+give)
}