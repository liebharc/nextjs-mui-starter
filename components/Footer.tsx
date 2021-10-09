import React, { FC } from 'react'
import styles from '../styles/Footer.module.scss'
import Link from 'next/link'

import { DateTime } from 'luxon'
import { List, ListItem } from '@mui/material'
import { Mail, Twitter, Favorite, GitHub } from '@mui/icons-material'
import { literals } from '../src/ui/Literals'

const Footer: FC = () => {
    return (
        <div className={styles.footerContainer}>
            <List className={styles.list}>
                <ListItem className={styles.inlineBlock}>
                    <Link href="/imprint">
                        <a className={styles.block}>Imprint</a>
                    </Link>
                </ListItem>
                <ListItem className={styles.inlineBlock}>
                    <Link href="/privacy">
                        <a className={styles.block}>Privacy Policy</a>
                    </Link>
                </ListItem>
                <ListItem className={styles.inlineBlock}>
                    <Link href={literals.socials.twitter}>
                        <a className={styles.block}>
                            <Twitter />
                        </a>
                    </Link>
                </ListItem>
                <ListItem className={styles.inlineBlock}>
                    <Link href={literals.socials.github}>
                        <a className={styles.block}>
                            <GitHub />
                        </a>
                    </Link>
                </ListItem>
                <ListItem className={styles.inlineBlock}>
                    <Link href={literals.socials.mailtoEmailInfo}>
                        <a className={styles.block}>
                            <Mail />
                        </a>
                    </Link>
                </ListItem>
            </List>
            <footer className={styles.footer}>
                &copy; {DateTime.now().year}, made with{' '}
                <Favorite className={styles.icon} /> by{' '}
                <a href="https://growtogether.team">
                    https://growtogether.team
                </a>
            </footer>
        </div>
    )
}

export default Footer
