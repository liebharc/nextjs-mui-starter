import React from 'react'
import renderer from 'react-test-renderer'
import SubscribeSection from '../../components/landing/SubscribeSection'

describe('A Subscribe Section', () => {
    const component = renderer.create(<SubscribeSection />)
    it('renders', () => {
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('shows a message on button press', () => {
        component.root.findByType('button').props.onClick()
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
