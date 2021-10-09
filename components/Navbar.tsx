import React, { FC, ReactNode } from 'react'
import styles from '../styles/HeaderNavBar.module.scss'
import Link from 'next/link'
import { IconButton, Slide, Typography, useScrollTrigger } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { literals } from '../src/ui/Literals'

interface ScrollProps {
    children: React.ReactElement
    slideNavbar: boolean
}

interface NavbarProps {
    navbarLinks?: ReactNode
    navbarMenu?: boolean
    slideNavbar?: boolean
}

const defaultProps: NavbarProps = {
    navbarLinks: null,
    navbarMenu: false,
    slideNavbar: false,
}

const Navbar: FC<NavbarProps> = ({ navbarLinks, navbarMenu, slideNavbar }) => {
    function HideOnScroll(props: ScrollProps) {
        const { children, slideNavbar } = props

        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: process.browser && slideNavbar ? window.innerHeight : 0,
        })

        if (!slideNavbar) {
            return React.cloneElement(children, {
                elevation: trigger ? 4 : 0,
            })
        }

        return (
            <Slide appear={false} in={trigger}>
                {React.cloneElement(children, {
                    elevation: trigger ? 4 : 0,
                })}
            </Slide>
        )
    }

    return (
        <HideOnScroll slideNavbar={slideNavbar || false}>
            <div className={styles.navbar}>
                {navbarMenu ? (
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : null}
                <Link href="/">
                    <a className={styles.homeLink}>
                        <Typography
                            variant="h5"
                            color="inherit"
                            component="div"
                            className={styles.brand}
                        >
                            {literals.brand}
                        </Typography>
                    </a>
                </Link>

                <div className={styles.navbarLinks}>{navbarLinks}</div>
            </div>
        </HideOnScroll>
    )
}

Navbar.defaultProps = defaultProps

export default Navbar
