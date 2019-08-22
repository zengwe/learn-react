# react学习
## 启动项目
### 项目设置的目录
文件./config/projects.json增加数组即可

|参数|含义|
-:|:-
|name|项目名称|
|path|在./projects下的目录名称|
|isActive|当未在启动命令加命令参数时默认启动第一个true的项目|
|index|入口文件名称|

### 启动方式
- npm run start --env=start 启动项目名称为start的项目
- npm run start 启动项目中第一个isActive的项目
### 创建/移除项目

- npm run create -- --project-name=myproject
- npm run create -- --project-name=myproject --is-active=true
- npm run create -- --project-name=myproject --remove=true

### 创建组件
在需要创建组件的目录下
- npm run component component-name
> component-name为组件命1

## 学习
- [react之组件基本用法](https://github.com/zengwe/learn-react/tree/master/projects/demo1-component)
- [react之组件间通信](https://github.com/zengwe/learn-react/tree/master/projects/demo2-component-communicate)
