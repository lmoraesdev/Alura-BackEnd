const assert = require('assert');

//usado na maioria das vezes para verificar se um elemento existe dentro de um array

const arr1 = ['0', '1', '2'];
const arr2 = ['2', '0', '3'];
const arr3 = arr1.concat(arr2);

assert.deepStrictEqual(arr3.sort(), ['0', '0', '1', '2', '2', '3'])

const set = new Set();
arr1.map(item => set.add(item));
arr2.map(item => set.add(item));

assert.deepStrictEqual(Array.from(set), ['0', '1', '2', '3'])
// rest/spread
assert.deepStrictEqual(Array.from(new Set([...arr1, ...arr2])), ['0', '1', '2', '3'])

// no Array comum, para saber se um item existe
// [].indexOf('1') !== -1 ou [0].includes(0)
assert.ok(set.has('3'))

// mesmo teoria do Map, mas você sempre trabalha com a lista toda
// não tem get, então você pode saber se o item está ou não na array e é isso
// na documentação tem exemplos de como fazer uma interseção, saber o que tem em uma lista e não tem na outra


//tem nos dois arrays
const users01 = new Set([
  'NodeJS',
  'ReactJS',
  'React Native'
])

const user02 = new Set([
  'Angular',
  'NodeJS',
  'VueJS'
])

const intersection = new Set([...users01].filter(user => user02.has(user)))
assert.deepStrictEqual(Array.from(intersection), ['NodeJS'])

const difference = new Set([...users01].filter(user => !user02.has(user)))
assert.deepStrictEqual(Array.from(difference), ['ReactJS', 'React Native'])

// WeakSet

// mesma ideia do WeakMap
// nao é enumerável (iterável)
// só trabalha com chaves como referência

const user= { id: 123 };
const user2= { id: 321 };
const weakSet = new WeakSet([user]);
weakSet.add(user2);
weakSet.delete(user);
weakSet.has(user);
