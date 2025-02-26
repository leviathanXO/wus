'use client'
import { useEffect, useState } from "react";

const url = "https://api.chucknorris.io/jokes/random?category=dev"
const DEFAULT_QUOTE = "Chuck Norris can divide by zero.";

export function fetchQuote() {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data.value);
}

export default function Quote() {
    const [quote, setQuote] = useState(DEFAULT_QUOTE);

    async function getQuote() {
        const quote = await fetchQuote();
        setQuote(quote);
    }

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <div>
            <p>{quote}</p>
            <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={getQuote}>
                another one
            </button>
        </div>
    )
};