# react学习
## 启动项目
### 项目设置的目录
文件./config/projects.js增加数组即可

|参数|含义|
-:|:-
|name|项目名称|
|path|在./projects下的目录名称|
|isActive|当未在启动命令加命令参数时默认启动第一个true的项目|
|index|入口文件名称|

### 启动方式
- npm run start --env=start 启动项目名称为start的项目
- npm run start 启动项目中第一个isActive的项目
### 创建项目

