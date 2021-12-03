import Carousel from '@component/carousel/Carousel'
import ProductCard1 from '@component/product-cards/ProductCard1'
import { H3 } from '@component/Typography'
import productDatabase from '@data/product-database'
import useWindowSize from '@hook/useWindowSize'
import { Box } from '@material-ui/core'
import React, { FC, useEffect, useState } from 'react'

const GrocerySection7: FC = () => {
  const [visibleSlides, setVisibleSlides] = useState(3)
  const width = useWindowSize()

  useEffect(() => {
    if (width < 500) setVisibleSlides(1)
    else if (width < 950) setVisibleSlides(2)
    else setVisibleSlides(3)
  }, [width])

  return (
    <Box>
      <H3 fontSize="25px" mb={4}>
        Best of Home Essentials
      </H3>

      <Box my="-0.25rem">
        <Carousel
          totalSlides={9}
          visibleSlides={visibleSlides}
          step={3}
          showDots
          arrowButtonColor="inherit"
          showArrowOnHover={true}
        >
          {productDatabase.slice(190, 199).map((item, ind) => (
            <Box py={0.5} key={ind}>
              <ProductCard1 {...item} off={25} hideRating showProductSize />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  )
}

export default GrocerySection7
