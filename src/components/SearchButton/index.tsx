import React, { ButtonHTMLAttributes, ReactElement } from 'react'
import { RiSearchLine } from 'react-icons/ri'

interface SearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SearchButton = ({ ...rest }: SearchButtonProps): ReactElement => {
  return (
    <button
      {...rest}
      className={`border-greenLight border-2 text-greenLight gap-3 rounded-md flex items-center justify-center px-4 py-3 md:px-8`}
    >
      <RiSearchLine />
      <span className="hidden md:inline">Buscar</span>
    </button>
  )
}

export default SearchButton
