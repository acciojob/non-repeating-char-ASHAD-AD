function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0; i<str.length(); i++){
		for(let j=1; j<str.;ength(); j++){
			str.char[i] == str.char[j];
			break;
		}
		console.log(str.char[i]);
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
