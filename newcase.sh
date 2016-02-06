#!/usr/bin/bash

cur_dir=$(cd "$(dirname "$0")"; pwd)
echo "$cur_dir"

echo "请输入项目名称"
read caseName
echo 正在建立"$caseName"项目

# 在脚本当前位置建立项目文件夹
mkdir -p "$cur_dir"/"$caseName"
mkdir -p "$cur_dir"/"$caseName"/src

# 复制install.sh文件到项目文件夹
cp install.sh "$cur_dir"/"$caseName"
# bash "$cur_dir"/"$caseName"/install.sh
