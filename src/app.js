/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
window.onload = () => {
  document.getElementById("btn").addEventListener("click", setRandomName);
};

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const extension = [".com", ".es", ".io", ".us"];

const getRandomNumber = max => Math.floor(Math.random() * max);

const getRandomName = () =>
  `${pronoun[getRandomNumber(pronoun.length)]} ${
    adj[getRandomNumber(adj.length)]
  } ${noun[getRandomNumber(noun.length)]} ${
    extension[getRandomNumber(extension.length)]
  }`;

const setRandomName = () => {
  document.getElementById("dominios").innerHTML = getRandomName();
};

//document.getElementById("btn").addEventListener("click", setRandomName);
//setRandomName();
