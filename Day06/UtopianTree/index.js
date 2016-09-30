/*
	Challenge: 
		The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.
	
		Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. How tall will her tree be after N growth cycles?
	
	Input Format:
		- The first line contains an integer, T, the number of test cases. 
		- T subsequent lines each contain an integer, N, denoting the number of cycles for that test case.
	
	Output Format:
		For each test case, print the height of the Utopian Tree after N cycles. Each height must be printed on a new line.
		
*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

// Write code below
function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine()); //number of cycles;
        var h = 1; //height;
        
        if(n != 0){ //if n = 0, dont do anything.
            for(i = 1;i<=n;i++){ 
                if(i % 2){ //if loop iteration is odd 
                    h = h * 2; //double h
                }else{
                    h = h + 1; //add one to h
                }
            }                    
        }
        console.log(h);
    }
}
