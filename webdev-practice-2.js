// WEB DEV PRACTICE 2

   /*
            Ready to write some DOM code?

            PART I:
            Let's start simple, 
                1. USING JAVASCRIPT, create a <div> element
                2. add the "container" class
                3. append as a child, to the body

            Let's fill that container
                1. USING JAVASCRIPT create 3 <p> elements
                2. fill them with the text...
                    [1] "Yesterday was good" [2] "Today is great" [3] "Tomorrow will be better"
                3. append them as children, to the "container" above

            Now, REFACTOR (update) the code above to use forEach on this array of strings:
                var copy = ["Yesterday was good", "Today is great", "Tomorrow will be better"];
        */

var container = document.createElement('div');
container.classList.add('.container');
document.body.appendChild(container);

var paragraphs = {
  body: [
    "Yesterday was good",
    "Today is great",
    "Tomorrow will be better"
  ]
}

for (let i = 0; i < 3; i++) {
  var myP = document.createElement('p');
  myP.textContent = paragraphs.body[i];
  container.appendChild(myP);
}

var copy = ["Yesterday was good", "Today is great", "Tomorrow will be better"];

copy.forEach(text => {
  var myP = document.createElement('p');
  myP.textContent = text;
  container.appendChild(myP);
})

        /*
            PART II:
            Start by creating another element
                1. create a button element
                2. set its text to be "enable dark mode"
                3. set style: 15px padding, no border, "black" background, "white" (text) color -- CAN YOU DO THIS WITH A LOOP?
                4. append as a child, to the "container" class div
        */

var button = document.createElement('button');
button.textContent = "enable dark mode";


// var buttonStyles = {
//   padding: "15px",
//   border: "none",
//   backgroundColor: "black",
//   color: "white"
// }

// for (var key in buttonStyles) {
//   button.style[key] = buttonStyles[key];
// }

// can also be written as:
button.style.cssText = "padding: 15px; border: none; background-color: black; color: white";

// NOTE: when using cssText, be aware that those are the only properties that will apply to the button, all previoius css will be overrided

container.appendChild(button);

                  /*  
            Ready to write an event listener?
                1. add a click event listener to the black button
                2. inside the 'click' function, write code that...
                    - changes the background color of the html "body" to "black"
                    then, 
                    - change the background of ".container" to "#777" and color to white
                    - change the button text to black, and the background to white
         */

var blackButton = document.querySelector('button');
button.addEventListener('click', function() {
  document.body.style.backgroundColor = 'black';
  container.style.cssText = 'background-color: #777; color: white';
  button.style.cssText = 'padding: 15px; border: none; background-color: white; color: black';
})


         /*
            BONUS (CHALLENGING): 
            Once dark mode is enabled, can you write code to switch it back to light mode?
                HINT #1: create a boolean variable that indicates whether dark mode is active
                HINT #2: use this for an if statement inside your event listener
                HINT #3: change the button text as well, depending on the state
        */
var darkModeIsActive = false;
button.addEventListener('click', function() {
  if (darkModeIsActive) {
    document.body.style.backgroundColor = 'white';
    container.style.cssText = 'background-color: white; color: black';
    button.style.cssText = 'padding: 15px; border: none; background-color: black; color: white';
    button.textContent = 'enable dark mode';
    darkModeIsActive = false;
  } else {
    document.body.style.backgroundColor = 'black';
    container.style.cssText = 'background-color: #777;    color: white';
    button.style.cssText = 'padding: 15px; border: none; background-color: white; color: black';
    button.textContent = 'enable light mode';
    darkModeIsActive = true;
  }
})

