import React from "react"
import "./dropdown.scss"

export type DropdownProps = {
  className?: string
  children?: React.ReactNode
  label: string
}

export const Dropdown = ({ label, ...props }: DropdownProps) => {
  return (
    <div className='test'>
      <h3>{label}</h3>
      {props.children}
    </div>
  )
}
