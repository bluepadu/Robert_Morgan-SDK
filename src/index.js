const axios = require('axios');

class LotrSDK {
    constructor(apiBaseURL, token) {
        this.apiBaseURL = apiBaseURL;
        this.token = token;
        this.config = {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        };
    }

    async getMovie(id, page = 1, size = 10, sort = '') {
        try {
            if (id) {
                const response = await axios.get(`${this.apiBaseURL}/movie/${id}`, this.config);
                return response.data;
            } else {
                const response = await axios.get(`${this.apiBaseURL}/movie?page=${page}&size=${size}&sort=${sort}`, this.config);
                return response.data;
            }
        } catch (error) {
            throw new Error(`Failed to get movie: ${error.message}`);
        }
    }

    async getQuote(id, filter = '') {
        try {
            if (id) {
                const response = await axios.get(`${this.apiBaseURL}/quote/${id}`, this.config);
                return response.data;
            } else {
                const response = await axios.get(`${this.apiBaseURL}/quote?filter=${filter}`, this.config);
                return response.data;
            }
        } catch (error) {
            throw new Error(`Failed to get quote: ${error.message}`);
        }
    }

    async getMovieQuotes(movieId, page = 1, size = 10) {
        try {
            const response = await axios.get(`${this.apiBaseURL}/movie/${movieId}/quote?page=${page}&size=${size}`, this.config);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to get quote for a movie: ${error.message}`);
        }
    }
}

module.exports = LotrSDK;