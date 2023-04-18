import React from "react"
import "./dropdown.scss"
import { isNum } from "../../../core"

export type DropdownProps = {
  className?: string
  children?: React.ReactNode
  label: string
}

export const Dropdown = ({ label, ...props }: DropdownProps) => {
  const x = isNum("hello")
  return (
    <div className='test'>
      <h3>{label}</h3>
      isNum: {x}
      {props.children}
    </div>
  )
}
