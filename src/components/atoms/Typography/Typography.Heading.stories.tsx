import type { StoryObj } from "@storybook/react";
import { Heading, fontWeight } from ".";

export default {
  title: "atoms/Typography/Heading",
  component: Heading,
};

type Story = StoryObj<typeof Heading>;

export const HeadlineL: Story = {
  args: {
    level: "lg",
    weight: fontWeight.BOLD,
    children: "Headline L",
  },
};

export const HeadlineM: Story = {
  args: {
    level: "md",
    weight: fontWeight.BOLD,
    children: "Headline M",
  },
};

export const HeadlineS: Story = {
  args: {
    level: "sm",
    weight: fontWeight.BOLD,
    children: "Headline S",
  },
};
