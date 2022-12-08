#! /usr/bin/env node
const messages = require("./messages");
const index = Math.floor(Math.random() * (messages.length + 1));

console.log(messages[index]);
