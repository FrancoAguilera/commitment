#!/usr/bin/env node

const chalk = require("chalk");
const messages = require("./messages");
const index = Math.floor(Math.random() * (messages.length + 1));
const commitMessage = ` ${messages[index]} `;

console.log(chalk.black.bgWhite.bold(commitMessage));
