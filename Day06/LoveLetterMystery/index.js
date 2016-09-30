/*
	Challenge:
		James found a love letter his friend Harry wrote to his girlfriend. Being a prankster, he decides to make some fun adjustments to it by changing each of its words into palindromes.
		
		To do this, he follows two rules:
		
		1. He can reduce the value of a letter (e.g.: he can reduce d to c, but can't increment c to d).
		A letter can be reduced more than once, but once it is reduced to a it becomes locked at a and its value can no longer be changed.
		2. Each reduction in a letter's value is counted as  operation. For each test case, find the minimum number of operations required to convert the given string to a palindrome.
	
	Input Format:	
		The first line contains an integer,  (the number of test cases). 
		Each of the  subsequent lines contains a single string of lowercase characters.
	
	Output Format:	
		For each test case, print a new line with the minimum number (as an integer) of operations required to convert the given string to a palindrome.
*/


function processData(input) {
    //Enter your code here
    var lines = input.split('\n'); 
    var n = Number(lines[0]);

    for (var i=1; i<=n; ++i){
        var ops=0;
        var first_loc = 0;
        var last_loc = lines[i].length -1;
        do{
            var first = lines[i].charCodeAt(first_loc);
            var last = lines[i].charCodeAt(last_loc);
            if(first!=last){
                ops+= Math.abs(first-last);
            }
            ++first_loc;
            --last_loc;
        }while(first_loc<=last_loc);
        console.log(ops);
    }
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
