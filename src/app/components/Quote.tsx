'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

import Button from "./ui/Button";
import Container from "./ui/Container";

import { fetchQuote } from "../lib/utils";

import REFRESH_ICON from '../assets/heroicons-arrow-path-mini.svg';

// Chucknorris.io API providing randomized quotes
const URL = "https://api.chucknorris.io/jokes/random?category=dev"

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
    const [quote, setQuote] = useState("");

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

    // TODO: Add typewriter effect animation?
    return (
        <>
            <div className="h-full content-end md:content-center">
            <Container>
                <p className="text-base md:text-3xl mb-2 text-pretty">
                    {quote}
                </p>
            </Container>
            </div>

            {displayButton &&
                <Container>
                    <Button onClick={getQuote}>
                        Yeehaw!
                        {<Image
                            className="ml-1"
                            aria-hidden
                            src={REFRESH_ICON}
                            alt="Refresh icon"
                            width={20}
                            height={20}
                        />}
                    </Button>
                </Container>
            }
        </>
    )
};