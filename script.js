"use strict";

console.log('Запрос данных...');

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };

        reject(product);
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
});