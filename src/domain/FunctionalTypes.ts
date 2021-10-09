export interface Success<L> {
    value: L
    kind: 'left'
}

export interface Failure<R> {
    value: R
    kind: 'right'
}

/**
 * A result type which either holds a successful or a failure result.
 * The type could be replaced with `fp-ts` in future.
 */
export type Result<L, R> = Success<L> | Failure<R>

export function success<L, R>(value: L): Result<L, R> {
    return { value, kind: 'left' } as Success<L>
}

export function failure<L, R>(value: R): Result<L, R> {
    return { value, kind: 'right' } as Failure<R>
}

export function isSuccess<A, B>(val: Result<A, B>): val is Success<A> {
    if ((val as Success<A>).kind === 'left') return true
    return false
}

export function isFailure<A, B>(val: Result<A, B>): val is Failure<B> {
    if ((val as Failure<B>).kind === 'right') return true
    return false
}

export function notEmpty<TValue>(
    value: TValue | null | undefined
): value is TValue {
    return value !== null && value !== undefined
}
