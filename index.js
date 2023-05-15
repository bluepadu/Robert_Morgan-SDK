const axios = require('axios');

class LotrSDK {
    constructor(apiBaseURL) {
        this.apiBaseURL = apiBaseURL
    }

    async getMovie(id) {
        try {
            if (id) {
                const response = await axios.get(`${this.apiBaseURL}/movie/${id}`);
                return response.data;
            } else {
                const response = await axios.get(`${this.apiBaseURL}/movie`);
                return response.data;
            }
        } catch (error) {
            throw new Error(`Failed to get movie: ${error.message}`);
        }
    }

    async getQuote(id) {
        try {
            if (id) {
                const response = await axios.get(`${this.apiBaseURL}/quote/${id}`);
                return response.data;
            } else {
                const response = await axios.get(`${this.apiBaseURL}/quote`);
                return response.data;
            }
        } catch (error) {
            throw new Error(`Failed to get quote: ${error.message}`);
        }
    }

    async getMovieQuotes(movieId) {
        try {
            const response = await axios.get(`${this.apiBaseURL}/movie/${movieId}/quote`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to get quote for a movie: ${error.message}`);
        }
    }
}
module.exports = LotrSDK;