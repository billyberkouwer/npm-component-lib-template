import type { Meta, StoryObj } from '@storybook/react';

import TextBox from './TextBox';

const meta = {
  component: TextBox,
} satisfies Meta<typeof TextBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "hello"
  }
};