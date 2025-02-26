/**
 * Fetches a quote from the given URL.
 *
 * @param {string} url - The URL to fetch the quote from.
 * @returns {Promise<string>} A promise that resolves to the quote string.
 *
 */
export function fetchQuote(url: string) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data.value);
    // TODO: catch errors
}
