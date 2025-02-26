'use client'
import { useEffect, useState } from "react";

import Button from "./Button";
import { fetchQuote } from "../utils";

// Chucknorris.io API providing randomized quotes
const URL = "https://api.chucknorris.io/jokes/random?category=dev"
const DEFAULT_QUOTE = "Chuck Norris can divide by zero.";

interface QuoteProps {
    displayButton?: boolean;
}

/**
 * Displays a random Chuck Norris quote via Chucknorris.io.
 * Also includes optional button to fetch a new quote on demand.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Quote({ displayButton = true }: QuoteProps) {

    // Set default placeholder to avoid empty state
    const [quote, setQuote] = useState(DEFAULT_QUOTE);

    // Asynchronously fetch new quote on demand
    async function getQuote() {
        const fetchedQuote = await fetchQuote(URL);
        if (fetchedQuote) {
            setQuote(fetchedQuote);
        }
    }

    // Ensures new quote is fetched on initial render
    useEffect(() => {
        getQuote();
    }, []);


    // TODO: text styling
    return (
        <div>
            <p>{quote}</p>
            {displayButton &&
                <Button onClick={getQuote}>
                    Another One
                </Button>
            }
        </div>
    )
};