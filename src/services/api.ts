import { AmountType, DataTransactions, GetTransactions, addTransactionsProps } from '@/types/transactions'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3334',
})

export async function GetTransactions(data?: GetTransactions) {
  const response = await api.get<DataTransactions>(
    `/transaction/search?limit=${data?.limit}&page=${data?.page}&search=${data?.search}`,
  )

  return response.data
}

export async function getAmount() {
  const response = await api.get<AmountType>('/transaction/amount')

  return response.data
}

export async function addTransactionsApi(data: addTransactionsProps) {
  try {
    const response = await api.post('/transaction', data)

    return response
  }
  catch (error) {
    return error
  }

}