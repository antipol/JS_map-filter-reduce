//Map, Filter, Reduce & Sort

//1. Increment by 1
let arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const oneUp = array => array.map(x => ++x);
console.log(oneUp(arrayOfNumbers));
//[ 4, 46, 7, 57, 8, 10 ]


//2. Sum Up
const sumUp = arr => arr.reduce((acc, cur) => acc + cur);
console.log(sumUp(arrayOfNumbers));
//126


//3. instanceOf --- Reduce
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
const instancesOf = wordArr => wordArr.reduce((allWords, word) => {
  if (word in allWords) {
    allWords[word]++;
  } else {
    allWords[word] = 1;
  }
  return allWords;
}, {})
console.log(instancesOf(data));
//{ car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1 }



//4. Inventors
const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

//Map
const firstAndLast = inventors.map(obj => `${obj.first} ${obj.last}`);
console.log(firstAndLast);

//Reduce
const life = inventors.map(obj => obj.passed - obj.year).reduce((acc, cur) => acc + cur);
console.log(life);
//861
//map gives array with each inventors life span
//reduce sums up all the lives


//5. Square Root
const numArr = [100, 16, 9, 25];
const sqRoot = arr => arr.map(x => Math.sqrt(x));
console.log(sqRoot(numArr));
//[ 10, 4, 3, 5 ]


//6. Instances of letters
const newStr = "Hello cat";
const letterCount = str => str.split(" ").map(x => x.split("").reduce((fullWord, letter) => {
  if (letter in fullWord) {
    fullWord[letter]++;
  } else {
    fullWord[letter] = 1;
  }
  return fullWord;
}, []))
console.log(letterCount(newStr));

// const newStr = "Hello cat";
// const letterCount = str => str.split(" ").map(x => x.reduce((fullWord, letter) => {
//   if (letter in fullWord) {
//     fullWord[letter]++;
//   } else {
//     fullWord[letter] = 1;
//   }
//   return fullWord;
// }, []));
// console.log(letterCount(newStr));
//[ H: 1, e: 1, l: 2, o: 1, ' ': 1, c: 1, a: 1, t: 1 ]


//7. List of Movies
let friends = [{
  name: 'Maria',
  films: ['Avengers: Infinity War', 'Avatar' ],
  age: 22
}, {
  name: 'John',
  films: ['Forest Gump', 'Pulp Fiction', 'Spider-Man'],
  age: 29
}, {
  name: 'Jean',
  films: ['Deadpool', 'Incredibles 2'],
  age: 20
}];

const favFilms = friends.map(obj => obj.films);
console.log(favFilms);
//[ [ 'Avengers: Infinity War', 'Avatar' ],
  // [ 'Forest Gump', 'Pulp Fiction', 'Spider-Man' ],
  // [ 'Deadpool', 'Incredibles 2' ] ]

const favorites = friends.map((films, i) => `${friends[i].films}`);
console.log(favorites);


//8. Filter Evens
const filterEvens = numArray => numArray.filter(x => x % 2 === 0)
console.log(filterEvens([1,2,3,11,12,13])); //1, 12


//9. Search
const friends2 = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

const filterItems = (friends2, searchWord) => friends2.filter(x => x.toLowerCase().includes(searchWord));
console.log(filterItems(friends2, "ma")); // Marika


//10. Reformat an Array
let originalArray = [
      {key: 1, name: "John"},
	    {key: 2, name: "Maria"},
	    {key: 3, name: "Oliver"},
	    {key: 4, name: "Jane"},
	    {key: 5, name: "Jack"},
	    {key: 6, name: "Albert"},
	    {key: 7, name: "Harry"},
	    {key: 8, name: "Ron"},
	    {key: 9, name: "Kenneth"},
	    {key: 10, name: "Kyle"}
     ];

  const newNameArr = arr => originalArray.map(obj => obj.name);
  // originalArray.map(obj => delete obj.key);
  console.log(newNameArr(originalArray));


//11. Sorting Numbers
let arrayOfIntegers = [4, 200, 90, 30, 12, 75, 21, 3]
arrayOfIntegers.sort((x, y) => x - y);
console.log(arrayOfIntegers);
//[ 3, 4, 12, 21, 30, 75, 90, 200 ]
//sort() method


//12. Sort Shapes
let shapes = [
    [5, "Pentagon"],
    [3, "Triangle"],
    [8, "Octagon"],
    [4, "Rectangle"],
    [6, "Hexagon"],
    [10, "Decagon"]
  ];

const sorted = shapes.sort((x, y) => x[0] - y[0]);
console.log(sorted);

  // [ [ 3, 'Triangle' ],
  // [ 4, 'Rectangle' ],
  // [ 5, 'Pentagon' ],
  // [ 6, 'Hexagon' ],
  // [ 8, 'Octagon' ],
  // [ 10, 'Decagon' ] ]
