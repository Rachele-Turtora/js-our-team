"use strict";

// Defining the object team
const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
]

// Printing the informations in DOM
const row = document.querySelector(".row");

for (let i = 0; i < team.length; i++){

    const div = document.createElement("div");
    div.classList.add("col-4");

    const content = document.createElement("div");
    content.classList.add("content");

    const person = team[i];
    const name = person['name'];
    const role = person['role'];
    const image = person['image'];

    const pName = document.createElement("p");
    pName.classList.add("name");
    pName.append(name);

    const pRole = document.createElement("p");
    pRole.append(role);

    const iImage = document.createElement("img");
    iImage.src = "./img/" + image;
    iImage.classList.add("img");

    content.append(iImage);
    content.append(pName);
    content.append(pRole);

    div.append(content);
    row.append(div);
}