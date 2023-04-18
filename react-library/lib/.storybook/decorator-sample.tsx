import { DecoratorFn } from "@storybook/react";
import * as React from "react";

export const decoratorSample: DecoratorFn = (Story, context) => {
  return (
    <div>
      <h1>Decorator sample</h1>
      <Story {...context} />
    </div>
  );
};
