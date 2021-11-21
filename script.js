/* This file is where all your work should go for Assignment 2.  Please remove this comment. */

// function cleanUpIndex() {
//     const contactboxes = document.querySelector('div');
//     contactboxes.remove("");
// }

function cleanUpIndex() {
    boxes = document.querySelectorAll('.contact');
    for(let i = 0; i < boxes.length; i++) { boxes[i].remove(); }

}

let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
];





function createSingleIndex(contact) {


    // let name = document.createElement('p');
    // name.textContent = contactList["name"];
    let main = document.querySelectorAll('.main');

    let createA = document.createElement('a');
    let createDiv = document.createElement('div');
    let createP = document.createElement('p')

    createP.append(contact);
    createDiv.appendChild(createP);
    createDiv.classList.add("contact");

    createA.appendChild(createDiv);
    createA.href = "page3.html";

    main[0].appendChild(createA);
};

