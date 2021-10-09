import React, { FC, ReactNode } from 'react'
import styles from '../styles/InfoArea.module.scss'
import classNames from 'classnames'

interface Props {
    variant?: 'standard' | 'stretchedImage'
    vertical?: boolean
    lightText?: boolean
    className?: string
    icon?: ReactNode
    title?: ReactNode
    description?: ReactNode
}

const defaultProps: Props = {
    variant: 'standard',
    vertical: false,
    title: null,
    lightText: false,
}

const InfoArea: FC<Props> = ({
    className,
    variant,
    vertical,
    lightText,
    icon,
    title,
    description,
}) => {
    const infoAreaClasses = classNames({
        [styles.infoArea]: true,
        [styles.infoAreaHori]: !vertical,
        [styles.className]: className,
    })
    const iconWrapperClasses = classNames({
        [styles.iconWrapper]: true,
        [styles.iconWrapperVertical]: vertical,
    })
    const iconClasses = classNames({
        [styles.icon]: true,
        [styles.iconVertical]: vertical,
    })
    const descriptionClasses = classNames({
        [styles.description]: true,
        [styles.descriptionVertical]: vertical,
        [styles.lightText]: lightText,
    })

    return (
        <div className={infoAreaClasses}>
            <div className={iconWrapperClasses}>
                <div
                    className={
                        variant === 'stretchedImage'
                            ? styles.imageLimits
                            : iconClasses
                    }
                >
                    {icon}
                </div>
            </div>
            <div className={styles.descriptionWrapper}>
                <div className={styles.title}>{title}</div>
                <div className={descriptionClasses}>{description}</div>
            </div>
        </div>
    )
}

InfoArea.defaultProps = defaultProps

export default InfoArea
