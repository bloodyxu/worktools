#!/usr/bin/bash

# 先检测是否全局安装了Gulp
if test -e /usr/local/bin/gulp
    then
        echo "已经全局安装Gulp，正在安装项目依赖"
        # 做为项目依赖安装
        npm install --save-dev gulp
        npm install gulp-sketch --save-dev
    else
        echo "尚未全局安装Gulp，正在全局安装Gulp"
        # 安装全局的Gulp
        npm install --global gulp
        npm install --save-dev gulp
        npm install gulp-sketch --save-dev
fi
# 安装Gulp
# npm install gulp
