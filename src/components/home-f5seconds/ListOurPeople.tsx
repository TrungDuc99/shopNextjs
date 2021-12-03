import Image from '@component/BazarImage'
import { Container, Grid } from '@material-ui/core'
import { Box } from '@material-ui/system'
import React, { FC } from 'react'
import styles from '../../styles/Home.module.css'
const ListOurPeople: FC = () => {
  return (
    <Container sx={{ mb: '70px ' }}>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '2.5rem',
          fontWeight: 500,
          lineHeight: 1.2,
        }}
      >
        OUR PEOPLE
      </h1>

      <Box
        py={2}
        overflow="hidden"
        style={{
          marginTop: '2rem',
          paddingTop: '2rem',
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            spacing={2}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 0,
            }}
          >
            <Image
              display="block"
              height="28px"
              src="/assets/images/f5seconds/ourPeople/productLead.jpg"
              alt="logo"
              className={styles.imageOurPeople}
            />

            <h2
              style={{
                fontSize: '1,5rem',
                fontWeight: 500,
                lineHeight: 1.2,
                marginBottom: '5px',
              }}
            >
              Natalie Nguyen
            </h2>
            <h3
              style={{
                color: '#6c757d ',
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: 1.5,
                marginTop: '5px',
                textAlign: 'center',
              }}
            >
              Product Lead
            </h3>
          </Grid>

          <Grid
            item
            xs={4}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              display="block"
              height="28px"
              src="/assets/images/f5seconds/ourPeople/managingDirector.png"
              alt="logo"
              className={styles.imageOurPeople}
            />

            <h2
              style={{
                fontSize: '1,5rem',
                fontWeight: 500,
                lineHeight: 1.2,
                marginBottom: '5px',
              }}
            >
              Nguyen Huynh Nhu
            </h2>
            <h3
              style={{
                color: '#6c757d ',
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: 1.5,
                marginTop: '5px',
                textAlign: 'center',
              }}
            >
              Managing Director
            </h3>
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              display="block"
              height="28px"
              src="/assets/images/f5seconds/ourPeople/businessDirector.jpg"
              alt="logo"
              className={styles.imageOurPeople}
            />

            <h2
              style={{
                fontSize: '1,5rem',
                fontWeight: 500,
                lineHeight: 1.2,
                marginBottom: '5px',
              }}
            >
              Nguyen Thanh Lam
            </h2>
            <h3
              style={{
                color: '#6c757d ',
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: 1.5,
                marginTop: '5px',
                textAlign: 'center',
              }}
            >
              Business Director
            </h3>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default ListOurPeople
