const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

function writetoFile(fileName, answers) {
    let svgString = "";
    svgString =
    '<svg version="1.1" width="300" height="200" xmls="https://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${answers.shape}`;
    
}