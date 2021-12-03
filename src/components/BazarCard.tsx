import { Card, CardProps } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import React from 'react'

type BazarCardProps = {
  hoverEffect?: boolean
}

const BazarCard = styled<React.FC<BazarCardProps & CardProps>>(
  ({ hoverEffect, children, ...rest }) => <Card {...rest}>{children}</Card>
)<BazarCardProps>(({ theme, hoverEffect }) => ({
  borderRadius: '8px',
  overflow: 'unset',
  transition: 'all 250ms ease-in-out',
  '&:hover': {
    boxShadow: hoverEffect ? theme.shadows[6] : '',
    backgroundColor: hoverEffect ? 'rgba(254, 209, 54, 0.9);' : '',
  },
}))

BazarCard.defaultProps = {
  hoverEffect: false,
}

export default BazarCard
