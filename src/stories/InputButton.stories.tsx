// InputButton.stories.tsx
import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "./Button";
import { Input } from "./Input";

export default {
  title: "Components/Input and Button",
  component: Input,
} as Meta;

const Template: Story = (args) => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState<string | null>(null);

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Input
        {...args}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={handleSubmit} label="Submit" />
      {submittedValue && <p>Submitted Value: {submittedValue}</p>}
    </div>
  );
};

export const InputWithButton = Template.bind({});
InputWithButton.args = {
  label: "Enter Text",
  value: "",
};
