// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


/* ---------------------------------------------------------------------------------- */


// Arrays method 
 
// let arr = ['a', 'b', 'c', 'd'];

//slice method
// let newArr = arr.slice(2); // newArr is a new array it does not muatate the original arr array.

// Splice method 
// splice method removes elements from the main array hence it's main usecase is to remove elements from the main array mostly.
// let newSpliceArr = arr.splice(2)

// REVERSE
// basically this method reverses the arrays order.
// reverse array method alos mutates the original array.
// let arr2 = ['d','c','b','a'];
// console.log(arr2.reverse())

//CONCAT
// const letters  = arr.concat(arr2) // basically joins both the arrays.
// console.log(letters)

/* ---------------------------------------------------------------------------------- */


// AT method

// const arr  = [23, 22, 11];
// console.log(arr[0])
// console.log(arr.at(-1)) // if the length of the array is unkown -1 juist basically points to the last element in the array.

// console.log('jonas'.at(1))

/* ------------------------------------------------------------------------------- */


// Looping using forEach method

// const newMov = movements.forEach(movement => {
//   if (movement > 0){
// console.log(`you deposited ${movement}`)
//   } else {
// console.log(`you withdrew ${movement}`)    
//   }
// })



// forEach with map and sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value,  key , map) => {
//   console.log(`${key} : ${value}`)

// })// first one(value) will be the current value in current iteration
// value = First element ; key = index ; map = entire array

// set
// set does not have key and value properties rather have value and value properties.
// const currenciesUnique = new Set([['USD', 'dollar'], 'INR', 'EUR', 'DNR'])

// currenciesUnique.forEach((key, value, map ) => {
//   console.log(`${key} : ${value}`)
// })

// console.log(currenciesUnique)