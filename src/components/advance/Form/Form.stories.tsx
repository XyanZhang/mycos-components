import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Form } from './Form'
import { Input } from '../../base/Input/Input'
import { ThemeProvider } from '../../../theme/ThemeContext'

const meta = {
  title: 'Advance/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: '400px', padding: '1rem' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    submitText: {
      control: 'text',
    },
    loading: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

const DemoForm = (props: React.ComponentProps<typeof Form>) => {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  })

  return (
    <Form {...props}>
      <Input
        placeholder="用户名"
        value={formData.username}
        onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
      />
      <Input
        type="password"
        placeholder="密码"
        value={formData.password}
        onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
      />
    </Form>
  )
}

export const Default: Story = {
  render: () => (
    <DemoForm
      onSubmit={(e) => {
        e.preventDefault()
        console.log('Form submitted')
      }}
    />
  ),
}

export const Loading: Story = {
  render: () => (
    <DemoForm
      loading
      onSubmit={(e) => {
        e.preventDefault()
        console.log('Form submitted')
      }}
    />
  ),
}

export const CustomSubmitText: Story = {
  render: () => (
    <DemoForm
      submitText="登录"
      onSubmit={(e) => {
        e.preventDefault()
        console.log('Form submitted')
      }}
    />
  ),
}
