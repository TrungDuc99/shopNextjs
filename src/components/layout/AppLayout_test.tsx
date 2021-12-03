import Header_f5scd from '@component/header/Header_f5scd'
import Sticky from '@component/sticky/Sticky'
import Head from 'next/head'
import React, { FC, Fragment, useCallback, useState } from 'react'

type AppLayout_testProps = {
  title?: string
  navbar?: React.ReactChild
}

const AppLayout_test: FC<AppLayout_testProps> = ({
  children,
  navbar,
  title = 'React Next.js Ecommerce Template',
}) => {
  const [isFixed, setIsFixed] = useState(false)

  const toggleIsFixed = useCallback((fixed) => {
    setIsFixed(fixed)
  }, [])

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <Header_f5scd></Header_f5scd>
      </Sticky>

      {navbar && <div className="section-after-sticky">{navbar}</div>}
      {!navbar ? <div className="section-after-sticky">{children}</div> : children}
    </Fragment>
  )
}

export default AppLayout_test
