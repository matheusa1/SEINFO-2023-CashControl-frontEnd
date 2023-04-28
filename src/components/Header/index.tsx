import { useTransactions } from '@/context/transactionsContext'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import React, { ReactElement } from 'react'
import { IoClose } from 'react-icons/io5'

import logo from '../../assets/svgs/Logo.svg'
import Button from '../Button'
import Input from '../Input'
import Toggle from '../Toggle'

const Header = (): ReactElement => {
  const [activeToggle, setActiveToggle] = React.useState<'in' | 'out'>('in')
  const { addTransactions } = useTransactions()

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)

    const transaction = Object.fromEntries(data)

    const obj = {
      description: String(transaction.description),
      category: String(transaction.category),
      price: Number(transaction.price),
      type: activeToggle === 'in',
    }

    addTransactions(obj)
  }

  return (
    <div className={`flex justify-between items-center mb-10`}>
      <Image
        src={logo}
        alt={'CashControl Logo'}
        className="w-36 md:w-auto z-10"
      />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Nova transação</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-[rgba(0,0,0,0.5)] animate-overlayShow z-40" />
          <Dialog.Content className="z-50 fixed bottom-0 left-0 bg-blackBg h-fit rounded-t-2xl md:rounded-2xl p-6 animate-contentShow w-full max-w-lg md:animate-contentShowMD md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <form onSubmit={onHandleSubmit} className="flex flex-col gap-10">
              <header className="flex justify-between items-center">
                <Dialog.Title className="font-bold text-xl">
                  Nova transação
                </Dialog.Title>
                <Dialog.Close
                  asChild
                  className="hover:bg-blackCard rounded-full w-8 h-8"
                >
                  <IoClose className="text-xl text-outline" />
                </Dialog.Close>
              </header>

              <main className="flex flex-col gap-3">
                <Input name="description" placeholder="Descrição" />
                <Input type="number" name="price" placeholder="Preço" />
                <Input name="category" placeholder="Categoria" />
                <div className="flex gap-2">
                  <Toggle
                    types="in"
                    active={activeToggle === 'in'}
                    onClick={() => setActiveToggle('in')}
                  >
                    Entrada
                  </Toggle>
                  <Toggle
                    types="out"
                    active={activeToggle === 'out'}
                    onClick={() => setActiveToggle('out')}
                  >
                    Saída
                  </Toggle>
                </div>
              </main>

              <footer>
                <Button type="submit" wfull>
                  Cadastrar
                </Button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default Header
