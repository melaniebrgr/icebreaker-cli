#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
const { data } = require("./data.json");

const getRandomNumber = (max) => Math.floor(Math.random() * max);
const getRandomArrayElement = (arr) => arr[getRandomNumber(arr.length - 1)];
const renderText = (text, textIndex, textDescription) => {
  console.log(`
    Question ${textIndex}, type: ${textDescription}`);
  console.log(boxen( chalk.white.bold(text), {
      padding: 1,
      margin: 0.25,
      borderStyle: "round",
      borderColor: "green",
      backgroundColor: "#555555"
    }));
}

const displayRandomQuestion = () => {
  const { question, type } = getRandomArrayElement(data);
  const questionIndex = data.findIndex(el => el.question === question) + 1;
  renderText(question, questionIndex, type);
};

const displayQuestion = (number) => {
  if (number > data.length - 1) return console.log(`Number must be between 1 and ${data.length - 1}`);
  const { question, type } = data[number - 1].question;
  renderText(question, number, type);
}

const args = yargs
 .usage("Usage: -n <number>")
 .option("n", { alias: "number", describe: "Your question number", type: "string", demandOption: false })
 .argv;

args.number ? displayQuestion(args.number) : displayRandomQuestion();