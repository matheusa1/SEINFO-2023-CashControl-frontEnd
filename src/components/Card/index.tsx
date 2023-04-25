import React, { ReactElement } from 'react'

interface CardProps {
  title: string
  icon?: ReactElement
  value: number
  lastEntry: string
  bgGreen?: boolean
}

const Card = ({
  title,
  icon,
  value,
  lastEntry,
  bgGreen,
}: CardProps): ReactElement => {
  return (
    <div
      className={`w-72 md:w-full z-10 ${
        bgGreen ? 'bg-greenDark' : 'bg-blackCard'
      } gap-3 py-6 pr-6 pl-8 rounded-md flex-shrink-0`}
    >
      <header className="flex justify-between">
        <span className="text-outlineLight">{title}</span>
        {icon}
      </header>
      <div>
        <p className="text-2xl font-bold md:text-4xl">R$ {value}</p>
        <p className="text-sm text-outline md:hidden">
          {' '}
          Ultima entrada em {lastEntry}
        </p>
      </div>
    </div>
  )
}

export default Card
