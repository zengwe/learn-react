const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
let rootPath = path.resolve('./');
let excutePath = process.env.INIT_CWD;
const componentInfo = {
    name: process.argv[2],
    afterParseName: '',
    path: path.resolve(excutePath+'/'+process.argv[2])
}
function parseName(name) {
    let i = 0;
    while(true) {
        if(i > name.length) {
            break;
        }
        if(i > 50) {
            throw new Error('这组件名字怎么感觉怪怪的……', name);
        }

        let idx = name.indexOf('-');
        if(idx != -1) {
            let nextChart = name[idx + 1].toUpperCase();
            name = name.replace('-'+name[idx + 1], nextChart);
        }else{
            break;
        }
        i++;
    }
    return name[0].toUpperCase() + name.substr(1);
}
componentInfo.afterParseName =  parseName(componentInfo.name);
let scssStr = fs.readFileSync(path.resolve(rootPath+'/template/component/component.scss.tpl')).toString();
let testStr = fs.readFileSync(path.resolve(rootPath+'/template/component/component.test.tsx.tpl')).toString();
let componentStr = fs.readFileSync(path.resolve(rootPath+'/template/component/component.tsx.tpl')).toString();
fs.mkdirSync(componentInfo.path);
fs.writeFileSync(path.resolve(componentInfo.path+'/'+componentInfo.name+'.scss'), ejs.render(scssStr, componentInfo));
fs.writeFileSync(path.resolve(componentInfo.path+'/'+componentInfo.name+'.test.tsx'), ejs.render(testStr, componentInfo));
fs.writeFileSync(path.resolve(componentInfo.path+'/'+componentInfo.name+'.tsx'), ejs.render(componentStr, componentInfo));