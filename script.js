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