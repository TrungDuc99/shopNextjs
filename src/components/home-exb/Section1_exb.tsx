import CarouselCard1new from '@component/carousel-cards/CarouselCard1new'
import Carousel from '@component/carousel/Carousel'
import { Box, Container } from '@material-ui/core'
import React, { FC, Fragment } from 'react'

const Section1_exb: FC = () => {
  return (
    <Fragment>
      <Box bgcolor="white" mb={7.5}>
        <Container style={{ backgroundColor: '#0098CE' }} sx={{ py: '2rem' }}>
          <Carousel
            totalSlides={4}
            visibleSlides={1}
            infinite={true}
            autoPlay={false}
            showDots={true}
            showArrow={false}
            spacing="0px"
          >
            <CarouselCard1new />
            <CarouselCard1new />
            <CarouselCard1new />
            <CarouselCard1new />
          </Carousel>
        </Container>
      </Box>
    </Fragment>
  )
}

export default Section1_exb
