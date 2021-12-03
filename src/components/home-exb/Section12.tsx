import BazarCard from '@component/BazarCard'
import BazarImage from '@component/BazarImage'
import { Container, Grid } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Box } from '@material-ui/system'
import React, { FC } from 'react'
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

const Section12: FC = () => {
  return (
    <Container sx={{ mb: '70px' }}>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>
        Sản phẩm của chúng tôi
      </h1>
      <p style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna leo turpis
        sodales nibh felis non at venenatis. Mattis tortor nunc, augue et elit
        ultricies.{' '}
      </p>
      <Grid container spacing={3}>
        {serviceList.map((item, ind) => (
          <Grid item lg={6} md={6} xs={12} key={ind}>
            <BazarCard
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                p: '1rem',

                borderRadius: '8px',
              }}
              hoverEffect
            >
              <BazarImage
                sx={{
                  maxHeight: 200,
                  maxWidth: 200,
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
                  mt={-1.5}
                  mb={1.25}
                  style={{ fontSize: '22px', lineHeight: '24px' }}
                  textAlign="center"
                >
                  {item.title}
                </H4>
                <Span textAlign="center" color="grey.600">
                  {item.content} Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </Span>
                <Box
                  sx={navLinkStyle}
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <H4
                    mt={3.5}
                    mb={1.25}
                    style={{
                      fontSize: '14px',
                      lineHeight: '17px',
                      color: '#0098CE',
                    }}
                    textAlign="center"
                  >
                    Xem chi tiết
                  </H4>
                  <ArrowForwardIcon
                    style={{
                      fontSize: '20px',
                      lineHeight: '10px',
                      color: '#0098CE',
                      marginTop: '25px',
                      marginLeft: '15px',
                    }}
                  ></ArrowForwardIcon>
                </Box>
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
    title: 'Bất động sản',
    content:
      ' We offer competitive prices on our 100 million plus product any range. ',
    image: '/assets/images/exbImage/production/prd-batdongsan.jpg',
  },
  {
    title: 'Tiêu dùng',
    content:
      ' We offer competitive prices on our 100 million plus product any range.',
    image: '/assets/images/exbImage/production/prd-tieudung.jpg',
  },
  {
    title: 'Ô tô',
    content:
      ' We offer competitive prices on our 100 million plus product any range.',
    image: '/assets/images/exbImage/production/prd-oto.jpg',
  },
  {
    title: 'Thẻ tín dụng',
    content:
      ' We offer competitive prices on our 100 million plus product any range.',
    image: '/assets/images/exbImage/production/prd-thetindung.jpg',
  },
  {
    title: 'Xe máy',
    content:
      ' We offer competitive prices on our 100 million plus product any range.',
    image: '/assets/images/exbImage/production/prd-xemay.jpg',
  },
  {
    title: 'tín chấp',
    content:
      ' We offer competitive prices on our 100 million plus product any range.',
    image: '/assets/images/exbImage/production/prd-tinchap.jpg',
  },
]

export default Section12
