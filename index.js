// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./util/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'Title',
      message: 'Enter the Title of your README.'
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Enter a Description.'
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Enter Installation instructions'
    },
    {
      type: 'input',
      name: 'Contribution',
      message: 'Enter Contribution Guidelines'
    },
    {
      type: 'input',
      name: 'Test',
      message: 'Enter Test Instructions'
    },
    {
      type: 'checkbox',
      name: 'License',
      message: 'Choose a license',
      choices: [
      'Wedi Wolde' ,
      'YWW Holdings' ,
      'Yonasty LLC' ]
    },
    {
      type: 'input',
      name: 'Github',
      message: 'Enter your GitHub Username.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email.'
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Enter the sites Usage'
    }
  ]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile('ReadME.md', data, (err) =>
      err ? console.log(err) : console.log('Successfully created a README Document')
    );
  };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("Readme.md Demo", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
