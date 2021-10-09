import type { NextPage } from 'next'
import React from 'react'

import Page from '../components/Page'
import { literals } from '../src/ui/Literals'

const Imprint: NextPage = () => {
    return (
        <Page title={`${literals.brand} - Imprint`} description="Imprint">
            <h1>Your Imprint</h1>
        </Page>
    )
}

export default Imprint
