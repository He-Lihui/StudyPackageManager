/*
 * @Author: your name
 * @Date: 2021-01-13 16:05:07
 * @LastEditTime: 2021-01-14 15:18:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \拉钩2-1\generator-mygen\generators\app\index.js
 */
const Generator = require('yeoman-generator')
    // generator 和 核心入口
module.exports = class extends Generator {
    // 类似于其他cli的构建过程中向用户提的问题
    prompting() {
        // Yeoman 会在询问用户环节调用这个方法
        return this.prompt([{
                type: "input",
                name: 'name',
                message: 'Your project name:',
                default: this.appname //默认为当前目录的文件夹的名字
            }])
            .then(answers => {
                this.answers = answers
            })
    }

    // 自动导出生命周期方法
    // 文件写入的功能
    writing() {
        //     // yeoman 自动调用这个方法
        //     this.fs.write(
        //         this.destinationPath('test.txt'),
        //         Math.random().toString()
        //     )

        // 模板文件的目录
        const tmpl = this.templatePath('bar.html')
            // 输出目标路径
        const output = this.destinationPath('bar.html')
            // 模板数据上下文
        const context = this.answers
        this.fs.copyTpl(tmpl, output, context)
    }

}