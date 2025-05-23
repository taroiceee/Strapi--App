# 使用 Node 18 作为基础镜像
FROM node:18

# 设置工作目录
WORKDIR /app

# 拷贝依赖声明文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 拷贝全部源代码（包括 tsconfig、src 等）
COPY . .

# 构建项目（如存在 tsconfig.json 和 build 脚本）
RUN npm run build

# 设置环境变量
ENV PORT=1337

# 暴露端口
EXPOSE 1337

# 启动应用
CMD ["npm", "run", "start"]
