//Warm up Challenges

//1.
let span1 = document.querySelector(".mess-with-me");
span1.style.fontSize = "40px";

//2. 
// to get a tag with a specific class do 'tagname.className'
let paraMessWithMe = document.querySelector("p.mess-with-me");
paraMessWithMe.style.backgroundColor = "green"

//3.
let hideDino = document.querySelector("#hide-me")
hideDino.style.display = "none"

//4.
let tricerEnlarge = document.querySelector("#triceratops")
tricerEnlarge.style.width = "324px"


//Event Listener Challenges 

//1.
span1.addEventListener("click", function(){
    span1.style.color = "orange"    
});

//2. 
tricerEnlarge.addEventListener('click', function(){
    tricerEnlarge.style.border = "20px solid red";
})

//3.
let feathers = document.querySelector("#feathers");

feathers.addEventListener("click", function(){
    feathers.style.opacity = ".5";
})

//4.
// let row = document.querySelector("#row");
// let toggle = document.querySelector("#toggle");

// toggle.addEventListener("click", function(){
//     row.style.backgroundColor = "blue";
// })

//5.
let biggify = document.querySelector("#biggify")

biggify.addEventListener("mouseenter", function(){
    biggify.style.width = "200px"
})

biggify.addEventListener("mouseleave", function(){
    biggify.style.width = "162px";
})


//strecth goals 
let row = document.querySelector("#row");
let toggle = document.querySelector("#toggle");

toggle.addEventListener("click", function(){
   
   if (row.style.backgroundColor === ""){ 
        row.style.backgroundColor = "blue";

   } else { row.style.backgroundColor = "";
   }
})