import * as ToggleR from '@radix-ui/react-toggle'
import React, { ReactElement } from 'react'
import { BsArrowDownCircle } from 'react-icons/bs'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  active?: boolean
  types?: 'in' | 'out'
  wfull?: boolean
}

const Toggle = ({
  children,
  active,
  types,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <ToggleR.Root
      {...rest}
      className={`w-full bg-blackTable rounded-md py-4 flex items-center justify-center transition-all duration-300 gap-2 ${
        active
          ? types === 'in'
            ? 'shadow-[0_0_0_.15vw_rgb(0,255,179)]'
            : 'shadow-[0_0_0_.15vw_rgba(247,90,104,1)]'
          : ''
      }`}
    >
      <BsArrowDownCircle
        className={`text-xl stroke-1 ${
          types === 'in' ? 'text-greenPrimary rotate-180' : 'text-redPrimary'
        }`}
      />
      <span className="text-lg">{children}</span>
    </ToggleR.Root>
  )
}

export default Toggle
