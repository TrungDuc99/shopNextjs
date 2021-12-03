import Image from '@component/BazarImage'
import { Container } from '@material-ui/core'
import React, { FC } from 'react'
import styles from '../../styles/Home.module.css'
const InfoDetail: FC = () => {
  return (
    <div className={styles.infoDetail}>
      <Container sx={{}}>
        <div className={styles.listItemInfo}>
          <div className={styles.itemInfo}>
            <Image
              display="block"
              height="28px"
              src="/assets/images/f5seconds/icons/InfoDetail/map.png"
              alt="logo"
              style={{
                color: '#64a19d ',
                height: 30,
                width: 30,
                justifyContent: 'center',
              }}
            />
            <div className={styles.nameInfo}>ADDRESS</div>
            <div className={styles.lineSpace}>
              <Image
                display="block"
                height="28px"
                src="/assets/images/f5seconds/icons/InfoDetail/minus.png"
                alt="logo"
                style={{
                  color: '#64a19d ',
                  height: 30,
                  width: 30,
                  justifyContent: 'center',
                }}
              />
            </div>
            <div className={styles.detailInfo}>
              Tầng 08 - Cao Thắng Mall - Số 19 Cao Thắng, Phường 02, Quận 3
            </div>
          </div>
          <div className={styles.itemInfo}>
            <Image
              display="block"
              height="28px"
              src="/assets/images/f5seconds/icons/InfoDetail/gmail.png"
              alt="logo"
              style={{
                color: '#64a19d ',
                height: 30,
                width: 30,
                justifyContent: 'center',
              }}
            />
            <div className={styles.nameInfo}>EMAIL</div>
            <div className={styles.lineSpace}>
              {' '}
              <Image
                display="block"
                height="28px"
                src="/assets/images/f5seconds/icons/InfoDetail/minus.png"
                alt="logo"
                style={{
                  color: '#64a19d ',
                  height: 30,
                  width: 30,
                  justifyContent: 'center',
                }}
              />
            </div>
            <div className={styles.detailInfo}>support@f5seconds.vn</div>
          </div>
          <div className={styles.itemInfo}>
            <Image
              display="block"
              height="28px"
              src="/assets/images/f5seconds/icons/InfoDetail/phone.png"
              alt="logo"
              style={{
                color: '#64a19d ',
                height: 30,
                width: 30,
                justifyContent: 'center',
              }}
            />
            <div className={styles.nameInfo}>PHONE</div>
            <div className={styles.lineSpace}>
              <Image
                display="block"
                height="28px"
                src="/assets/images/f5seconds/icons/InfoDetail/minus.png"
                alt="logo"
                style={{
                  color: '#64a19d ',
                  height: 30,
                  width: 30,
                  justifyContent: 'center',
                }}
              />
            </div>
            <div className={styles.detailInfo}>0909347980</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default InfoDetail
