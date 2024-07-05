---
title: 登录服务器
editLink: true
---

# 登录服务器

我们采用正版+皮肤站(盗版)的验证方式。

使用该策略是为了让囊中羞涩的玩家也能加入服务器，以及省去了每次登录必须输密码的繁杂。

而且非正版也可以使用皮肤了！(虽然正版玩家看不到皮肤站的皮肤QAQ)

## 正版登录

无需额外配置，使用任一匹配服务器版本的客户端加入服务器即可！

## 基岩版登录

基岩版需要登录xbox账号，用户名尽量取短。不然无法进入服务器

## 非正版登录

我们**不使用**进服密码登录的验证方式，我们使用的是自建皮肤站[归墟SKIN](https://yuki.ink)作为第三方登录平台

### 第一步：注册/验证/登录

1. 进入[注册界面]([登录 - 归墟SKIN (yuki.ink)](https://skin.yuki.ink/auth/login))，有账户直接注册，没有即点下方的**注册新账户**
2. 按要求输入内容完成注册
3. 验证邮箱，如果你的邮箱输入正确，那网站就会向你的邮箱发送一份邮件
4. 点击邮件中的链接，在网页中输入你的邮箱。（如果无法在邮箱软件中打开链接，请复制粘贴到浏览器）

5. 完成注册/验证

### 第二步：配置启动器

这里我们以PCL作为演示

#### 简单配置

1. 进入皮肤站仪表盘界面

2. 将**快速配置启动器**框内的蓝色按钮拖入启动器

3. 正常情况下你的启动器已完成配置，并自动登录了你的皮肤站账户

#### 完整配置

> [!WARNING]此操作流程仅适用于简单配置无法完成的用户，完成配置的无需进行该操作！！！

1. 打开启动器

2. 进入版本设置

3. 进入版本设置页面的设置选项
4. 下滑，找到服务器选项栏

5. 将登录方式改为最下方的 **第三方登录: Authlib Injector 或 LittleSkin**

6. 将`https://skin.yuki.ink/api/yggdrasil`填写到**认证服务器**栏

7. 将`https://skin.yuki.ink/auth/register`填写到**注册链接**栏

8. 返回启动器主页，输入账户密码完成登录



> [!TIP]皮肤站不仅是一个外置登录网站，它也正如它的名字一样，可以进行皮肤托管。

> [!TIP]你只需要进入皮肤站的**我的衣柜**界面使用皮肤即可。没有的话，你应前往皮肤库进行导入！