function greet(name: string): string {
  return `Hola ${name}`;
  // return 123;
}

const greet2 = (name: string): string => {
  return `Hola ${name}`;
};

const message = greet('Mordecai');
const message2 = greet2('Rigby');

console.log({ message, message2 });

function getUser() {
  return {
    uuid: 'ABC123',
    user: 'dev-luja',
  };
}
 
const getUser2 = () => {
  return {
    uid: "ABC321",
    user: "dev-luis"
  }
}

const user = getUser();
const user2 = getUser2();

console.log(user, user2)
