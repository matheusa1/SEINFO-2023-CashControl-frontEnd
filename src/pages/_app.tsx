import Layout from '@/components/Layout'
import { AmountContextProvider } from '@/context/amountContext'
import { TransactionsContextProvider } from '@/context/transactionsContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TransactionsContextProvider>
      <AmountContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AmountContextProvider>
    </TransactionsContextProvider>
  )
}
