import Link from 'next/link'
import React, { FC } from 'react'
import styles from '../styles/Default.module.scss'

const DefaultNavbarLinks: FC = () => {
    return (
        <div>
            <Link href="/blog">
                <a className={styles.navbarLink}>Blog</a>
            </Link>
        </div>
    )
}

export default DefaultNavbarLinks
