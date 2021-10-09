import React, { FC, ReactNode } from 'react'
import { GridProps, PaletteMode } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

interface Props {
    children?: ReactNode
    variant?: PaletteMode
}

const defaultProps: Props = {
    variant: 'light',
}

const ChangeTheme: FC<Props & GridProps> = ({ children, variant }) => {
    // Color definitions: https://next.material-ui.com/system/palette/
    const theme = createTheme({
        palette: {
            mode: variant,
            text: {
                primary: variant === 'light' ? '#444' : '#ccc',
            },
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        margin: '3px',
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        margin: '1px',
                    },
                },
            },
        },
    })

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

ChangeTheme.defaultProps = defaultProps

export default ChangeTheme
