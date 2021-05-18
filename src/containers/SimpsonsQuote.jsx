import React, { useState } from 'react';
import Fetch from '../components/quotes/Fetch';
import Quote from '../components/quotes/Quote';
import { fetchQuote } from '../services/simpsonsApi';

const SimpsonsQuote = () => {
    const [quote, setQuote] = useState({});

    const [loading, setLoading] = useState(true);

    const handleClick = async () => {
        setLoading(true);
        const quote = await fetchQuote();
        setQuote(quote);
        setLoading(false);
    };

    return (
    <>
        <Fetch onClick={handleClick} />
        {!loading && <Quote {...quote} />}
    </>
  );
};

export default SimpsonsQuote;