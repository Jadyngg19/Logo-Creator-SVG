const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./Lib/shapes")

function writetoFile(fileName, answers) {
    let svgString = "";
    svgString =
    '<svg version="1.1" width="300" height="200" xmlns="https://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${answers.shapeChoice}`;

    let shapeChoice;
    if (answers.shapeChoice === "Circle") {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy"115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shapeChoice === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}"/>`;
    svgString += "</g>";
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Newly Generated Logo.svg");
    });
}

function promptUser() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "text",
            message: "Please type the text you would like displayed (Can not exceed 3 characters.)",
        },

        {
            type: "checkbox",
            name: "textColor",
            message: "Please choose what color you would like your text to be.",
            choices: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Black", "White"],
        },

        {
            type: "checkbox",
            name: "shapeChoice",
            message: "Please choose what shape you would like for your logo.",
            choices: ["Circle", "Triangle", "Square"],
        },

        {
            type: "checkbox",
            name: "shapeBackgroundColor",
            message: "Please choose what color you would like your background to be for the shape of your logo.",
            choices: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Black", "White"],
        },
    ])

    .then((answers) => {
        if (answers.text.length > 3) {
            console.log("Must enter a value of no more than 3 characters");
            promptUser();
        } else {
            writetoFile("Newly Generated Logo.svg", answers);
        }
    });
}

promptUser();