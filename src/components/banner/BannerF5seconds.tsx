// import BazarImage from '@component/BazarImage'
import { Box } from '@material-ui/core'
import React, { FC } from 'react'
import styles from '../../../src/styles/Home.module.css'
// styled component

const BannerF5seconds: FC = () => {
  return (
    <div
      style={{
        paddingBottom: '6rem ',
      }}
    >
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <div className={styles.imgBanner}></div>
        {/* <BazarImage
          src="assets/images/f5seconds/banner-header.jpg"
          alt="hinh-thuong-hieu"
          style={{
            width: '100%',
          }}
        ></BazarImage> */}

        <h1
          className={styles.titleF5seconds}
          style={{
            fontSize: '6.5rem',
            lineHeight: '6.5rem',
            letterSpacing: '0.5rem',
            margin: 'auto',
            padding: '10px',
            color: 'rgba(255, 255, 255, 0.7)',
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          F5SECONDS
        </h1>
        <h2
          className={styles.undertitleF5seconds}
          style={{
            fontSize: '1.25rem',
            lineHeight: '6.5rem',
            letterSpacing: '0.8rem',
            margin: 'auto',
            padding: '10px',
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, 30%)',
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          Giải pháp công nghệ 5 giây
        </h2>
      </Box>
    </div>
  )
}

export default BannerF5seconds
