import React, { ReactElement } from 'react'

import Header from '../Header'

interface LayoutProps {
  children: ReactElement
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <div
      className={`bg-blackBg w-screen overflow-x-hidden min-h-screen px-6 py-16`}
    >
      <Header />
      <section>{children}</section>
    </div>
  )
}

export default Layout
