import type { NextPage } from 'next'
import React from 'react'

import Page from '../components/Page'
import { literals } from '../src/ui/Literals'
import styles from '../styles/Blog.module.scss'

import summaries from '../content/summary.json'
import { formatPostDate, parsePostDate } from '../src/ui/Blog'
import SocialsWrapper from '../components/blog/SocialsWrapper'

const Blog: NextPage = () => {
    return (
        <Page
            title={`${literals.brand} - Blog`}
            description="Blog"
            className={styles.mainContent}
        >
            <div className={styles.centeredSection}>
                <SocialsWrapper>
                    {Object.values(summaries.fileMap)
                        .sort((a, b) => {
                            return (
                                parsePostDate(b.date).toMillis() -
                                parsePostDate(a.date).toMillis()
                            )
                        })
                        .map((post) => {
                            return (
                                <div
                                    key={post.base}
                                    className={styles.postSection}
                                >
                                    {post.picture ? (
                                        <div className={styles.coverImage}>
                                            <a
                                                href={`/nextjs-mui-starter/blog/${encodeURIComponent(
                                                    post.base.replace(
                                                        '.json',
                                                        ''
                                                    )
                                                )}`}
                                            >
                                                <img
                                                    src={
                                                        '/nextjs-mui-starter' +
                                                        post.picture
                                                    }
                                                    alt={post.title}
                                                    width="800"
                                                    height="533"
                                                    style={{
                                                        objectFit: 'contain',
                                                    }}
                                                />
                                            </a>
                                        </div>
                                    ) : null}
                                    <div>
                                        <a
                                            className={styles.postTitle}
                                            href={`/blog/${encodeURIComponent(
                                                post.base.replace('.json', '')
                                            )}`}
                                        >
                                            {post.title}
                                        </a>
                                    </div>
                                    <div className={styles.postMetaInfo}>
                                        <p>
                                            {formatPostDate(post.date)}{' '}
                                            {post.tags}
                                        </p>
                                        <hr
                                            className={styles.postMetaInfoSep}
                                        />
                                    </div>
                                    <p>{post.preview + ' ...'}</p>
                                    <a
                                        href={`/blog/${encodeURIComponent(
                                            post.base.replace('.json', '')
                                        )}`}
                                    >
                                        Read more
                                    </a>
                                </div>
                            )
                        })}
                </SocialsWrapper>
            </div>
        </Page>
    )
}

export default Blog
