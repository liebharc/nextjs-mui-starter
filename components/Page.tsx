import React, { FC, ReactNode } from 'react'
import { Card } from '@mui/material'
import styles from '../styles/Page.module.scss'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import ShortHeader from './ShortHeader'
import DefaultNavbarLinks from './DefaultNavbarLinks'

interface Props {
    title: string
    className?: string
    description: string
    navbarLinks?: ReactNode
    navbarMenu?: boolean
    header?: ReactNode
    children?: ReactNode
    slideNavbar?: boolean
}

const defaultProps: Props = {
    title: '',
    description: '',
    header: <ShortHeader />,
    navbarLinks: <DefaultNavbarLinks />,
    navbarMenu: false,
    slideNavbar: false,
}

const Page: FC<Props> = ({
    title,
    className,
    description,
    children,
    navbarLinks,
    navbarMenu,
    slideNavbar,
    header,
}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <Navbar
                navbarLinks={navbarLinks}
                navbarMenu={navbarMenu}
                slideNavbar={slideNavbar}
            />
            {header}
            <Card className={styles.main}>
                <div className={className ? className : styles.mainContent}>
                    {children}
                </div>
            </Card>
            <Footer />
        </div>
    )
}

Page.defaultProps = defaultProps

export default Page
