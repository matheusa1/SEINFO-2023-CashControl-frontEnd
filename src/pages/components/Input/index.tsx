import React, { ReactElement } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...rest }: InputProps): ReactElement => {
  return (
    <input
      {...rest}
      className="w-full bg-blackInput p-4 placeholder:text-outline border-none outline-none rounded-md transition-all duration-200 focus:shadow-[0_0_0_.15vw_rgb(0,255,179)] hover:shadow-[0_0_0_.15vw_rgba(135,207,235,0.186)]"
    />
  )
}
