import Footer_f5seconds from '@component/footer/Footer_f5seconds'
import Header_f5scd from '@component/header/Header_f5scd'
import Head from 'next/head'
import React, { FC, Fragment } from 'react'
type AppLayout_F5scdProps = {
  title?: string
  navbar?: React.ReactChild
}

const AppLayout_F5scd: FC<AppLayout_F5scdProps> = ({ children, navbar }) => {
  return (
    <Fragment>
      <Head>
        <title>Loyalty-Landing</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header_f5scd />

      {navbar && <div className="section-after-sticky">{navbar}</div>}
      {!navbar ? <div className="section-after-sticky">{children}</div> : children}

      <Footer_f5seconds></Footer_f5seconds>
    </Fragment>
  )
}

export default AppLayout_F5scd
// display: 'flex',
// alignItems: 'center',
// flexDirection: 'row',
// textAlign: 'center',
// border: '3px solid #73AD21',
// justifyContent: 'center' || 'spaceBetween'
// filter: 'brightness(50%)' làm tối màu
