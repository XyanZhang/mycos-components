import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'
import { ThemeProvider } from '../../../theme/ThemeContext'

const meta = {
  title: 'Base/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: '300px', padding: '20px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 30,
    value: 0,
  },
}

export const WithMarks: Story = {
  args: {
    defaultValue: 30,
    marks: {
      0: '0°C',
      20: '20°C',
      40: '40°C',
      60: '60°C',
      80: '80°C',
      100: '100°C',
    },
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 30,
    disabled: true,
  },
}

export const CustomStep: Story = {
  args: {
    defaultValue: 30,
    step: 10,
    marks: {
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      60: '60',
      70: '70',
      80: '80',
      90: '90',
      100: '100',
    },
  },
}
