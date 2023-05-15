const axios = require('axios');

class LotrSDK {
    constructor(apiBaseURL) {
        this.apiBaseURL = apiBaseURL
    }

    async getMovie(id) {
        if (id) {
            const response = await axios.get(`${this.apiBaseURL}/movie/${id}`);
            return response.data;
        } else {
            const response = await axios.get(`${this.apiBaseURL}/movie`);
            return response.data;
        }
    }

    async getQuote(id) {
        if (id) {
            const response = await axios.get(`${this.apiBaseURL}/quote/${id}`);
            return response.data;
        } else {
            const response = await axios.get(`${this.apiBaseURL}/quote`);
            return response.data;
        }
    }

    async getMovieQuotes(movieId) {
        const response = await axios.get(`${this.apiBaseURL}/movie/${movieId}/quote`);
        return response.data;
    }
}
module.exports = LotrSDK;