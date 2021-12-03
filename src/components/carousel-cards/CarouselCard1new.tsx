import BazarImage from '@component/BazarImage'
import { Paragraph } from '@component/Typography'
import { Box, Button, Grid, styled } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import React, { FC } from 'react'
import { Link as Scroll } from 'react-scroll'
// component props interface
export interface CarouselCard1Props {
  heading?: string
  body?: string
}
// styled component
const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '.title': {
    fontSize: 50,
    marginTop: 0,
    marginBottom: '1.35rem',
    lineHeight: 1.2,
  },
  [theme.breakpoints.up('sm')]: {
    '.grid-item': {
      minHeight: 424,
      display: 'flex',
      alignItems: 'baseline',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    paddingLeft: 0,

    '.title': {
      fontSize: 32,
    },
  },
  [theme.breakpoints.down('xs')]: {
    '.title': {
      fontSize: 16,
    },
    '.title + *': {
      fontSize: 13,
    },
    '.button-link': {
      height: 36,
      padding: '0 1.5rem',
      fontSize: 13,
    },
  },
}))

const CarouselCard1: FC<CarouselCard1Props> = () => {
  return (
    <StyledBox>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item className="grid-item" sm={5} xs={12}>
          <h1 style={{ color: '#fff' }} className="title">
            Mua Ô tô Vay ngay hôm nay
          </h1>
          <Paragraph style={{ color: '#fff' }} mb={2.7}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna leo turpis
            sodales nibh felis non at venenatis. Mattis tortor nunc, augue et elit
            ultricies.
          </Paragraph>
          <div style={{ display: 'flex', alignItems: 'row' }}>
            <Scroll to="demosexb" duration={400} offset={-72 - 16} smooth={true}>
              <Button
                className="button-link"
                variant="contained"
                disableElevation
                style={{
                  backgroundColor: '#fff',
                  color: '#0098CE',
                }}
                sx={{
                  width: '174px',
                  height: '50px',
                  borderRadius: '10px',
                  marginRight: '10px',
                }}
              >
                Đăng ký ngay
                <ExitToAppIcon style={{ marginLeft: '5px' }}></ExitToAppIcon>
              </Button>
            </Scroll>
            <Button
              variant="outlined"
              style={{
                color: '#fff',
                width: '174px',
                height: '50px',
                borderRadius: '10px',
                marginLeft: '10px',
              }}
            >
              Xem chi tiết
            </Button>
          </div>
        </Grid>
        <Grid item sm={5} xs={12}>
          <BazarImage
            src="/assets/images/exbImage/hpbanner.png"
            alt="apple-watch-1"
            sx={{
              display: 'block',
              mx: 'auto',
              maxHeight: 400,
              maxWidth: '100%',
            }}
          />
        </Grid>
      </Grid>
    </StyledBox>
  )
}

export default CarouselCard1
