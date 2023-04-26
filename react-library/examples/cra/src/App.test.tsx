import { render } from "@testing-library/react";
import { isNum } from "sd-sample-react-lib/core";
import App from "./App";

test("renders learn react link", () => {
  const { container } = render(<App />);

  expect(container.firstChild).toHaveTextContent("Core Validator");
});

test("checks if is a number", () => {
  const res = isNum(123);
  expect(res).toBe(true);
});

// https://github.com/microsoft/TypeScript/issues/50794
// https://github.com/microsoft/TypeScript/issues/50794
// https://github.com/microsoft/TypeScript/issues/50152
// https://github.com/andrewbranch/example-subpath-exports-ts-compat
// https://github.com/jestjs/jest/issues/9565
