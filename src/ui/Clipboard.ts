export async function copyTextToClipboard(text: string): Promise<void> {
    if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text)
    } else {
        return new Promise(() => document.execCommand('copy', true, text))
    }
}
