# 基于lerna@8.0.0 + vue3 + pnpm搭建的monorepo项目模板

## 全局安装pnpm与lerna模块
npm i pnpm -g
npm i lerna -g

## 在根目录下安装依赖
pnpm i -w


## 在根目录下执行
lerna run --scope app-base dev
即可运行app-base应用

## 创建新模块
lerna create [new package]

## 在新模块下安装vue3
进入新模块根目录
pnpm run vue@latest .

## 修改新模块package.json中的名称
"name": "your-module-name"

## 如何引用公共模块的内容
以模板项目中的@yyt为例
### 引入ui
在模块项目中的main.ts中添加

import commonUI from '@yyt/components'

app.use(commonUI)

### 引入utils
import * as utils from '@yyt/utils'