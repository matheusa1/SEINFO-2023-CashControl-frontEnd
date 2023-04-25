import React, { ReactElement } from 'react'

interface CardProps {
  title: string
}

const Card = ({ title }: CardProps): ReactElement => {
  return (
    <div className={``}>
      <header>
        <span>{title}</span>
      </header>
    </div>
  )
}

export default Card
