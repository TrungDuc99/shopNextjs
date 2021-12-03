import Footer_exb from '@component/footer/Footer_exb'
import Navbar_Exb from '@component/navbar/Navbar_Exb'
import { Box } from '@material-ui/system'
import Head from 'next/head'
import React, { FC, Fragment } from 'react'
type AppLayout_exbProps = {
  title?: string
  navbar?: React.ReactChild
}

const AppLayout_exb: FC<AppLayout_exbProps> = ({ children, navbar }) => {
  return (
    <Fragment>
      <Head>
        <title>Loyalty-Landing</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar_Exb />
      {navbar && <div className="section-after-sticky">{navbar}</div>}
      {!navbar ? <div className="section-after-sticky">{children}</div> : children}

      <Footer_exb />
      <Box bgcolor="#005F92" height="50px"></Box>
    </Fragment>
  )
}

export default AppLayout_exb
