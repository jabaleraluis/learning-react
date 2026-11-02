interface Superheroes {
  firstName: string;
  lastName: string;
  age: number;
  address?: Address; // El '?' indica que puede o no existir (que es opcional)
}

interface Address {
  postalCode: string;
  city: string;
}

const ironman: Superheroes = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    postalCode: 'ABC123',
    city: 'New York',
  },
};

console.log(ironman);

// const spiderman = { ...ironman };
// const spiderman = structuredClone(ironman);

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 22;
// spiderman.address.city = 'Queens';

// console.log(ironman, spiderman);
