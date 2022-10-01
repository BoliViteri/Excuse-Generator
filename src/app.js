/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var who = ["The dog", "My grandma", "His turtle", "My bird"];
  var action = ["ate", "peed", "crushed", "broke"];
  var what = ["my homework", "the keys", "the car"];
  var when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoEntry = who[Math.floor(Math.random() * 4)];
  let actionEntry = action[Math.floor(Math.random() * 4)];
  let whatEntry = what[Math.floor(Math.random() * 3)];
  let whenEntry = when[Math.floor(Math.random() * 5)];
  let Excuse = whoEntry + " " + actionEntry + " " + whatEntry + " " + whenEntry;
  document.getElementById("excuse").innerHTML = Excuse;
};
