import type { NextPage } from 'next'
import React, { MouseEvent } from 'react'

import Page from '../components/Page'

import Header from '../components/Header'
import styles from '../styles/Landing.module.scss'
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Link,
    Radio,
    RadioGroup,
    TextField,
    useMediaQuery,
} from '@mui/material'
import { scroller } from 'react-scroll'
import MainButton from '../components/MainButton'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ExpandingCard from '../components/ExpandingCard'
import { literals } from '../src/ui/Literals'
import SecondaryButton from '../components/SecondaryButton'
import InfoArea from '../components/InfoArea'
import AboutUsSection from '../components/landing/AboutUsSection'
import SubscribeSection from '../components/landing/SubscribeSection'

const Landing: NextPage = () => {
    function scrollTo<T>(
        event: MouseEvent<T>,
        destination: 'subscribe' | 'components' | 'about'
    ) {
        event.preventDefault()
        const navbarHeight = 50
        scroller.scrollTo(destination, {
            smooth: 'easeInOutQuad',
            offset: -navbarHeight,
        })
    }

    const smallScreenSize = useMediaQuery('(min-width:600px)')

    function createNavBar() {
        return (
            <div className={styles.divRow}>
                {smallScreenSize ? (
                    <div className={styles.divRow}>
                        <Link
                            href="/"
                            className={styles.navbarLink}
                            onClick={(e) => scrollTo(e, 'components')}
                        >
                            Components
                        </Link>
                        <Link
                            href="/"
                            className={styles.navbarLink}
                            onClick={(e) => scrollTo(e, 'about')}
                        >
                            About
                        </Link>
                    </div>
                ) : null}
                <Link
                    href="/nextjs-mui-starter/blog"
                    className={styles.navbarLink}
                >
                    Blog
                </Link>
            </div>
        )
    }

    return (
        <Page
            title={literals.brand}
            description={literals.defaultPageDescription}
            slideNavbar={true}
            navbarLinks={createNavBar()}
            header={
                <Header
                    onClick={(e) => scrollTo(e, 'subscribe')}
                    navbarLinks={createNavBar()}
                />
            }
        >
            <div id="components" className={styles.firstSection}>
                <div>
                    <h1>Heading h1</h1>
                    <h2>Heading h2</h2>
                    <h3>Heading h3</h3>
                    <h4>Heading h4</h4>
                    <h5>Heading h5</h5>
                    <h6>Heading h6</h6>
                    <Divider />
                    <h1>Basic elements</h1>
                    <h2>Buttons</h2>
                    <div className={styles.diffRow}>
                        <Button>Standard Button Primary</Button>
                        <Button color="secondary">
                            Standard Button Secondary
                        </Button>
                    </div>
                    <div className={styles.diffRow}>
                        <MainButton>Main Button Primary</MainButton>
                        <MainButton color="secondary">
                            Main Button Secondary
                        </MainButton>
                    </div>
                    <div className={styles.diffRow}>
                        <MainButton color="info">Info</MainButton>
                        <MainButton color="warning">Warning</MainButton>
                        <MainButton color="error">Error</MainButton>
                        <MainButton color="success">Success</MainButton>
                    </div>
                    <div className={styles.diffRow}>
                        <SecondaryButton>
                            Secondary Button Primary
                        </SecondaryButton>
                        <SecondaryButton color="secondary">
                            Secondary Button Secondary
                        </SecondaryButton>
                    </div>
                    <h2>Inputs</h2>
                    <TextField placeholder="Standard" variant="standard" />
                    <TextField placeholder="Filled" variant="filled" />
                    <TextField placeholder="Outlined" variant="outlined" />
                    <h2>Checkboxes</h2>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Unchecked"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={true} />}
                        label="Checked"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={true} color="secondary" />}
                        label="Secondary"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={true} />}
                        disabled
                        label="Disabled"
                    />
                    <h2>Radio buttons</h2>
                    <RadioGroup row value="1">
                        <FormControlLabel
                            control={<Radio />}
                            label="Option 1"
                            value="1"
                        />
                        <FormControlLabel
                            control={<Radio />}
                            label="Option 2"
                            value="2"
                        />
                    </RadioGroup>
                    <RadioGroup row value="1">
                        <FormControlLabel
                            value="1"
                            control={<Radio color="secondary" />}
                            label="Secondary"
                        />
                    </RadioGroup>
                    <h2>Custom Components</h2>
                    <div className={styles.divRow}>
                        <InfoArea
                            icon={
                                <DashboardIcon
                                    style={{ width: '100%', height: '100%' }}
                                />
                            }
                            title="Info Area"
                            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
                        />
                        <InfoArea
                            vertical
                            icon={
                                <DashboardIcon
                                    style={{ width: '100%', height: '100%' }}
                                />
                            }
                            title="Info Area Vertical"
                            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
                        />
                        <InfoArea
                            lightText
                            icon={
                                <DashboardIcon
                                    style={{ width: '100%', height: '100%' }}
                                />
                            }
                            title="Info Area Light Text"
                            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
                        />
                    </div>

                    <div className={styles.divRow}>
                        <ExpandingCard
                            icon={<DashboardIcon />}
                            title="Expanding Card"
                            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
                        />
                    </div>
                </div>
            </div>
            <div id="about" className={styles.newSection}>
                <AboutUsSection />
            </div>

            <div id="subscribe" className={styles.lastSection}>
                <div>
                    <h2>Demo for a subscribe section</h2>
                    <SubscribeSection />
                </div>
            </div>
        </Page>
    )
}

export default Landing
