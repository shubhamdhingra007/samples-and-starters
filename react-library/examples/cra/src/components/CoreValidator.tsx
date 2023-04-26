import { coreBuilder, isNum } from "sd-sample-react-lib/core";
// import { isNum, coreBuilder } from "sd-sample-react-lib";

const value = coreBuilder({
  key1: "string123",
  key2: 123,
});

export const CoreValidator = () => {
  return (
    <div>
      <h1>Core Validator</h1>
      <pre>
        core builder value: {value} {isNum("123").toString()}
      </pre>
    </div>
  );
};
