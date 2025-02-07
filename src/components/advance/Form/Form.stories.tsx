import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { Input } from '../../base/Input/Input';

const meta = {
  title: 'Advance/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Input placeholder="用户名" />
        <Input type="password" placeholder="密码" />
      </>
    ),
    onSubmit: (e) => {
      e.preventDefault();
      console.log('Form submitted');
    },
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
}; 