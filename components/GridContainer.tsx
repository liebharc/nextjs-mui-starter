import React, { FC, ReactNode } from 'react'
import { Grid, GridProps } from '@mui/material'
import styles from '../styles/Grid.module.scss'

interface Props {
    className?: string
    children?: ReactNode
}

const GridContainer: FC<Props & GridProps> = ({
    className,
    children,
    ...rest
}) => {
    return (
        <Grid
            container
            {...rest}
            className={styles.gridContainer + ' ' + className}
        >
            {children}
        </Grid>
    )
}

export default GridContainer
