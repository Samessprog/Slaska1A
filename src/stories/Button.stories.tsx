import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',  
  component: Button,
};

export const Default = () => <Button label="Click me" />;
export const Custom = () => <Button label="Custom Button" onClick={() => alert('Button clicked!')} />;
