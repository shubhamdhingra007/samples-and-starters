import { render } from "@testing-library/react"
import React from "react"
import { Dropdown } from "./dropdown"

describe("Dropdown", () => {
  test("should have class test", () => {
    const { container } = render(<Dropdown label='xyx'>Some text</Dropdown>)
    expect(container.firstChild).toHaveTextContent("Some text")
    expect(container.firstChild).toHaveClass("test")
  })
})
