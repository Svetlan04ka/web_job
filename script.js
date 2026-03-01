const { get } = require("node:http");

const jokeContainer = document.getElementById('joke_container');
const jokeForm = document.getElementById('joke_form');
let currentlength = 0;
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/jokes');
xhr.send();
// xhr.onload = () => {
//     const jokes = xhr.response;
//     if(jokes.length) {
//         jokesContainer.innerHTML = "";
//         jokes.forEach(joke => {
//             jokesContainer.innerHTML += getJokeHTML(joke);
//         });
//         currentlength = jokes.length;
//     }
xhr.onload = () => console.log(xhr.response);
