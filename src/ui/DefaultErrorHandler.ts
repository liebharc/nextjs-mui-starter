/*eslint @typescript-eslint/no-explicit-any: 0*/
/*eslint @typescript-eslint/explicit-module-boundary-types: 0*/

export function defaultErrorHandler(error: any): void {
    console.log(error) // Consider to do more with the error message
}
