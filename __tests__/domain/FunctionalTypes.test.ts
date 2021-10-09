import '../../src/domain/Subscription'
import {
    Result,
    failure,
    success,
    isSuccess,
    isFailure,
    notEmpty,
} from '../../src/domain/FunctionalTypes'

describe('An Either type', () => {
    const result: Result<string, number> = success('Test')
    const error: Result<string, number> = failure(5)
    it('success not a failure', () => {
        expect(isSuccess(result)).toBe(true)
        expect(isFailure(result)).toBe(false)
        if (isSuccess(result)) {
            expect(result.value).toBe('Test')
        }
    })

    it('failure is not a success', () => {
        expect(isSuccess(error)).toBe(false)
        expect(isFailure(error)).toBe(true)
        if (isFailure(error)) {
            expect(error.value).toBe(5)
        }
    })
})

describe('notEmpty function', () => {
    it('filters empty values', () => {
        const values = ['test', null, '123']
        expect(values.filter(notEmpty)).toStrictEqual(['test', '123'])
    })
})
