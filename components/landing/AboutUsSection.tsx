import React, { FC } from 'react'
import styles from '../../styles/LandingSections.module.scss'
import GridContainer from '../GridContainer'
import GridItem from '../GridItem'
import face1Pic from '../../public/img/faces/corset-g2b91c962f_1280.jpg'
import face2Pic from '../../public/img/faces/woman-g53aebefef_1920.jpg'
import Image from 'next/image'
import InfoArea from '../InfoArea'
import { Button } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const AboutUsSection: FC = () => {
    return (
        <div>
            <h2 className={styles.newSection}>
                An example for an about section
            </h2>
            <p className={styles.lightText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <GridContainer className={styles.newSection}>
                <GridItem xs={12} sm={12} md={6}>
                    <InfoArea
                        vertical
                        variant="stretchedImage"
                        title={
                            <div className={styles.diffRow}>
                                dkrasavtseva
                                <Button className={styles.socials}>
                                    <LinkedInIcon className={styles.socials} />
                                </Button>
                            </div>
                        }
                        icon={
                            <Image
                                src={face1Pic}
                                className={styles.faces}
                                height="1280"
                                width="960"
                                alt="dkrasavtseva"
                            />
                        }
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <InfoArea
                        vertical
                        variant="stretchedImage"
                        title={
                            <div className={styles.diffRow}>
                                Senja
                                <Button className={styles.socials}>
                                    <LinkedInIcon className={styles.socials} />
                                </Button>
                            </div>
                        }
                        icon={
                            <Image
                                src={face2Pic}
                                className={styles.faces}
                                height="1280"
                                width="960"
                                alt="Senja"
                            />
                        }
                    />
                </GridItem>
            </GridContainer>
        </div>
    )
}

export default AboutUsSection
