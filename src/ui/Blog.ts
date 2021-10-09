import { DateTime } from 'luxon'

export function parsePostDate(rawDate: string): DateTime {
    return DateTime.fromISO(rawDate)
}

export function formatPostDate(rawDate: string): string {
    return parsePostDate(rawDate).toLocaleString(DateTime.DATE_SHORT)
}
