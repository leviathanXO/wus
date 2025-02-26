// TODO: catch errors

// Fetch quote from API
export function fetchQuote(url: string) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data.value);
}