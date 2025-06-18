# ---- 构建阶段 使用 Node 18 作为基础镜像 ----
FROM node:18 AS builder

# 设置工作目录
WORKDIR /app

# 安装依赖
COPY package*.json ./
RUN npm ci

# 拷贝全部源代码（包括 tsconfig、src 等）
COPY . .

# 构建项目（如存在 tsconfig.json 和 build 脚本）
RUN npm run build

# ---- 运行阶段 ----
FROM node:18-slim

WORKDIR /app

# 复制构建产物及必要文件（不包含 devDependencies）
COPY --from=builder /app /app

ENV NODE_ENV=production

# 设置环境变量
ENV PORT=1337

# 暴露端口
EXPOSE 1337

# 启动应用
CMD ["npm", "run", "start"]
