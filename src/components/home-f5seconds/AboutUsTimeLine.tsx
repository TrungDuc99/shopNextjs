import BazarImage from '@component/BazarImage'
import { Container } from '@material-ui/core'
import { Box } from '@material-ui/system'
import React, { FC } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import styles from '../../styles/Home.module.css'
const AboutUsTimeLine: FC = () => {
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
        ABOUT US
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
        F5Seconds là một trong những công ty đầu tiên cung cấp giải pháp và xây dựng
        sản phẩm công nghệ cho thị trường tài chính tại Việt Nam từ năm 2010.
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
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            // date="2010 - present"
            // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={
              <div>
                <BazarImage
                  className={styles.imgAboutUs}
                  sx={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                  }}
                  src="/assets/images/f5seconds/aboutUs/about-1.jpg"
                  alt="hinh-san-pham"
                ></BazarImage>
              </div>
            }
          >
            <h3 className={styles.date}>2010</h3>
            <h4 className={styles.titleAboutUs}>Thành Lập Công Ty</h4>
            <p className={styles.textContentAboutUs}>
              Thành lập công ty tech cùng với đội ngũ chuyên gia trong ngành IT và
              viễn thông
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={
              <BazarImage
                className={styles.imgAboutUs}
                sx={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
                src="/assets/images/f5seconds/aboutUs/about-2.jpg"
                alt="hinh-san-pham"
              ></BazarImage>
            }
          >
            <h3 className={styles.date}>2014</h3>
            <h4 className={styles.titleAboutUs}>Ra Mắt Chương Trình Loyalty</h4>
            <p className={styles.textContentAboutUs}>
              Cho ra đời sản phẩm chăm sóc khách hàng để phát triển khách hàng.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={
              <BazarImage
                className={styles.imgAboutUs}
                sx={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
                src="/assets/images/f5seconds/aboutUs/about-3.jpg"
                alt="hinh-san-pham"
              ></BazarImage>
            }
          >
            <h3 className={styles.date}>2018</h3>
            <h4 className={styles.titleAboutUs}>Ra Mắt Loyalty Digital Product</h4>
            <p className={styles.textContentAboutUs}>
              Ra mắt dịch vụ kết nối voucher (Bán hàng & Tiếp thị) & Cửa hàng sử dụng
              API để kết nối trên thiết bị di động.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={
              <BazarImage
                className={styles.imgAboutUs}
                sx={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
                src="/assets/images/f5seconds/aboutUs/about-1.jpg"
                alt="hinh-san-pham"
              ></BazarImage>
            }
          >
            <h3 className={styles.date}>2021</h3>
            <h4 className={styles.titleAboutUs}>Miami, FL</h4>
            <p className={styles.textContentAboutUs}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              voluptatum similique incidunt iste. Sunt sit a mollitia quaerat, ipsam
              vero numquam vel qui quae minus ut consequatur iste corrupti
              praesentium!
            </p>
          </VerticalTimelineElement>{' '}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#501414' }}
          />
        </VerticalTimeline>
      </Box>
    </Container>
  )
}

export default AboutUsTimeLine
