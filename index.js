let button = document.getElementById("button");
let p = document.getElementById("quote");
let pa = document.getElementById("author");

  
  
const fetchquote = async() => {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    p.innerHTML = data.content;
}