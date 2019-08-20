let fs = require('fs');
let myProjects = JSON.parse(fs.readFileSync('./config/projects.json').toString())

module.exports = (projectName) => {
    for(let item of myProjects) {
        if(projectName != undefined || projectName != null || projectName != '') {
            if(item.name == projectName) {
                return item;
            }  
        }else{
            if(item.isActive == true) {
                return item;
            }            
        } 
    }
}
