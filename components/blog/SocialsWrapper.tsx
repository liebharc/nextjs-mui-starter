import React, { FC, ReactNode } from 'react'
import styles from '../../styles/Blog.module.scss'
import { Mail, Twitter } from '@mui/icons-material'
import Link from 'next/link'
import { literals } from '../../src/ui/Literals'

interface Props {
    children?: ReactNode
}

const SocialsWrapper: FC<Props> = ({ children }) => {
    return (
        <div className={styles.allPostsContainer}>
            <div className={styles.socialsPositioner}>
                <div className={styles.socialsContainer}>
                    <Link href={literals.socials.twitter}>
                        <a className={styles.block}>
                            <Twitter color="primary" />
                        </a>
                    </Link>
                    <Link href={literals.socials.mailtoEmailInfo}>
                        <a className={styles.block}>
                            <Mail color="primary" />
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.postList}>{children}</div>
        </div>
    )
}

export default SocialsWrapper
