/*
	Challenge: 
	Mark and Jane are very happy after having their first kid, and Mark wants to buy some toys for him. There are N different toys, tagged with their prices, but he has only $K. He wants to buy the maximum number of toys for his son.
	
	You are Mark's best friend and have to help him buy as many toys as possible.
	
	Input Format
	
	The first line contains two integers, N and K separated by a space. 
	The next line contains N space separated integers indicating the price of each toy.
	
	Output Format
	
	Output an integer that denotes the maximum number of toys Mark can buy with $K.
*/

function processData(input) {
  
    var rows = input.split('\n'); //separate top and bottom rows
       
    var max = rows[0].split(' ').map(Number)[1]; // separate and iso the 2nd number from the first row ($K)
    var arr = rows[1].split(' ').map(Number);  // the 2nd item in rows is the prices for all the toys
    arr = arr.sort(function(a, b){return a-b}); // sort toy array asc
    var i = 0;

    while(max>=0) {      //while the max price ($k = 50) is greater than zero
        max -= arr[i];   //subtract the array value of index i from the max price 
        i++;             //add one to i
    }
    console.log(i-1);    // the last loop will run either when max price is 0 or negative, which doens't count for purchasing the toy, so subtract 1 loop. 
 
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
