import '../styles/globals.css'
import { AppProps } from 'next/app'
import React, { FC, ReactElement } from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../src/ui/redux/store'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import ChangeTheme from '../components/ChangeTheme'
import { CssBaseline } from '@mui/material'

const cache = createCache({
    key: 'css',
    prepend: true,
})

const MyApp: FC<AppProps> = ({ Component, pageProps }): ReactElement => {
    return (
        <StyledEngineProvider injectFirst>
            <CacheProvider value={cache}>
                <ChangeTheme>
                    <CssBaseline />
                    <ReduxProvider store={store}>
                        <Component {...pageProps} />
                    </ReduxProvider>
                </ChangeTheme>
            </CacheProvider>
        </StyledEngineProvider>
    )
}
export default MyApp
