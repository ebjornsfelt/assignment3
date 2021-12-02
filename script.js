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

let contactclick = document.querySelector("#contactshome");
contactclick.addEventListener("click", function (event) {
    event.preventDefault();
    let index = document.querySelectorAll(".contact")
    let view = document.querySelectorAll(".contactinfo");
    let create = document.querySelectorAll(".contactedit")
    if (index.length != 0) {
        cleanUpIndex();
    }    else if (view.length != 0) {
        cleanUpView();
    } else if (create.length != 0) {
        cleanUpCreate()
    }
    renderIndex(contactList)
}
);

let createcontactclick = document.querySelector("#newcontact")
createcontactclick.addEventListener("click", function (event) {
    event.preventDefault();
    let index = document.querySelectorAll(".contact")
    let view = document.querySelectorAll(".contactinfo");
    let create = document.querySelectorAll(".contactedit")
    if (index.length != 0) {
        cleanUpIndex();
    }    else if (view.length != 0) {
        cleanUpView();
    } else if (create.length != 0) {
        cleanUpCreate()
    }
    renderCreate(contactList);
}
);





function cleanUpIndex() {
    boxes = document.querySelectorAll('.contact');
    for(let i = 0; i < boxes.length; i++) { boxes[i].remove(); }

}


function createSingleIndex(cont) {

    let main = document.querySelectorAll('.main');

    let atag = document.createElement('a');
    let divtag = document.createElement('div');
    let ptag = document.createElement('p')

    ptag.append(cont.name);
    divtag.appendChild(ptag);
    divtag.classList.add("contact");
    atag.appendChild(divtag);
    atag.href = "page3.html";

    main[0].appendChild(atag);
    atag.addEventListener("click", function (event) {
        event.preventDefault();
        cleanUpIndex();
        renderView(cont)
    });
}

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

function renderView(cont) {
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
    namediv.append(cont.name);
    namediv.classList.add('contactname');
    infodiv.classList.add('contactinfo');

    namediv.appendChild(createimg);
    infodiv.appendChild(namediv);
    main.appendChild(infodiv);

    emaildiv.append('email: ', cont.email);
    emaildiv.classList.add('contactemail');

    infodiv.appendChild(emaildiv);

    phonediv.append('cell: ', cont.phone);
    phonediv.classList.add('contactphone');

    infodiv.appendChild(phonediv);

    divaddress.append('address: ', cont.address);
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

    buttonClose.addEventListener("click", function (event) {
        event.preventDefault();
        cleanUpView();
        renderIndex(contactList);
    });

}

function cleanUpCreate() {
    createcontact = document.querySelectorAll('.contactedit');
    for(let i = 0; i < createcontact.length; i++) { createcontact[i].remove(); }
    }

function renderCreate(cont) {
    let main = document.querySelectorAll(".main")

    let contedit = document.createElement("div");
    contedit.classList.add("contactedit")

    let contimg = document.createElement("div");
    contimg.classList.add("contactimg")

    let contpfp = document.createElement("img");
    contpfp.classList.add("profilepic");
    contpfp.src = "./img/profile.jpg";
    contpfp.alt = "Profile picture";
    contimg.appendChild(contpfp);

    let form = document.createElement("form");

    let inputs1 = document.createElement("div");
    inputs1.classList.add("inputcontainer");
    form.appendChild(inputs1)

    let contname = document.createElement("input")
    contname.type = "text";
    contname.id = "contactname";
    contname.name = "contactname";
    contname.placeholder = "Contact Name";
    contname.value = cont.name;
    inputs1.appendChild(contname);

    let extrfield = document.createElement("button")
    extrfield.classList.add("extrafield");
    extrfield.id = "extranamefield";
    extrfield.name = "extranamefield";
    extrfield.append("+");
    inputs1.appendChild(extrfield);

    let inputs2 = document.createElement("div");
    inputs2.classList.add("inputcontainer");
    form.appendChild(inputs2);

    let contphone = document.createElement("input");
    contphone.type = "tel";
    contphone.id = "contactphone";
    contphone.name = "contactphone";
    contphone.placeholder ="Contact Phone";
    contphone.value = cont.phone;
    inputs2.appendChild(contphone);

    let extrphone = document.createElement("button")
    extrphone.classList.add("extrafield");
    extrphone.id = "extraphonefield";
    extrphone.name = "extraphonefield";
    extrphone.append("+");
    inputs2.appendChild(extrphone);


    let inputs3 = document.createElement("div");
    inputs3.classList.add("inputcontainer");
    form.appendChild(inputs3);

    let contaddress = document.createElement("input");
    contaddress.type = "text";
    contaddress.id = "contactaddress";
    contaddress.name = "contactaddress";
    contaddress.placeholder = "Contact Address";
    contaddress.value = cont.address;
    inputs3.appendChild(contaddress);

    let extraddress = document.createElement("button");
    extraddress.classList.add("extrafield");
    extraddress.id = "extraaddressfield";
    extraddress.name = "extraaddressfield";
    extraddress.append("+");
    inputs3.appendChild(extraddress);

    let inputs4 = document.createElement("div");
    inputs4.classList.add("inputcontainer");
    form.appendChild(inputs4);

    let contemail = document.createElement("input")
    contemail.type = "email";
    contemail.id = "contactemail";
    contemail.name = "contactemail";
    contemail.placeholder = "Contact Email";
    contemail.value = cont.email;
    inputs4.appendChild(contemail);

    let extrfield2 = document.createElement("button");
    extrfield2.classList.add("extrafield");
    extrfield2.id = "extraemailfield";
    extrfield2.name = "extraemailfield";
    extrfield2.append("+");
    inputs4.appendChild(extrfield2);

    let buttons = document.createElement("div");
    buttons.classList.add("buttons");
    form.appendChild(buttons);

    let savebutton = document.createElement("button");
    savebutton.classList.add("button");
    savebutton.classList.add("save");
    savebutton.type = "submit";
    savebutton.id = "savecontact";
    savebutton.name = "savecontact";
    savebutton.append("Save Contact");
    buttons.appendChild(savebutton);

    let cancelbutton = document.createElement("button");
    cancelbutton.type = "reset";
    cancelbutton.classList.add("button");
    cancelbutton.classList.add("save");
    cancelbutton.id = "cancel";
    cancelbutton.name = "cancel"
    cancelbutton.value = "Close";
    cancelbutton.append("Cancel");
    buttons.appendChild(cancelbutton);

    contedit.appendChild(contimg);
    contedit.appendChild(form);

    main[0].appendChild(contedit);

    cancelbutton.addEventListener("click", function (event) {
        event.preventDefault();
        cleanUpCreate();
        renderIndex(contactList)

    });


    savebutton.addEventListener("click", function (event) {
        event.preventDefault();
        let userform = document.querySelector("form");
        let userformname = userform.elements[0].value;
        let userformphone = userform.elements[1].value;
        let userformaddress = userform.elements[2].value;
        let userformemail = userform.elements[3].value;
        let userforminfo = {
            name: userformname,
            phone: userformphone,
            address: userformaddress,
            email: userformemail,
        };
        contactList.push(userforminfo)

        cleanUpCreate();
        renderView(contactList);
    });
}