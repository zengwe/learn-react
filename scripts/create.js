const fs = require( 'fs' ),stat = fs.stat;
const path = require('path');
/**
 * @description 复制目录中的所有文件包括子目录
 * @param {*} src 需要复制的目录
 * @param {*} dst 复制到指定的目录
 */
function copy( src, dst ){
    fs.readdir( src, function( err, paths ){
        if( err ){
            throw err;
        }
        paths.forEach(function( path ){
            var _src = src + '/' + path,
            
                _dst = dst + '/' + path,
                readable, writable;      
  
            stat( _src, function( err, st ){
                if( err ){
                    throw err;
                }
                if( st.isFile() ){
                    readable = fs.createReadStream( _src );
                    writable = fs.createWriteStream( _dst ); 
                    readable.pipe( writable );
                }
                else if( st.isDirectory() ){
                    exists( _src, _dst, copy );
                }
            });
        });
    });
};
/**
 * @description 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
 * @param {*} src 
 * @param {*} dst 
 * @param {*} callback 
 */
function exists( src, dst, callback ){
    fs.exists( dst, function( exists ){
        if( exists ){
            callback( src, dst );
        }
        else{
            fs.mkdir( dst, function(){
                callback( src, dst );
            });
        }
    });
};
//删除目录下的所有文件
function delFile(fileUrl,flag){
    if (!fs.existsSync(fileUrl)) return;
    // 当前文件为文件夹时
    if (fs.statSync(fileUrl).isDirectory()) {
        var files = fs.readdirSync(fileUrl);
        var len = files.length,
            removeNumber = 0;
        if (len > 0) {
            files.forEach(function(file) {
                removeNumber ++;
                var stats = fs.statSync(fileUrl+'/'+file);
                var url = fileUrl + '/' + file;
                if (fs.statSync(url).isDirectory()) {
                    delFile(url,true);
                } else {
                    fs.unlinkSync(url);
                }
            });
            if(len == removeNumber && flag){
                fs.rmdirSync(fileUrl);
            }
        } else if(len == 0 && flag){
            fs.rmdirSync(fileUrl);
        }
    } else {
        // 当前文件为文件时
        fs.unlinkSync(fileUrl);
        console.log('删除文件' + fileUrl + '成功');
    }
}
// exists( './login', './haha', copy );
// console.log(process.argv);
// exists('./projects/start', './projects/dd', copy);
let args = new Map();
for(let param of process.argv) {
    if(/^--/ig.test(param)) {
        // param = param.replace(/^--/ig,'').replace(/-/ig,'_').toUpperCase().split('=');
        param = param.split('=');
        args.set(param[0].replace(/^--/ig,'').replace(/-/ig,'_').toUpperCase(),param[1]);
    }
}
if(args.has('HELP') == true) {
    console.log('args param has:');
    console.log('--help get helps');
    console.log('--project-name set project name');
    console.log('--is-active is set status active,default value true. --is-active=true');
    console.log('--remove remove project');
    return;
}
if(args.get('PROJECT_NAME') == undefined) {
    throw new Error('mybe you need to set project name!');
}
let projectInfo = {
    name: args.get('PROJECT_NAME'),
    path: args.get('PROJECT_NAME'),
    isActive: false,
    index: 'index'
};
if(args.get('IS_ACTIVE') != undefined) {
    if(args.get('IS_ACTIVE') == 'true') {
        projectInfo.isActive = true;
    }
    if(args.get('IS_ACTIVE') == 'false') {
        projectInfo.isActive = false;
    }
}
let projects = JSON.parse(fs.readFileSync('./config/projects.json').toString());
if(args.get('REMOVE') == undefined) {
    if(fs.existsSync(`./projects/${args.get('PROJECT_NAME')}`)) {
        throw new Error('has the project!');
    }
    if(projectInfo.isActive == true) {
        for(let item of projects) {
            item.isActive = false;
        }
    }
    projects.push(projectInfo);
    fs.writeFileSync('./config/projects.json', JSON.stringify(projects,null, '\t'));
    exists('./template/project', './projects/'+projectInfo.name, copy);
}else{
    for(let i = 0; i < projects.length; i++) {
        if(projects[i].name == projectInfo.name) {
            projects.splice(i, 1);
        }
    }
    fs.writeFileSync('./config/projects.json', JSON.stringify(projects,null, '\t'));
    try {
        delFile(path.resolve('./projects/'+projectInfo.name));
        fs.rmdirSync(path.resolve('./projects/'+projectInfo.name));
    } catch (error) {   
    }
}