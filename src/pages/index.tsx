import CardsWrapper from '@/components/CardsWrapper'
import ContentWrapper from '@/components/ContentWrapper'
import SearchInputWrapper from '@/components/SearchInputWrapper'
import { useAmount } from '@/context/amountContext'
import { useTransactions } from '@/context/transactionsContext'
import { getAmount } from '@/services/api'
import { useCallback, useEffect } from 'react'

export default function Home() {
  const { setAmount } = useAmount()
  const { getTransactions, transactions } = useTransactions()

  const getData = useCallback(async () => {
    const amount = await getAmount()
    await getTransactions()

    setAmount(amount)
  }, [setAmount, getTransactions])

  useEffect(() => {
    getData()
  }, [getData])

  useEffect(() => {
    console.log(transactions)
  }, [transactions])

  return (
    <div className="bg-red-500 flex flex-col gap-16">
      <CardsWrapper />

      <section className="flex flex-col gap-6">
        <header>
          <SearchInputWrapper />
        </header>
        <main>
          <ContentWrapper />
        </main>
      </section>
    </div>
  )
}
