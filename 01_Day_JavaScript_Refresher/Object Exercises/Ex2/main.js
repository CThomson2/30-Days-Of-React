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
    name: 'Mobile Phone',
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

//mdn setInterval;
////////////////////////////////

function signUp(user_email) {
  // console.log(Object.values(users).map(user => user.email));
  if (Object.values(users).map(user => user.email).includes(user_email)) {
    console.log('You are already signed up! Log in here.');
    setTimeout(signIn(user_email), 250);
    return;
  }
  const new_username = prompt('Enter your username');
  const new_password = prompt('Enter your password');
  users.push({
    _id: generateId(),
    username: new_username,
    email: `${new_username}@gmail.com`,
    password: new_password,
    // new Date() returns: "Sat Jan 06 2024 23:27:10 GMT+0000 (Greenwich Mean Time)"
    createdAt: new Date().toLocaleString('en-US', {
      // date formatting options
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }), // "01/06/2024, 11:29 PM"
    isLoggedIn: true
  })
  console.log(`Welcome to our platform!`);
  console.log(users[users.length - 1]);
}

function signIn(user_email) {
  this_user = users.filter(u => u.email == user_email)[0];
  console.log(this_user);
  console.log("Password hint:", this_user.password);
  // return this_user;
  console.log(`Hello, ${this_user.username}! Enter your password to log in.`);
  let i = 0;
  do {
    guessPassword = prompt('Password: ', )
    if (guessPassword == this_user.password) {
      console.log("Welcome! You are now logged in.");
      return;
    } else {
      console.log("Incorrect password. Please try again.")
      i++;
    }
  } while (i < 5);
  console.log("You have entered too many incorrect password attempts. We have temporarily suspended your account, please contact customer services to log in.")
}

// Helper function
function generateId() {
  let id = '';
  while (id.length < 6) {
    id += Math.random() > 0.5
      ? String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      : String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }
  return id;
}

// user_email = 'thomas@thomsas.com'; // existing user
// user_email = 'ryder@hotmail.com'; // new user

// user_email = prompt('Enter your email address:');
// signUp(user_email);

console.log('\n');

console.log('Q4 - Write a function for a user to rate a product (later this will be a class method under the User class)');
// Once we learn classes, this will become a method of the User class so that the user is registered as rating a given product
function rateProduct(userId, productId, rating) {
  const product = products.find(p => p._id == productId); // Array.find() returns the item, not a sub-array
  console.log(`You are rating the ${product.name} ${rating} out of 5.`)
  for (let r of product.ratings) {
    if (r.userId == userId) {
      r.rate = rating;
      return;
    }
    product.ratings.push({
      userId: userId,
      rate: rating
    })
  }
}

rateProduct('eefamr', 'aegfal', 3.5);
rateProduct('fg12cy', 'hedfcg', 1.0);
console.log(products);
console.log('\n');

console.log('Q5 - Write a function to find the average rating for a product');

function averageRating(productId) {
  const product = products.find( p => p._id == productId )
  const productRatings = product.ratings
  let meanScore;
  switch (productRatings.length) {
    case 0:
      return;
    case 1:
      meanScore = productRatings[0].rate;
      break;
    default:
      meanScore = productRatings.reduce( (acc, c) => acc.rate + c.rate) / productRatings.length;
  }
  /* 
  Ternary operator could also be used...
  meanScore = productRatings.length > 1
    ? productRatings.reduce( (acc, c) => acc.rate + c.rate) / productRatings.length
    : productRatings.length
      ? productRatings[0].rate
      : This product has no ratings yet!"
  */
  console.log(`The ${product.name} has an averaging rating of ${meanScore}`);
}

for (p of products) {
  averageRating(p._id);
}
console.log('\n');

console.log('Q6 - Write a function to like or remove a like from a product');
function likeProduct(userId, productId) {
  const product = products.find(p => p._id == productId);
  // console.log(product.likes, pIndex);
  if (product.likes.includes(userId)) {
    let i = product.likes.indexOf(userId);
    product.likes = product.likes.slice(0, i).concat(product.likes.slice(i + 1,));
    console.log("You removed your like on " + product.name);
  } else {
    product.likes.push(userId);
    console.log("You liked " + product.name);
  }
  console.log(product.likes);
}