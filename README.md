# MyComponents

一个现代化的 React 组件库，基于 TypeScript 和 Emotion 构建，支持主题定制。

## 特性

- 🎨 支持主题定制
- 🌗 内置亮色/暗色主题
- 📦 基于 Emotion 的 CSS-in-JS 解决方案
- 🔧 完整的 TypeScript 类型支持
- 📚 Storybook 文档和示例
- 🎯 遵循 Antfu 的代码规范
- 🛠️ 现代化的开发工具链

## 技术栈

- React 18
- TypeScript 5
- Emotion (CSS-in-JS)
- Vite
- Storybook 7
- ESLint (Antfu Config)

## 安装

```bash
npm install @mycos/components
```

## 快速开始

1. 引入主题提供者：

```tsx
import { ThemeProvider } from '@mycos/components';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

2. 使用组件：

```tsx
import { Button, Input, Form } from '@mycos/components';

function LoginForm() {
  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="用户名" />
      <Input type="password" placeholder="密码" />
      <Button primary label="登录" />
    </Form>
  );
}
```

## 组件

### 基础组件 (Base)

- Button
  - 支持主要/次要样式
  - 支持大/中/小尺寸
  - 支持禁用状态
  - 支持主题定制

- Input
  - 支持多种输入类型
  - 支持错误状态
  - 支持禁用状态
  - 支持主题定制

### 高级组件 (Advance)

- Form
  - 集成表单布局
  - 支持加载状态
  - 支持自定义提交文本
  - 响应式设计

## 主题定制

1. 使用内置主题：

```tsx
import { ThemeProvider, darkTheme } from '@mycos/components';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

2. 自定义主题：

```tsx
import { Theme, ThemeProvider } from '@mycos/components';

const customTheme: Theme = {
  colors: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    // ... 其他颜色配置
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 启动 Storybook
npm run storybook

# 构建组件库
npm run build

# 构建 Storybook 文档
npm run build-storybook

# 运行 ESLint 检查
npm run lint

# 运行 ESLint 修复
npm run lint:fix
```

## 项目结构

```
src/
  ├── components/
  │   ├── base/           # 基础组件
  │   │   ├── Button/
  │   │   └── Input/
  │   └── advance/        # 高级组件
  │       └── Form/
  ├── theme/              # 主题相关
  │   ├── theme.ts        # 主题类型和默认主题
  │   ├── customTheme.ts  # 自定义主题（如暗色主题）
  │   └── styled.ts       # 样式组件
  └── index.ts           # 导出文件
```

## 代码规范

- 使用 Antfu 的 ESLint 配置
- 使用 Prettier 进行代码格式化
- 遵循 TypeScript 严格模式
- 组件文档使用 Storybook

## 浏览器支持

- Chrome >= 60
- Firefox >= 60
- Safari >= 12
- Edge >= 79

## 许可证

MIT

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交改动
4. 推送到分支
5. 创建 Pull Request

## 维护者

[XyanZhang](https://github.com/XyanZhang)
