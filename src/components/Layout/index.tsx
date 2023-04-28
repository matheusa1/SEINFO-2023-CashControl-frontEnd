import React, { ReactElement } from 'react'

import Header from '../Header'

interface LayoutProps {
  children: ReactElement
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <div
      className={`bg-blackBg w-full  overflow-x-hidden min-h-screen px-6 py-16`}
    >
      <Header />
      <div className="absolute top-0 left-0 w-screen h-56 bg-[#101010] z-0 md:hidden" />
      <section className="z-10">{children}</section>
    </div>
  )
}

export default Layout
