/*
	Challenge: You are given  numbers. Store them in an array and find the second largest number.
	
	Input Format:
		- The first line contains N, the size of array A.
		- The second line contains N space separated elements of array A.
*/

function processData(myArray) {
    //create new array with unique values
    var newArray = [];
    
    for(i=0, j=myArray.length; i<j; i++){
        if(newArray.indexOf(myArray[i]) === -1){
            newArray.push(myArray[i]);
        };
    };
    //sort array in asc order
    newArray.sort(function(a, b){return a-b});

    //get 2nd to last value in array (2nd largest number)
    console.log(newArray[newArray.length -2]);
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});
