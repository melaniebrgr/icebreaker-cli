#!/usr/bin/env node

const { data } = require("./data.json");

const getRandomNumber = (max) => Math.floor(Math.random() * max);
const getRandomListItem = (arr) => arr[getRandomNumber(arr.length - 1)];

console.log( getRandomListItem(data).question );