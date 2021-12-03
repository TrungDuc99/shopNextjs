import Image from '@component/BazarImage'
import { Container, Grid } from '@material-ui/core'
import { Box } from '@material-ui/system'
import React, { FC } from 'react'

const F5secondsCare: FC = () => {
  return (
    <Container sx={{ mb: '70px' }}>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '2.5rem',
          fontWeight: 500,
          lineHeight: 1.2,
        }}
      >
        F5SECONDS CARE
      </h1>
      <h4
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: ' 1rem',
          fontWeight: 400,
          fontStyle: 'italic',
          fontFamily: 'Droid Serif',
        }}
      >
        Nâng Cao Chất lượng Chăm Sóc Khách Hàng với F5Seconds Care - Giải Pháp Phát
        Triển Và Chăm Sóc Khách Hàng Toàn Diện, Đa Dạng, Chất Lượng & Tiết Kiệm
      </h4>
      <Box
        py={2}
        overflow="hidden"
        style={{
          marginTop: '3rem',
          borderTop: '1px solid #eee',
          paddingTop: '3rem',
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={3}
            spacing={3}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              display="block"
              height="28px"
              src="/assets/images/f5seconds/icons/Care/global.png"
              alt="logo"
              style={{
                color: '#64a19d ',
                height: 50,
                width: 50,
                cursor: 'pointer',
              }}
            />

            <h2
              style={{
                fontSize: '1,5rem',
                fontWeight: 500,
                lineHeight: 1.2,
                marginBottom: '5px',
              }}
            >
              Customer Growth
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
              Giải Pháp Tăng Trưởng Đảm Bảo Đến Từ Hệ Sinh Thái Ngân Hàng
            </h3>
          </Grid>

          <Grid
            item
            xs={3}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              display="block"
              height="28px"
              src="/assets/images/f5seconds/icons/Care/diamond.png"
              alt="logo"
              style={{
                color: '#64a19d ',
                height: 50,
                width: 50,
                cursor: 'pointer',
              }}
            />

            <h2
              style={{
                fontSize: '1,5rem',
                fontWeight: 500,
                lineHeight: 1.2,
                marginBottom: '5px',
              }}
            >
              Referral Bonus
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
              Tăng Trưởng Hơn Nữa Cùng Chương Trình Khách Hàng Giới Thiệu Khách Hàng
            </h3>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              display="block"
              height="28px"
              src="/assets/images/f5seconds/icons/Care/like.png"
              alt="logo"
              style={{
                color: '#64a19d ',
                height: 50,
                width: 50,
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            />

            <h2
              style={{
                fontSize: '1,5rem',
                fontWeight: 500,
                lineHeight: 1.2,
                marginBottom: '5px',
              }}
            >
              Loyalty
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
              Đơn Giản Hóa & Xây Dựng Khách Hàng Thân Thiết Với Hệ Sinh Thái Loyalty
            </h3>
          </Grid>
          <Grid
            item
            xs={3}
            spacing={3}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              display="block"
              height="28px"
              src="/assets/images/f5seconds/icons/Care/coding.png"
              alt="logo"
              style={{
                color: '#64a19d ',
                height: 50,
                width: 50,
                cursor: 'pointer',
              }}
            />

            <h2
              style={{
                fontSize: '1,5rem',
                fontWeight: 500,
                lineHeight: 1.2,
                marginBottom: '5px',
              }}
            >
              Sale Point
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
              Tự Động Hóa Quản Lý Thi Đua Nội Bộ Cùng Giải Pháp Sale Point
            </h3>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default F5secondsCare
