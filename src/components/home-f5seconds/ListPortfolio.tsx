import BazarCard from '@component/BazarCard'
import BazarImage from '@component/BazarImage'
import { Container, Grid } from '@material-ui/core'
import { Box } from '@material-ui/system'
import React, { FC } from 'react'
import styles from '../../styles/Home.module.css'
import { H4, Span } from '../Typography'
const navLinkStyle = {
  cursor: 'pointer',
  marginRight: '2rem',
  transition: 'color 150ms ease-in-out',

  '&:hover': {
    color: 'primary.main',
  },
  '&:last-child': {
    marginRight: '0',
  },
}

const ListPortfolio: FC = () => {
  return (
    <Container sx={{ mb: '70px' }}>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>OUR PORTFOLIO</h1>

      <Grid
        container
        spacing={3}
        style={{ paddingTop: '3rem', paddingBottom: '4rem' }}
      >
        {serviceList.map((item, ind) => (
          <Grid item lg={4} md={4} xs={12} key={ind}>
            <BazarCard
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // p: '1rem',

                borderRadius: '8px',
              }}
              hoverEffect
            >
              <BazarImage
                className={styles.image}
                sx={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
                src={item.image}
                alt="hinh-san-pham"
              ></BazarImage>
              <Box
                style={{
                  height: '100%',
                  width: '100%',
                  padding: 10,
                  paddingLeft: 15,
                }}
              >
                {' '}
                <H4
                  className={styles.textTitle}
                  mt={1.5}
                  mb={1.25}
                  style={{ fontSize: '22px', lineHeight: '24px' }}
                  textAlign="center"
                >
                  {item.title}
                </H4>
                <Span textAlign="center" color="grey.600">
                  {item.content}
                </Span>
              </Box>
            </BazarCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const serviceList = [
  {
    title: 'PRU REWARDS',
    content: ' ',
    image: '/assets/images/f5seconds/listPortfolio/Prudential.jpg',
  },
  {
    title: 'MY VIETTEL – VIETTEL++',
    content: '',
    image: '/assets/images/f5seconds/listPortfolio/viettel.jpg',
  },
  {
    title: 'BIDV REWARD',
    content: '',
    image: '/assets/images/f5seconds/listPortfolio/bidv.png',
  },
  {
    title: 'BE LOYALTY',
    content: '',
    image: '/assets/images/f5seconds/listPortfolio/beloyalty.png',
  },
  {
    title: 'QUÀ TẶNG SAMSUNG GALAXY',
    content: ' ',
    image: '/assets/images/f5seconds/listPortfolio/samsung.jpg',
  },
]

export default ListPortfolio
