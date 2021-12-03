import { H4 } from '@component/Typography'
import { Box } from '@material-ui/core'
import React, { FC } from 'react'

// styled component

const Footer_f5seconds: FC = () => {
  const handleCallHotLine = () => {
    console.log('đường dây nóng')
  }
  return (
    <footer>
      <Box bgcolor="#fff">
        <Box
          bgcolor="#000000"
          height="234px"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <H4
            style={{
              margin: 'auto',
              width: '100%',
              padding: '10px',
              textAlign: 'center',
              fontSize: '80%',
              fontWeight: 400,
            }}
          >
            Copyright © F5seconds 2020
          </H4>
        </Box>
      </Box>
    </footer>
  )
}

export default Footer_f5seconds
