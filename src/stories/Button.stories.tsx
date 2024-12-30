import React from "react";
import { Button } from "./Button";

// Definicja Storybooka dla Button
export default {
  title: "BUTTONS",
  component: Button,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    backgroundColor: {
      control: {
        type: "select",
        options: ["#ff6347", "#f97316", "#facc15"],
      },
    },
    selo: {
      control: {
        type: "radio",
        options: ["90", "20"],
      },
    },
    isChecked: {
      control: "boolean", // Typ kontrolki 'boolean' (checkbox)
      description: "Check if the button is checked", // Opis kontrolki
    },
    onClick: { action: "clicked" },
  },
};

// Template dla Storybooka
const Template = (args: any) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Kliknij mnie",
  size: "medium",
  backgroundColor: "#ff6347",
  selo: "90", // Domyślnie '90'
  isChecked: false, // Domyślnie checkbox nie jest zaznaczony
};

export const Custom = Template.bind({});
Custom.args = {
  label: "Przycisk niestandardowy",
  size: "large",
  backgroundColor: "#f97316", // Kolor tła (Orange)
  selo: "20", // Domyślnie '20'
  isChecked: true, // Domyślnie checkbox jest zaznaczony
};
