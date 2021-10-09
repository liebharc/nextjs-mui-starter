import React, { FC, useState } from 'react'

import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import styles from '../../styles/SubscribeSection.module.scss'
import GridContainer from '../GridContainer'
import GridItem from '../GridItem'
import MainButton from '../MainButton'
import { isFailure } from '../../src/domain/FunctionalTypes'
import Link from 'next/link'
import { newSubscription } from '../../src/domain/Subscription'

interface Props {
    onSubscribe?: (email: string) => void
    className?: string
}

const defaultProps: Props = {
    onSubscribe: () => {
        /* Do nothing */
    },
    className: '',
}

const SubscribeSection: FC<Props> = ({ onSubscribe, className }) => {
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [email, setEmail] = useState('')
    const [consentGiven, setConsentGiven] = useState(false)

    const hasError: boolean = message !== null && message !== ''

    return (
        <div>
            <p className={styles.teaser}>
                Clone{' '}
                <a href="https://github.com/liebharc/nextjs-mui-starter">
                    https://github.com/liebharc/nextjs-mui-starter
                </a>{' '}
                to get started. It&apos;s free!
            </p>
            {success ? (
                <p className={styles.messageSuccess}>
                    Thanks! Note that this button is only a demo. To get in
                    touch with us check{' '}
                    <a href="https://github.com/liebharc/nextjs-mui-starter">
                        https://github.com/liebharc/nextjs-mui-starter
                    </a>
                </p>
            ) : (
                <GridContainer
                    className={
                        styles.subscribeSectionContainer + ' ' + className
                    }
                >
                    <GridItem xs={12} sm={12} md={8}>
                        <TextField
                            variant="standard"
                            placeholder="Your Email"
                            className={styles.stretchHorz}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={hasError}
                            helperText={message}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <MainButton
                            color="error"
                            onClick={() => {
                                const subscriptionOrError = newSubscription(
                                    email,
                                    consentGiven
                                )
                                if (isFailure(subscriptionOrError)) {
                                    setMessage(subscriptionOrError.value)
                                    setSuccess(false)
                                    return
                                }

                                if (onSubscribe) {
                                    onSubscribe(email)
                                }

                                setMessage('')
                                setSuccess(true)
                            }}
                        >
                            Subscribe
                        </MainButton>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={consentGiven}
                                    onChange={(e) =>
                                        setConsentGiven(e.target.checked)
                                    }
                                />
                            }
                            label={
                                <p>
                                    <b>Yes I want to be contacted</b>,{' '}
                                    <Link href="/privacy">privacy</Link> applies
                                </p>
                            }
                        />
                    </GridItem>
                </GridContainer>
            )}
        </div>
    )
}

SubscribeSection.defaultProps = defaultProps

export default SubscribeSection
