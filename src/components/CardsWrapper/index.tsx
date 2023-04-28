import { useAmount } from '@/context/amountContext'
import React, { ReactElement } from 'react'
import { BsArrowDownCircle, BsCurrencyDollar } from 'react-icons/bs'

import Card from '../Card'

const CardsWrapper = (): ReactElement => {
  const { state } = useAmount()

  return (
    <div
      className={`flex gap-3 overflow-x-auto md:grid md:grid-cols-3 md:gap-x-8`}
    >
      <Card
        lastEntry="15 de abril"
        title="Entrada"
        icon={
          <BsArrowDownCircle className="rotate-180 text-greenPrimary w-8 h-8" />
        }
        value={state.deposit}
      />
      <Card
        lastEntry="15 de abril"
        title="Saida"
        icon={<BsArrowDownCircle className="text-redPrimary w-8 h-8" />}
        value={state.withdraw}
      />
      <Card
        lastEntry="15 de abril"
        title="Total"
        icon={<BsCurrencyDollar className="w-8 h-8" />}
        value={state.total}
        bgGreen
      />
    </div>
  )
}

export default CardsWrapper
