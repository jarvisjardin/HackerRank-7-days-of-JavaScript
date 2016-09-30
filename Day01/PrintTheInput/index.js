/*
	Challenge: Use what you learned in the previous challenge to complete the 'processData' function by printing the 'input' parameter to the console.
*/ 

function processData(input) {
    //Enter your code here
    console.log(input);
} 


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
