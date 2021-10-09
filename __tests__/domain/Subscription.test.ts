import { failure, success } from '../../src/domain/FunctionalTypes'
import { newSubscription, Subscription } from '../../src/domain/Subscription'

describe('A Subscription', () => {
    const validMail = 'test@test.com'
    const invalidMail = 'test'
    it('accepts valid addresses with consent', () =>
        expect(newSubscription(validMail, true)).toStrictEqual(
            success(new Subscription({ email: validMail }))
        ))
    it('requires a valid mail', () =>
        expect(newSubscription(invalidMail, true)).toStrictEqual(
            failure('We need your email to contact you')
        ))
    it('requires consent', () =>
        expect(newSubscription(validMail, false)).toStrictEqual(
            failure('We need your consent to contact you')
        ))
    it('Requires consent first if both mail and consent are missing', () =>
        expect(newSubscription(invalidMail, false)).toStrictEqual(
            failure('We need your consent to contact you')
        ))
})
