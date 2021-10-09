import React, { FC, ReactNode } from 'react'
import { Grid, GridProps } from '@mui/material'
import styles from '../styles/Grid.module.scss'

interface Props {
    className?: string
    children?: ReactNode
}

const GridItem: FC<Props & GridProps> = ({ className, children, ...rest }) => {
    return (
        <Grid item {...rest} className={styles.gridItem + ' ' + className}>
            {children}
        </Grid>
    )
}

export default GridItem
