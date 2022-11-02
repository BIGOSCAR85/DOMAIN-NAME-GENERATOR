/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
window.onload = function() {
  let domains = getAllCombinations(pronoun, adj, noun, extension);
  let output = document.getElementById("dominios");
  output.innerHTML = domains.join("<br>");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".es", ".io", ".us"];

function getAllCombinations(list1, list2, list3, list4) {
  let domain = "";
  let domains = [];
  list1.forEach(l1 => {
    list2.forEach(l2 => {
      list3.forEach(l3 => {
        list4.forEach(l4 => {
          domain = `${l1}${l2}${l3}${l4}`;
          domains.push(domain);
          console.log(domain);
        });
      });
    });
  });
  return domains;
}
