const fs = require('fs');
const { projectsData } = require('./projectsData.js');

// Access and use the projectsData array
const saveDataToFile = () => {
  const dataToExport = `module.exports = ${JSON.stringify(
    { projectsData },
    null,
    2
  )};`;

  fs.writeFile('./projectsData2.js', dataToExport, err => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Data has been saved to your-data-file.js');
    }
  });
};

const insertKeyValueIntoProjects = (key, value) => {
  projectsData.forEach(project => {
    project[key] = value;
  });

  // Save the modified data to the file
  saveDataToFile();
};

insertKeyValueIntoProjects('newKey', 'newValue');
