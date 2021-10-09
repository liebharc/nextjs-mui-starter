import { Result, failure, success } from './FunctionalTypes'

export class Subscription {
    email = ''

    public constructor(init?: Partial<Subscription>) {
        Object.assign(this, init)
    }
}

function validateEmail(email: string) {
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return regex.test(String(email).toLowerCase())
}

export function newSubscription(
    email: string,
    consentGiven: boolean
): Result<Subscription, string> {
    if (!consentGiven) {
        return failure('We need your consent to contact you')
    }
    if (!email || !validateEmail(email)) {
        return failure('We need your email to contact you')
    }

    return success(new Subscription({ email: email }))
}
