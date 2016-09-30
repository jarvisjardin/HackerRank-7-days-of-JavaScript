/* 
	Challenge: We have created an array 'my_array' whose elements are strings. Your task is to print the elements which are palindromes. 
*/

//Write your code below this line.

//get the reverse string
//s.split("").reverse().join("");


for(i of my_array){
    if(i === i.split("").reverse().join("")){
        console.log(i);
    }
}