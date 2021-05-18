import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SimpsonsQuote from './SimpsonsQuote';

const server = setupServer(
    rest.get(
        'https://thesimpsonsquoteapi.glitch.me/quotes',
        (req, res, ctx) => {
            return res (
            ctx.json([
                {
                    character: 'Lisa Simpson',
                    quote: 'Shut up, brain. I got friends now. I don\'t need you anymore.',
                    image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083'
                },
            ])
          )
        }
    )
)

describe('Simpsons Quotes Container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('fetches a quote image and name and displays it on site upon button click', async () => {
        render(<SimpsonsQuote />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        return waitFor(() => {
            screen.getByAltText('Lisa Simpson');
            screen.getAllByText('Shut up, brain. I got friends now. I don\'t need you anymore.');
        })
    })
})