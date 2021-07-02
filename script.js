// JS EXERCISES

// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
// 22) Create an object with properties such name, surname, email
// 23) Delete Email from the previously created object
// 24) Create an array with 10 strings in it
// 25) Print in the console every string in the previous array
// 26) Create an array with 100 random numbers in it
// 27) Wrote a function to get the MAX and the MIN from the previously created array
// 28) Create an array of arrays, in which every array has 10 random numbers
// 29) Create a function that gets 2 arrays and returns the longest one
// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
console.log('-----ex-21-----');
let x = 'john';
let y = 'Doe';
console.log(`"${x} <> ${y}"`);

console.log('-----ex-22-----');
const me = {
	name: 'manish',
	surname: 'elaganti',
	email: 'manishelaganti619@gmail.com',
};
console.log(me);
delete me.email;
console.log(me);

console.log('------ex-23-----');
const array = [
	'messi',
	'neymar',
	'ronalado',
	'hazard',
	'kimmich',
	'kante',
	'stegan',
	'kane',
	'lewandoski',
	'benzima',
];

for (let i = 0; i < array.length; i++) {
	console.log(`My best players of 2021 is : ${i}: 🤴${array[i]}`);
}

const generateNumber = () => {
	let myRandomArray = [];
	for (let i = 1; i < 101; i++) {
		const random = Math.floor(Math.random() * 100) + 1;
		myRandomArray.push(random);
	}
	return myRandomArray;
};
console.log(generateNumber());
const minmax = (fn) => {
	let arr = fn();
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	return `min value : ${min} max value : ${max}`;
};
console.log(minmax(generateNumber));
const arr = [];
const arr1 = [];
const arr2 = [];
for (let i = 1; i < 10; i++) {
	const random = Math.floor(Math.random() * 10) + 1;
	arr1.push(random);
	arr2.push(random);
}
arr.push(arr1);
arr.push(arr2);
console.log(arr1, arr2, arr);
//  DOM
const longesArr = (arr1, arr2) => {
	return arr1.concat(arr2);
};
console.log(longesArr(arr1, arr2));
//         31) Get element with ID "container" from the page
//         32) Get every "td" from the page
//         33) Create a cycle that prints the text inside every td of the page
//         34) Write a function to change the heading of the page
//         35) Write a function to add an extra row to the table
//         36) Write a function to add the class "test" to each row in the table
//         37) Write a function to add a red background to every link in the page
//         38) Console log "Page loaded" when the page is correctly loaded
//         39) Write a function to add new items to a UL
//         40) Write a function to empty a list
let mainContainer = document.querySelector('container');
let everyTd = document.querySelectorAll('td');
console.log(everyTd[0].innerText);
console.log(everyTd[1].innerText);
console.log(everyTd[2].innerText);
console.log(everyTd[3].innerText);
const cycle = () => {
	for (let i = 0; i < everyTd.length; i++) {
		switch (everyTd[i].innerText) {
			case 'Barcelona':
				everyTd[i].innerText = 'BARCA';
				everyTd[i].style.backgroundColor = 'orange';
				break;
			case 'Juventus':
				everyTd[i].innerText = 'JUVE';
				everyTd[i].style.backgroundColor = 'blue';
				break;
			case 'Paris-saint-Germain':
				everyTd[i].innerText = 'PSG';
				everyTd[i].style.backgroundColor = 'yellow';
				break;
			case 'Bayern munchen':
				everyTd[i].innerText = 'MUNCHEN';
				everyTd[i].style.backgroundColor = 'gray';
				break;
			case 'Tottenham hotspur':
				everyTd[i].innerText = 'SPURS';
				everyTd[i].style.backgroundColor = 'pink';
		}
	}
};
let header = document.querySelector('h1');
const changeheader = () => {
	header.innerText = 'We are the Best In the World 😎😎';
};
window.addEventListener('load', (event) => {
	alert('page is fully loaded');
});

// EXTRA

//         41) Add an eventListener to alert when the mouse is over a link, displaying the URL
//         42) Add a button to hide every image on the page
//         43) Add a button to hide and show the table from the page
//         44) Write a function to sum every number inside the TD (if the content is numeric)
//         45) Delete the last letter from the title each time the user clicks on it
//         46) Change a single TD background color when the user clicks on it
//         47) Add a button DELETE, on click it should delete a random TD from the page
//         48) Add a pink border to a cell when the mouse is over it
//         49) Write a function to add a table with 4 rows and 3 columns programmatically
//         50) Write a function to remove the table from the page -->
