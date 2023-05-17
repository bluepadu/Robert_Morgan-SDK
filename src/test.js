const axios = require('axios');
const LotrSDK = require('./index');
jest.mock('axios');

describe('LotrSDK', () => {
    let sdk;
    const baseURL = 'https://lotrapi.com';
    const token = 'test_token';

    beforeEach(() => {
        sdk = new LotrSDK(baseURL, token);
    });

    test('getMovie', async () => {
        const movie = { title: 'The Fellowship of the Ring' };
        axios.get.mockResolvedValue({ data: movie });

        const result = await sdk.getMovie(1, 1, 10, 'title');

        expect(result).toEqual(movie);
        expect(axios.get).toHaveBeenCalledWith(`${baseURL}/movie/1`, { headers: { 'Authorization': `Bearer ${token}` } });
    });

    test('getMovies', async () => {
        const movies = [{ title: 'The Fellowship of the Ring' }];
        axios.get.mockResolvedValue({ data: movies });

        const result = await sdk.getMovie(null, 1, 10, 'title');

        expect(result).toEqual(movies);
        expect(axios.get).toHaveBeenCalledWith(`${baseURL}/movie?page=1&size=10&sort=title`, { headers: { 'Authorization': `Bearer ${token}` } });
    });

    test('getQuote', async () => {
        const quote = { quote: 'One does not simply walk into Mordor' };
        axios.get.mockResolvedValue({ data: quote });

        const result = await sdk.getQuote(1, 'One');

        expect(result).toEqual(quote);
        expect(axios.get).toHaveBeenCalledWith(`${baseURL}/quote/1`, { headers: { 'Authorization': `Bearer ${token}` } });
    });

    test('getQuotes', async () => {
        const quotes = [{ quote: 'One does not simply walk into Mordor' }];
        axios.get.mockResolvedValue({ data: quotes });

        const result = await sdk.getQuote(null, 'One');

        expect(result).toEqual(quotes);
        expect(axios.get).toHaveBeenCalledWith(`${baseURL}/quote?filter=One`, { headers: { 'Authorization': `Bearer ${token}` } });
    });

    test('getMovieQuotes', async () => {
        const quotes = [{ quote: 'One does not simply walk into Mordor' }];
        axios.get.mockResolvedValue({ data: quotes });

        const result = await sdk.getMovieQuotes(1, 1, 10);

        expect(result).toEqual(quotes);
        expect(axios.get).toHaveBeenCalledWith(`${baseURL}/movie/1/quote?page=1&size=10`, { headers: { 'Authorization': `Bearer ${token}` } });
    });
});
