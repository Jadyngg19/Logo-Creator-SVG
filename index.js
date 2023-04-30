const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./Lib/shapes");

function writeToSVGFile(fileName, answers) {
  let svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>";

  let shapeChoice;
  let shapeWidth;
  let shapeHeight;
  if (answers.shapeChoice === "Circle") {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    shapeWidth = 160;
    shapeHeight = 160;
  } else if (answers.shapeChoice === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150,18 244,182 56,182" fill="${answers.shapeBackgroundColor}"/>`;
    shapeWidth = 188;
    shapeHeight = 165;
  } else {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    shapeWidth = 160;
    shapeHeight = 160;
  }
  
  const centerX = 150; // x coordinate of the center of the SVG canvas
  const centerY = 115; // y coordinate of the center of the SVG canvas
  const textX = centerX;
  const textY = centerY + (shapeHeight / 2) - 10; // adjust the vertical position of the text element
  
  svgString += `<text x="${textX}" y="${textY}" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
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
        writeToSVGFile("Newly Generated Logo.svg", answers);
      }
    });
}

promptUser();
