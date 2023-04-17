import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Dropdown } from "./dropdown"

export default {
  title: "Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>

export const Dummy: ComponentStory<typeof Dropdown> = (args) => {
  return <Dropdown {...args} />
}
Dummy.args = {
  label: "Dummy",
  children: "test",
}
