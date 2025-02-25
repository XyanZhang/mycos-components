import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ThemeProvider } from '../../../theme/ThemeContext'
import { darkTheme } from '../../../theme/customTheme'

const meta = {
  title: 'Base/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: '1rem' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    primary: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    children: '主要按钮',
    size: 'medium',
  },
}

// 使用暗色主题的示例
export const PrimaryDark: Story = {
  args: {
    primary: true,
    children: '暗色主题按钮',
    size: 'medium',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <div style={{ padding: '1rem', background: '#121212' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
}

export const Secondary: Story = {
  args: {
    primary: false,
    children: '次要按钮',
    size: 'medium',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    children: '小按钮',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    children: '大按钮',
  },
}

export const Disabled: Story = {
  args: {
    children: '禁用按钮',
    disabled: true,
  },
}
