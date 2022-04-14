"use strict";
/*
console.log('Запрос данных...');

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
    }, 2000);
});

req.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.status = 'ordered';
            resolve(data);
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then((modifiedData) => {
    console.log(modifiedData);
}).catch((product) => {
    console.error(`Произошла ошибка с объектом ${JSON.stringify(product)}`);
}).finally(() => {
    console.log('Finally');
});*/

const test = time => {
    return new Promise(resolve => {
        setTimeout( () => resolve(), time);
    });
};

//test(1000).then(() => console.log('1000 ms'));
//test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });  // then выполнится, когда отработает последний Promise

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
}); // then выполнится, когда отработает первый по скорости Promise


// Question
const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
  });
  const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
  });
  const p5 = new Promise((resolve, reject) => {
    reject("reject");
  });
   
  Promise.all([p1, p2, p3, p4, p5]).then(value => {
    console.log(value);
  }, reason => {
    console.log(reason);
  });

// Answer: ->    "reject"


// Question 11 Через сколько секунд данный код выведет в консоль сообщение? И что именно будет в консоли?
  const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
function one() {
    const promises = [a(), b(), c()];
    Promise.all(promises).then(values => console.log(values));
}
 
one();

// Answer: ->    Через 5сек "[a, b, c]"

//Question 13 Через сколько секунд данный код выведет в консоль сообщение? И что именно будет в консоли?
const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}
 
two().then(console.log);
 
// Это тоже самое, что и .then(data => console.log(data));
// data передается в команду автоматически, и она запускается сама с этими данными

// Answer: ->    Через 100мсек "two is done: a"

//Вопрос 14:
//Через сколько секунд данный код выведет в консоль сообщение? И что именно будет в консоли?
const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c();
    return `three is done: ${outpu1} ${outpu2} ${outpu3}`;
}
 
three().then(console.log);
 
// Это тоже самое, что и .then(data => console.log(data));
// data передается в команду автоматически, и она запускается сама с этими данными

// Answer: ->    Через 8сек "three is done: a, b, c"