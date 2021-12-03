import FlexBox from '@component/FlexBox'
import FeedbackThumbsUp from '@component/icons/FeedbackThumbsUp'
import Shield from '@component/icons/Shield'
import Truck from '@component/icons/Truck'
import { H4, Span } from '@component/Typography'
import { Grid, styled } from '@material-ui/core'
import React, { FC } from 'react'

// styled component
const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: '8px',
  padding: '1.5rem',
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    padding: '1rem 0.5rem',
    textAlign: 'center',
    '& .css-1q4f0ng': {
      margin: '0.5rem',
    },
  },
}))

const GrocerySection2: FC = () => {
  return (
    <Grid container spacing={3}>
      {serviceList.map((item, ind) => (
        <Grid item lg={4} xs={6} key={ind}>
          <StyledFlexBox alignItems="center">
            <FlexBox alignItems="center" color="grey.600" fontSize="50px" mr={2}>
              <item.icon fontSize="inherit" color="inherit">
                {item.icon}
              </item.icon>
            </FlexBox>
            <div>
              <H4 color="grey.900" fontSize="1.25rem" fontWeight="700">
                {item.title}
              </H4>
              <Span color="grey.600">{item.subtitle}</Span>
            </div>
          </StyledFlexBox>
        </Grid>
      ))}
    </Grid>
  )
}

const serviceList = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    subtitle: 'Start from $10',
  },
  {
    icon: FeedbackThumbsUp,
    title: 'Feedback',
    subtitle: '97% positive',
  },
  {
    icon: Shield,
    title: 'Payment',
    subtitle: '100% secured',
  },
]

export default GrocerySection2
