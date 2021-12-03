import TextFieldIcons_exb from '@component/TextFieldIcons_exb'
import { Paragraph } from '@component/Typography'
import { Box, Container, Grid, IconButton } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import React, { FC } from 'react'
// styled component

const Footer_sigin: FC = () => {
  const handleRegister = () => {
    console.log('đăng ký')
  }
  return (
    <footer>
      <Box bgcolor="#0098CE" id="demosexb">
        <Container sx={{ p: '1rem', color: 'white' }}>
          <Box py={2} overflow="hidden">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <h1 style={{ color: '#fff', fontSize: '40px' }}>
                  Đăng ký vay ngay với Bimmer
                </h1>
                <Paragraph style={{ color: '#fff' }} mb={2.5} color="grey.500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                  libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
                  et lectus vel ut sollicitudin elit at amet.
                </Paragraph>
              </Grid>

              <Grid
                item
                xs={6}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <TextFieldIcons_exb
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '10px',
                    width: '300px',
                  }}
                  mb={1.5}
                  name="email"
                  placeholder="Nhập số điện thoại / Email..."
                  type="email"
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // value={values.email || ''}
                  // error={!!touched.email && !!errors.email}
                  // helperText={touched.email && errors.email}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        size="small"
                        type="button"
                        onClick={handleRegister}
                      >
                        <ExitToAppIcon style={{ color: '#0098CE' }}></ExitToAppIcon>
                      </IconButton>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer_sigin
