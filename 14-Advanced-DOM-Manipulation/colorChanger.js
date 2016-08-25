var button = document.querySelector("button");
//var isPurple = false;
//button.addEventListener("click", function () {
//    var body = document.querySelector("body");
//    if (isPurple) {
//        body.style.backgroundColor = "white";
//    }
//    else {
//        body.style.backgroundColor = "purple";
//    }
//    isPurple = !isPurple;
//});

//other way:

button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
})
//class list is WAY shorter
//if youre doing css style, try using class list
//it takes the css class you created and adds it to the element
