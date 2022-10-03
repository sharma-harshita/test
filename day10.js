// DOM 

// document object model 

// how the dom gets created ?
// all the code will get converted to a node 
// tree structure => this node structure gets
// mounted on screen 

// window v/s document
// document object is a part of window object
// document object contains only html css tags access. 
// whereas window object contains access to all the functions present in browser window.


// access elements in dom 
// tag name , id , class name

// const headingElement = document.getElementsByTagName("h1");
// console.log(headingElement);

// const classElements = document.getElementsByClassName("abc");
// console.log(classElements[1].innerHTML);
// console.log(classElements[1].innerText);

// const element = document.getElementById("heading4");
// console.log(element.innerText);

//innerText innerHTML


function changeHeading () {
    const heading = document.getElementsByTagName("h1");
    console.log(heading);
    heading[0].innerText = "hey everyone";
}