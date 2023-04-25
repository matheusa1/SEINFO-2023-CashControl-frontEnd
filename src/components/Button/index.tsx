import React, { ReactElement } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  active?: boolean
  types?: 'in' | 'out'
  wfull?: boolean
}

const Button = ({ children, wfull, ...rest }: ButtonProps): ReactElement => {
  return (
    <button
      {...rest}
      className={`z-10 py-2 px-4 bg-greenPrimary rounded-lg font-bold text-sm md:px-5 md:py-3 md:text-base ${
        wfull && 'w-full py-3 text-base'
      }`}
    >
      {children}
    </button>
  )
}

export default Button
