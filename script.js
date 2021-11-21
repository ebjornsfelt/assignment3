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

function renderIndex(boxes) {
    let main = document.querySelectorAll('.main');
    for(let i = 0; i < boxes.length; i++) {
        let atag = document.createElement('a');
        let divtag = document.createElement('div');
        let ptag = document.createElement('p')
        ptag.append(boxes[i].name);
        divtag.appendChild(ptag);
        divtag.classList.add("contact");
        atag.appendChild(divtag);
        atag.href = "page3.html";
        main[0].appendChild(atag);
    }


}



function cleanUpView() {
    contactinfo = document.querySelectorAll('.contactinfo');
    for(let i = 0; i < contactinfo.length; i++) { contactinfo[i].remove(); }
}

function renderView(contact) {
    let main = document.querySelectorAll('.main')[0];
    
    let infodiv = document.createElement('div');
    let namediv = document.createElement('div');
    let createimg = document.createElement('img');
    let emaildiv = document.createElement('div');
    let phonediv = document.createElement('div');
    let divaddress = document.createElement('div');
    let divButtons = document.createElement('div');
    let editbutton = document.createElement('button')
    let buttonClose = document.createElement('button')

    createimg.src = './img/profile.jpg';
    createimg.classList.add('profilepic');
    createimg.alt = 'Profile Picture';
    namediv.append(contact.name);
    namediv.classList.add('contactname');
    infodiv.classList.add('contactinfo');

    namediv.appendChild(createimg);
    infodiv.appendChild(namediv);
    main.appendChild(infodiv);

    emaildiv.append('email: ', contact.email);
    emaildiv.classList.add('contactemail');

    infodiv.appendChild(emaildiv);

    phonediv.append('cell: ', contact.phone);
    phonediv.classList.add('contactphone');

    infodiv.appendChild(phonediv);

    divaddress.append('address: ', contact.address);
    divaddress.classList.add('contactaddress');

    infodiv.appendChild(divaddress);
    editbutton.classList.add('button');
    editbutton.classList.add('edit');
    editbutton.value = 'Edit';
    editbutton.append('Edit');
    buttonClose.classList.add('button');
    buttonClose.classList.add('close');
    buttonClose.value = 'Close';
    buttonClose.append('Close');

    divButtons.classList.add('buttons');
    divButtons.appendChild(editbutton);
    divButtons.appendChild(buttonClose);

    infodiv.appendChild(divButtons);

}


