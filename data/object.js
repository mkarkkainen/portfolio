const fs = require('fs');
const { projects } = require('./projects.js');

console.log(projects);

// const addNewKeyValuePair = (key, value) => {
//   projects.forEach(project => {
//     project[key] = value;
//   });
// };

// const modded = addNewKeyValuePair('shortDescription', 'Test description');

// const saveDataToNewFile = () => {
//   fs.writeFile('./newProjectsData.js', modded, err => console.log(err));
// };

// saveDataToNewFile();
