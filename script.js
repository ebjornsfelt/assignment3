/* This file is where all your work should go for Assignment 2.  Please remove this comment. */


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

    let main = document.querySelectorAll('.main');

    let atag = document.createElement('a');
    let divtag = document.createElement('div');
    let ptag = document.createElement('p')

    ptag.append(contact.name);
    divtag.appendChild(ptag);
    divtag.classList.add("contact");
    atag.appendChild(divtag);
    atag.href = "page3.html";

    main[0].appendChild(atag);
};

function cleanUpView() {

}

