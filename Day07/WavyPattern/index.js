/*
	Challenge:
		Write a JavaScript program to generate the pattern below, composed of the following characters: ╱ and ╲.
		
		╱╲╱╲╱╲╱╲╱╲╱╲╱╲
		╱╲╱╲╱╲╱╲╱╲╱╲╱╲
		╱╲╱╲╱╲╱╲╱╲╱╲╱╲
		╱╲╱╲╱╲╱╲╱╲╱╲╱╲
		╱╲╱╲╱╲╱╲╱╲╱╲╱╲
		╱╲╱╲╱╲╱╲╱╲╱╲╱╲
		╱╲╱╲╱╲╱╲╱╲╱╲╱╲
		╱╲╱╲╱╲╱╲╱╲╱╲╱╲
		╱╲╱╲╱╲╱╲╱╲╱╲╱╲
		╱╲╱╲╱╲╱╲╱╲╱╲╱╲
		╱╲╱╲╱╲╱╲╱╲╱╲╱╲
		╱╲╱╲╱╲╱╲╱╲╱╲╱╲
		╱╲╱╲╱╲╱╲╱╲╱╲╱╲
		╱╲╱╲╱╲╱╲╱╲╱╲╱╲
*/

function processData(input) {
    //Enter your code here
    var col = 14;
    var row = 14;
    const backSlash = String.fromCharCode(9585); 
    const forwardSlash = String.fromCharCode(9586); 
    for(i = 1; i <= col; i++){
        let string = '';
        for(j = 1; j <= col; j++){
            if(j % 2){
                string += backSlash;
            }else{
                string += forwardSlash;
            }
        }
        console.log(string);
        
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
