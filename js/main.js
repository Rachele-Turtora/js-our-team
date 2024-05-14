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
const container = document.querySelector(".container");

for (let i = 0; i < team.length; i++){
    const currentObject = team[i];
    const name = currentObject['name'];
    const role = currentObject['role'];
    const image = currentObject['image'];

    const pName = document.createElement("p");
    pName.append(name)

    const pRole = document.createElement("p");
    pRole.append(role)

    const Image = document.createElement("img");
    Image.setAttribute("src", "./img/"+ image)

    container.append(pName)
    container.append(pRole)
    container.append(Image)
}