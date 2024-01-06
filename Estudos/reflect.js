'use strict'

const assert = require('assert');

// garantir sematica e segurança ao código

// ----- apply

const myObj = {
  add(myValue) {
    return this.arg1 + this.arg2 + myValue;
  }
}

assert.deepStrictEqual(myObj.add.apply({ arg1: 10, arg2: 20 }, [100]), 130);

//um problema que pode acontecer (raro)
// Function.prototype.apply = () => { throw new TypeError('Eita!') }

// esse aqui pode acontecer
myObj.add.apply = function () { throw new TypeError('Vixxx') }

assert.throws(
  () => myObj.add.apply({}, []),
  {
    name: 'TypeError',
    message: 'Vixxx'
  }
)

//usando reflect

const result = Reflect.apply(myObj.add, { arg1: 40, arg2: 20 }, [200]);
assert.deepStrictEqual(result, 260);
// ----- Apply

// ----- defineProperty

// questões semânticas
function MyDate() { }

//feio pra kct, tudo é Object, mas Object adicionando prop para um function?
Object.defineProperty(MyDate, 'withObject', { value: () => 'Hey there' })

// agora faz sentido
Reflect.defineProperty(MyDate, 'withReflection', { value: () => 'Hey dude' })

assert.deepStrictEqual(MyDate.withObject(), 'Hey there');
assert.deepStrictEqual(MyDate.withReflection(), 'Hey dude');
// ----- defineProperty

// ----- deleteProperty
const withDelete = { user: 'Leandro' }
// imperformático, evitar ao máximo
delete withDelete.user

assert.deepStrictEqual(withDelete.hasOwnProperty('user'), false);

const withReflection = { user: 'XuxaDaSilva'}
Reflect.deleteProperty(withReflection, 'user')
assert.deepStrictEqual(withReflection.hasOwnProperty('user'), false);
// ----- deleteProperty

// ----- get

// Deveriamos fazer um get somente em instancias de referencia
assert.deepStrictEqual(1['userName'], undefined);
// com reflection, o get pode ser feito em tipos primitivos
assert.throws(() => Reflect.get(1, 'userName'), TypeError);
// ----- get

// ----- has

assert.ok('superman' in { superman: ''});
assert.ok(Reflect.has({ batman: ''}, 'batman'));
// ----- has

// ----- ownKeys
const user = Symbol('user');
const database = {
  id: 1,
  [Symbol.for('password')]: 123,
  [user]: 'Leandro',
}

// Com os metodos de object, temos que fazer 2 requisições
const objectKeys = [
  ...Object.getOwnPropertyNames(database),
  ...Object.getOwnPropertySymbols(database),
]
assert.deepStrictEqual(objectKeys, ['id', Symbol.for('password'), user])

assert.deepStrictEqual(Reflect.ownKeys(database), ['id', Symbol.for('password'), user])
