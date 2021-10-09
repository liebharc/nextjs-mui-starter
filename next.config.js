/* eslint-disable */
/** @type {import('next').NextConfig} */
8
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const { createSecureHeaders } = require('next-secure-headers')

module.exports = (phase) => {
    function addDevRule(scriptSrc) {
        if (phase === PHASE_DEVELOPMENT_SERVER) {
            scriptSrc.push("'unsafe-eval'") // Allow react reloads on file change
        }

        return scriptSrc
    }

    return {
        reactStrictMode: true,
        compress: true,
        images: {
            // These are the values documented by Material UI: https://mui.com/customization/breakpoints/
            deviceSizes: [600, 900, 1200, 1536],
        },
        async redirects() {
            return [
                {
                    source: '/landing',
                    destination: '/',
                    permanent: true,
                },
            ]
        },
        async headers() {
            return [
                {
                    source: '/(.*)',
                    headers: createSecureHeaders({
                        contentSecurityPolicy: {
                            directives: {
                                defaultSrc: ["'none'"],
                                base: ["'self'"],
                                formAction: ["'self'"],
                                prefetchSrc: ["'self'"],
                                connectSrc: ["'self'"],
                                scriptSrc: addDevRule(["'self'"]),
                                styleSrc: [
                                    "'self'",
                                    'https://fonts.googleapis.com',
                                    "'unsafe-inline'",
                                    'data:',
                                ],
                                imgSrc: ["'self'", 'data:', 'blob:'],
                                fontSrc: [
                                    "'self'",
                                    'https://fonts.googleapis.com',
                                ],
                                frameSrc: ['*'],
                                mediaSrc: ['*'],
                                contentSrc: ["'self'"],
                            },
                        },
                    }),
                },
            ]
        },
    }
}
