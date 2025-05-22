# 基础镜像（Node.js 版本根据项目需要选择）
FROM node:18

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果有）
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制全部代码
COPY . .

# 构建项目（如有）
RUN npm run build

# 设置默认端口（你也可以根据 Railway 要求改成 8080）
ENV PORT=1337

# 暴露端口
EXPOSE 1337

# 启动应用
CMD ["npm", "run", "start"]
