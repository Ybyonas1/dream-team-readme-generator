// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
    https://github.com/${data.Github}/${data.Title}
  # Description
  ${data.Description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#tests)
  * [Questions](#questions)

  # Installation
  The following necessary dependencies must installed to run the application

  # Usage
  In order to use this app, ${data.Usage}

  # License
  This project is licensed under the ${data.License} License.
  ![Random License](https://img.shields.io/badge/Demo-Readme-yellowgreen)
  ![License](https://img.shields.io/badge/License-Ybyonas1-red)

  # Contributing
  Contributors: ${data.Contribution}
  # Test
  The following is needed to run the test: ${data.Test}
  # Questions
  If you have any questions about the repo or this project, feel free to contact me at: ${data.Github}

`;
}

module.exports = generateMarkdown;
