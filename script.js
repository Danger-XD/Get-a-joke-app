const getYesBtn = document.getElementById("getPerYes-btn");
const getNoBtn = document.getElementById("getPerNo-btn");
const jokeFrame = document.querySelector(".joke-box-intro");
const jokeContainer = document.querySelector(".jokes-container");
const urlForAll = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const adultUrl = "https://v2.jokeapi.dev/joke/Any?type=single";



getYesBtn.addEventListener("click",()=>{
    jokeFrame.style.display = "none";
    const jokeBoxAd = document.createElement("div");
    jokeBoxAd.classList.add("joke-box-adult");
    jokeBoxAd.innerHTML = `
    <p class="jokes-text"></p>
    <button id="getJoke-btn">New Joke</button>
    `;
    jokeContainer.appendChild(jokeBoxAd);

    const jokeText = jokeBoxAd.querySelector(".jokes-text");
    const getJokeBtn = jokeBoxAd.querySelector("#getJoke-btn");
    async function getJokesEv(){
        try{
            jokeText.classList.remove("textFade");
            const response = await fetch(adultUrl);
            const result = await response.json();
            jokeText.innerHTML = result.joke;
            jokeText.classList.add("textFade");
        }catch(err){
            console.log(err);
        }
    }
    getJokeBtn.addEventListener("click",getJokesEv);
})

getNoBtn.addEventListener("click",()=>{
    jokeFrame.style.display = "none";
    const jokeBoxAll = document.createElement("div");
    jokeBoxAll.classList.add("joke-box-all");
    jokeBoxAll.innerHTML = `
    <p class="jokes-text"></p>
    <button id="getJoke-btn">New Joke</button>
    `;
    jokeContainer.appendChild(jokeBoxAll);

    const jokeText = jokeBoxAll.querySelector(".jokes-text");
    const getJokeBtn = jokeBoxAll.querySelector("#getJoke-btn");

    async function getJokesEv(){
        try{
            jokeText.classList.remove("textFade");
            const response = await fetch(urlForAll);
            const result = await response.json();
            jokeText.innerHTML = result.joke;
            jokeText.classList.add("textFade");
        }catch(err){
            console.log(err);
        }
    }
    getJokeBtn.addEventListener("click",getJokesEv);
})


// {/* <p id="jokes-box">hello</p>
// <button id="getJoke-btn">New Joke</button> */}