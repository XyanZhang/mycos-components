import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Base/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: '主要按钮',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    label: '次要按钮',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: '小按钮',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: '大按钮',
  },
};

export const Disabled: Story = {
  args: {
    label: '禁用按钮',
    disabled: true,
  },
}; 