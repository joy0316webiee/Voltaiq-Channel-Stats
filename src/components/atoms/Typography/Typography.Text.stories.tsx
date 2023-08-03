import type { StoryObj } from "@storybook/react";
import { Text, fontWeight } from ".";

export default {
  component: Text,
  title: "atoms/Typography/Text",
};

type Story = StoryObj<typeof Text>;

export const BodyL: Story = {
  args: {
    level: "lg",
    weight: fontWeight.REGULAR,
    children: "Body L",
  },
};

export const BodyM: Story = {
  args: {
    level: "md",
    weight: fontWeight.REGULAR,
    children: "Body M",
  },
};

export const BodyS: Story = {
  args: {
    level: "sm",
    weight: fontWeight.REGULAR,
    children: "Body S",
  },
};
