import React, { ReactElement } from 'react'
import { BsArrowDownCircle, BsCurrencyDollar } from 'react-icons/bs'

import Card from '../Card'

const CardsWrapper = (): ReactElement => {
  return (
    <div className={`flex gap-3 overflow-x-auto`}>
      <Card
        lastEntry="15 de abril"
        title="Entrada"
        icon={
          <BsArrowDownCircle className="rotate-180 text-greenPrimary w-8 h-8" />
        }
        value={1000}
      />
      <Card
        lastEntry="15 de abril"
        title="Saida"
        icon={<BsArrowDownCircle className="text-redPrimary w-8 h-8" />}
        value={10}
      />
      <Card
        lastEntry="15 de abril"
        title="Total"
        icon={<BsCurrencyDollar className="w-8 h-8" />}
        value={900}
        bgGreen
      />
    </div>
  )
}

export default CardsWrapper
