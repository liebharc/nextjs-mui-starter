import type { GetServerSideProps, NextPage } from 'next'
import React from 'react'

import Page from '../../components/Page'
import ErrorPage from 'next/error'
import styles from '../../styles/Blog.module.scss'
import Link from 'next/link'
import { formatPostDate } from '../../src/ui/Blog'
import { Mail, Twitter } from '@mui/icons-material'
import Image from 'next/image'
import { literals } from '../../src/ui/Literals'
import { defaultErrorHandler } from '../../src/ui/DefaultErrorHandler'

interface Post {
    title: string
    date: string
    preview: string
    bodyHtml: string
    tags: string
    picture: string
    pictureAttribution: string
}
interface Props {
    post?: Post
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const urlParts = context.resolvedUrl.split('/')
    const lastUrlPart = urlParts[urlParts.length - 1]
    return import(`../../content/${lastUrlPart}.json`)
        .then((d) => {
            return {
                props: {
                    post: d.default as Post,
                },
            }
        })
        .catch((e) => {
            defaultErrorHandler(e)
            return {
                props: {},
            }
        })
}

const BlogEntry: NextPage<Props> = ({ post }) => {
    if (!post) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <div>
            <style jsx global>{`
                .content a {
                    color: #0365a5;
                    text-decoration: none;
                    border-bottom: 1px solid #dfdfdf;
                    transition: all 300ms ease;
                }
                a:hover,
                a:focus {
                    border-bottom-color: currentColor;
                }
                code {
                    background-color: #eee;
                    line-height: 1;
                    border-radius: 2px;
                    padding: 1px;
                }
                code:not(.hljs) {
                    border: 1px solid #ddd;
                }
            `}</style>
            <Page
                title={post.title}
                description={post.preview}
                className={styles.mainContent}
            >
                <div className={styles.centeredSection}>
                    {post.picture ? (
                        <div className={styles.coverImage}>
                            <Image
                                src={post.picture}
                                alt={post.title}
                                width="1280"
                                height="860"
                                layout="intrinsic"
                            />
                            <p className={styles.postMetaInfo}>
                                {post.pictureAttribution}
                            </p>
                        </div>
                    ) : null}
                    <h1>{post.title}</h1>
                    <div className={styles.postMetaInfo}>
                        <p>
                            {formatPostDate(post.date)} {post.tags}
                        </p>
                        <hr className={styles.postMetaInfoSep} />
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.bodyHtml,
                        }}
                    />
                    <div className={styles.divRow}>
                        <Link href="/blog">
                            <a className={styles.block}>Show all posts</a>
                        </Link>
                        <p className={styles.block}> or get in touch:</p>
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
            </Page>
        </div>
    )
}

export default BlogEntry
