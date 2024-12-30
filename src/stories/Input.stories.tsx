// Input.stories.tsx
import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
} as Meta;

const Template: Story = (args) => {
  const [value, setValue] = useState("");

  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Default Input",
  value: "",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Input with Error",
  value: "",
  error: "This field is required.",
};

export const Password = Template.bind({});
Password.args = {
  label: "Password Input",
  value: "",
  type: "password",
};
