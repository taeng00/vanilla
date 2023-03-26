const quotes = [
{
    quote : "Life is good",
    author : "tae",
},
{
    quote : 'I love U',
    author : "hyun"
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText =todaysQuote.quote;
author.innerText =todaysQuote.author;