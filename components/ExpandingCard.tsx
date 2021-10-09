import React, { FC, ReactNode, useState } from 'react'
import styles from '../styles/ExpandingCard.module.scss'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
} from '@mui/material'

interface Props {
    image?: string
    icon?: ReactNode
    title?: ReactNode
    description?: ReactNode
}

const defaultProps: Props = {}

const ExpandingCard: FC<Props> = ({ image, icon, title, description }) => {
    const [expanded, setExpanded] = useState(false)
    return (
        <Card className={styles.expandingCard}>
            <CardActionArea
                onClick={() => {
                    const expand = !expanded
                    setExpanded(expand)
                }}
            >
                <CardHeader
                    title={
                        <div className={styles.expandingCardHeader}>
                            <div>{icon}</div>
                            <div>{title}</div>
                            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </div>
                    }
                />
                {image != null ? <CardMedia image={image} /> : null}
            </CardActionArea>
            <Collapse in={expanded}>
                <CardContent className={styles.expandingCardContent}>
                    {description}
                </CardContent>
            </Collapse>
        </Card>
    )
}

ExpandingCard.defaultProps = defaultProps

export default ExpandingCard
