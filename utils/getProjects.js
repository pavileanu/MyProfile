const fs = require('fs');

module.exports = () => {
    try {
        const rawData =  fs.readFileSync(`./data/projects.json`);
        const projects = JSON.parse(rawData);
        return projects;
    }
    catch (err) {
        console.log(err);
    }
}