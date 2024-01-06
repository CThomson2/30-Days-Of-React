console.log('Q1');

const personAccount = {
  firstName: 'John',
  lastName: 'Doe',
  incomes: {
    sales: 75000,
    dividends: 1500,
  },
  expenses: {
    fixed: 20000,
    variable: 13500,
  },
  totalIncome: function () {
    return Object.values(this.incomes).reduce((acc, curr) => acc + curr);
  },
  totalExpenses: function () {
    return Object.values(this.expenses).reduce((acc, curr) => acc + curr);
  },
  accountInfo: function () {
    let statement = `This account belongs to ${this.firstName} ${this.lastName}`;
    statement += `The current account balance is ${this.accountBalance()}`
    return statement;
  },
  addIncome: function (income, amt) {
    // if (this.incomes.hasOwnProperty(income)) {
    //   this.incomes[income] += amt;
    // } else {
    //   this.incomes[income] = amt;
    // }
    this.incomes[income] = this.incomes.hasOwnProperty(income)
      ? this.incomes[income] + amt
      : amt;
  },
  addExpense: function (expense, amt) {
    this.expenses[expense] = this.expenses.hasOwnProperty(expense)
      ? this.expenses[expense] + amt
      : amt;
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpenses();
  }
}

// Print account balance information
console.log(personAccount.accountInfo());
// Add Incomes
personAccount.addIncome('sales', 2000);
console.log(personAccount.incomes);
console.log(personAccount.accountInfo());
personAccount.addIncome('grant', 10000);
console.log(personAccount.incomes);
console.log(personAccount.accountInfo());
// Add Expenses
personAccount.addExpense('wages', 5000);
console.log(personAccount.expenses);
console.log(personAccount.accountInfo());
personAccount.addExpense('SEC violation fine', 20000);
console.log(personAccount.expenses);
console.log(personAccount.accountInfo());

console.log('\n');

console.log('Q2-3');
const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]

function signUp(user_email) {
  // console.log(Object.values(users).map(user => user.email));
  if (Object.values(users).map(user => user.email).includes(user_email)) {
    console.log('You are already signed up! Log in here.');
    return;
  }
  users.push({
    _id: generateId(),
    username: prompt('Enter your username'),
    username: prompt('Enter your username'),
  })
  console.log('Welcome to our platform!');
}

function generateId() {
  let id = '';
  while (id.length < 6) {
    id += String.fromCharCode(Math.floor(Math.random() * (90 - 48)) + 48);
  }
  return id;
}

// user_email = prompt('Enter your email address:');
// user_email = 'thomas@thomsas.com'; // existing user
user_email = 'ryder@hotmail.com'; // new user
signUp(user_email);
