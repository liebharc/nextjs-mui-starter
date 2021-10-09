import { formatPostDate } from '../../src/ui/Blog'
import { Settings } from 'luxon'

describe('A blog post', () => {
    Settings.defaultLocale = 'en-US'
    it('must show a human friendly date', () => {
        expect(formatPostDate('2017-06-01T00:00:00.000Z')).toBe('6/1/2017')
    })
})
