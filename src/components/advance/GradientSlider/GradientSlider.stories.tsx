import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { GradientSlider } from './GradientSlider'
import { ThemeProvider } from '../../../theme/ThemeContext'

const meta = {
  title: 'Advance/GradientSlider',
  component: GradientSlider,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: '400px', padding: '20px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    startColor: { control: 'color' },
    endColor: { control: 'color' },
  },
} satisfies Meta<typeof GradientSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 30,
  },
}

export const CustomColors: Story = {
  args: {
    defaultValue: 50,
    startColor: '#ff4081',
    endColor: '#7c4dff',
  },
}

export const WithMarks: Story = {
  args: {
    defaultValue: 30,
    startColor: '#2196f3',
    endColor: '#4caf50',
    marks: {
      0: '冷',
      25: '凉',
      50: '适中',
      75: '温',
      100: '热',
    },
  },
}

export const Temperature: Story = {
  args: {
    defaultValue: 20,
    min: -20,
    max: 40,
    step: 1,
    startColor: '#2196f3',
    endColor: '#f44336',
    marks: {
      '-20': '-20°C',
      0: '0°C',
      20: '20°C',
      40: '40°C',
    },
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 30,
    disabled: true,
    startColor: '#9e9e9e',
    endColor: '#616161',
  },
}
