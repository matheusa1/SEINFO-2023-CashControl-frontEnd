import { useTransactions } from '@/context/transactionsContext'
import React, { ReactElement } from 'react'

import Input from '../Input'
import SearchButton from '../SearchButton'

const SearchInputWrapper = (): ReactElement => {
  const { getTransactions } = useTransactions()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const search = Object.fromEntries(data).newSearch.toString()

    getTransactions(undefined, undefined, search)
  }

  return (
    <form className={`flex gap-4`} onSubmit={handleSubmit}>
      <Input name="newSearch" placeholder="Busque uma transação" />

      <SearchButton type="submit" />
    </form>
  )
}

export default SearchInputWrapper
