import { coreBuilder } from "@sd-samples/react-lib/core"

const value = coreBuilder({
  key1: "string123",
  key2: 123,
})

export const CoreValidator = () => {
  return (
    <div>
      <h1>Core Validator</h1>
      <pre>core builder value: {value}</pre>
    </div>
  )
}
