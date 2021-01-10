#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const { data } = require("./data.json");

const getRandomNumber = (max) => Math.floor(Math.random() * max);
const getRandomArrayElement = (arr) => arr[getRandomNumber(arr.length - 1)];

const question = getRandomArrayElement(data).question;

console.log(`
  Question ${data.findIndex(el => el.question === question) + 1}`);

console.log(boxen( chalk.white.bold(question), {
    padding: 1,
    margin: 0.25,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
   }));