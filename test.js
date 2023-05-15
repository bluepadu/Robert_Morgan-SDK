const axios = require('axios');
const LotrSDK = require('./index');
jest.mock('axios');

describe('LotrSDK', () => {
    let sdk;
    const baseURL = 'https://lotrapi.com';

    beforeEach(() => {
        sdk = new LotrSDK(baseURL);
    });

    test('getMovie', async () => {
        const movie = { title: 'The Fellowship of the Ring' };
        axios.get.mockResolvedValue({ data: movie });

        const result = await sdk.getMovie(1);

        expect(result).toEqual(movie);
        expect(axios.get).toHaveBeenCalledWith(`${baseURL}/movie/1`);
    });

    test('getQuote', async () => {
        const quote = { quote: 'One does not simply walk into Mordor' };
        axios.get.mockResolvedValue({ data: quote });

        const result = await sdk.getQuote(1);

        expect(result).toEqual(quote);
        expect(axios.get).toHaveBeenCalledWith(`${baseURL}/quote/1`);
    });

    test('getMovieQuotes', async () => {
        const quotes = [{ quote: 'One does not simply walk into Mordor' }];
        axios.get.mockResolvedValue({ data: quotes });

        const result = await sdk.getMovieQuotes(1);

        expect(result).toEqual(quotes);
        expect(axios.get).toHaveBeenCalledWith(`${baseURL}/movie/1/quote`);
    });
});
