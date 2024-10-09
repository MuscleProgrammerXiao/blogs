## 介绍
这是我的第一个[Next.js](https://nextjs.org/)项目，也是我的个人博客~
参考地址[学习地址](https://www.youtube.com/watch?v=y7JCnfbETPs)

后续，我会在我的博客上分享一些奇奇怪怪，有趣的事~


https://kinde.com


### 笔记

##### 数据库[prisma](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices)
npm i prisma -save-dev  安装数据库
npx prisma init --datasource-provider sqlite 初始化数据库
npx prisma db push 更新了数据库
npx prisma studio 打开控制面板

##### 部署到[vercel](https://vercel.com)
npm run build