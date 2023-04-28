import React, { ReactElement } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BiTag } from 'react-icons/bi'

import { Transactions } from '../../types/transactions'

interface TableProps {
  transaction: Transactions
}

const Table = ({ transaction }: TableProps): ReactElement => {
  const date = transaction?.createdAt
    ?.split('T')[0]
    .split('-')
    .reverse()
    .join('/')

  return (
    <div
      className={`bg-blackTable flex flex-col p-5 rounded-md gap-1 md:grid md:grid-cols-3 md:gap-x-4`}
    >
      <span className="text-outlineLight">{transaction?.category}</span>
      <strong
        className={`${
          transaction?.type ? 'text-greenLight' : 'text-redPrimary'
        } font-bold text-xl md:justify-self-center md:text-base md:font-normal`}
      >
        {!transaction?.type && '- '} R$ {transaction?.price}
      </strong>
      <div className="text-outline flex justify-between md:text-outlineLight">
        <span className="flex gap-2 items-center">
          <BiTag className="rotate-180 md:hidden" /> {transaction?.description}
        </span>
        <span className="flex gap-2 items-center">
          <AiOutlineCalendar className="md:hidden" /> {date}
        </span>
      </div>
    </div>
  )
}

export default Table
