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



// const displayMovements = function (movements) {
// movements.forEach((mov,i) => {
//     containerMovements.innerHTML = ''
//     const type = mov > 0 ? 'deposit' : 'withdrawal'
//     const html = `
//     <div class="movements__row">
//           <div class="movements__type movements__type--${type}">2 deposit</div>
//           <div class="movements__date">${
//             i + 1
//           } ${type}</div>
//           <div class="movements__value">${mov}</div>
//         </div> 
//     `;
//     containerMovements.insertAdjacentHTML('afterbegin', html)
// })
// }
// displayMovements(account1.movements)




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



// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

*/

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]



// const dogsJulia1 = [3, 5, 2, 12, 7];
// const dogsKate1 = [4, 1, 15, 8, 3];

// const newJulia = [...dogsJulia1]

// newJulia.slice(1)
// newJulia.splice(-2)

// // console.log (dogsJulia1)

// function checkDogs1 (julArr, kateArr){
// //  dog >= 3 yrs - old dog
// //  dog < 3 yrs - young dog

//   julArr.forEach((el,i) => {
//   if(el >= 3) {
//     console.log(`Dog number ${i + 1} is an adult and is ${el} years old` )
//   } else {
//     console.log(`Dog number ${i + 1} is still a puppy`)
//   }
  
//  })

//   kateArr.forEach((el,i) => {
//   if(el < 3) {
//     console.log(`Dog number ${i + 1} is an adult and is ${el} years old` )
//   } else {
//     console.log(`Dog number ${i + 1} is still a puppy`)
//   }
  
//  })

// }

// checkDogs1(newJulia , dogsKate1)


/* ------------------------------------------------------------------------- */
// Map , filter and reduce


//Map - allows basically to apply operatins to the elements within the original array and returns a new array with tehe eelements with operations performed on them-------> example - Current * 2

// filter - filter method returns a new array containing the array elements that passed a specified test condition. Example - cyurrent > 2

// reduce - reduce method reduces elements down to a single element, adding elements together. Example - [1,2,3,4] ===>> accumulator + current ==> 10



//MAP ---->>

const eurToUsd = 1.1 ;

const movementsUSd = movements.map(mov => mov * eurToUsd )

const movementsDescription =  movements.map((mov, i) => `Movement ${i+1} : You deposited ${mov} : You withdrew ${mov}`)


// console.log(movementsDescription)
// console.log(movementsUSd)




// map method to compute usernames for each account owner  in the application


const createNames = function(user){
const userName = user.toLowerCase().split(' ').map(name => name[0]).join('')
// console.log(userName)
}


const user = 'Nigga Wigga Jigga' // nwg


console.log(createNames(user))




// const user2 = 'chriswilliams johnson'
// const userName2 = user2.split('')
// const userName3 = user2.split(' ')
// console.log(userName2)
// console.log(userName3)