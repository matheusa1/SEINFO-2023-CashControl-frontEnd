import { useTransactions } from '@/context/transactionsContext'
import React, { ReactElement } from 'react'

import Table from '../Table'

const ContentWrapper = (): ReactElement => {
  const { transactions } = useTransactions()

  return (
    <div className="grid grid-cols-1 gap-y-3">
      {transactions.transactions.map((transaction) => (
        <Table key={transaction.id} transaction={transaction} />
      ))}
    </div>
  )
}

export default ContentWrapper
