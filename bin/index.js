#!/usr/bin/env node

const { data } = require("./data.json");

const getRandomNumber = (max) => Math.floor(Math.random() * max);
const getRandomArrayElement = (arr) => arr[getRandomNumber(arr.length - 1)];

console.log( getRandomArrayElement(data).question );