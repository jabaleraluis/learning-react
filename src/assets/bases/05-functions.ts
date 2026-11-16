function greet(name: string): string {
  return `Hola ${name}`;
  // return 123;
}

const greet2 = (name: string) => `Hola ${name}`;

const message = greet('Mordecai');
const message2 = greet2('Rigby');

console.log({ message, message2 });

interface User {
  uid: string;
  user: string;
}

function getUser(): User {
  return {
    uid: 'ABC123',
    user: 'dev-luja',
  };
}

const getUser2 = () => ({
  uid: 'ABC321',
  user: 'dev-luis',
});

const user = getUser();
const user2 = getUser2();

console.log(user, user2);

const myNumbers: number[] = [1, 2, 3, 4, 5];

// myNumbers.forEach(function (value) {
//   console.log({ value });
// });

// myNumbers.forEach((value) => {
//   console.log({ value });
// });

// myNumbers.forEach(console.log);

myNumbers.forEach((index, value, arr) => {
  console.log(index, value, arr);
});
