let Btn = document.querySelector(".new-btn")
let Tweet = document.querySelector(".tweet")
let Quote = document.querySelector(".para")
let Author = document.querySelector(".para1")

async function quoteGenerator() {
    let url ="https://dummyjson.com/quotes/random"
    let response = await fetch(url)
    let data = await response.json()
    Quote.innerHTML = data.quote 
    Author.innerHTML = data.author
    console.log(data)
}
Btn.addEventListener("click",function(){
    quoteGenerator()
})
Tweet.addEventListener('click',function(){
    
    let text = encodeURIComponent(Quote.innerText); 

    window.open(
        "https://twitter.com/intent/tweet?text=" + text,
        "Tweet Window",
        "width=600,height=300"
    );
})
