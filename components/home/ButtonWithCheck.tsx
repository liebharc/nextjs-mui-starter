import React, { FC, MouseEventHandler, useState } from 'react'
import { Button } from '@mui/material'
import styles from '../../styles/Default.module.scss'
import CheckIcon from '@mui/icons-material/Check'

interface Props {
    label: string
    disabled?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const defaultProps: Props = {
    label: '',
}

const ButtonWithCheck: FC<Props> = ({ label, disabled = false, onClick }) => {
    const [buttonPressed, setButtonPressed] = useState(false)

    return (
        <div className={styles.divRow}>
            <Button
                disabled={disabled}
                onClick={(e) => {
                    if (onClick) {
                        onClick(e)
                    }
                    setButtonPressed(true)
                    setTimeout(() => {
                        setButtonPressed(false)
                    }, 2000)
                }}
            >
                {label}
            </Button>
            <CheckIcon htmlColor={buttonPressed ? '' : 'transparent'} />
        </div>
    )
}

ButtonWithCheck.defaultProps = defaultProps

export default ButtonWithCheck
