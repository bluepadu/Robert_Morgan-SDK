# LOTR SDK

## Installation

To install the SDK, run the following command in your terminal:
```bash
npm install @bigblue-rm/lotr-sdk
```

## Usage
First, you'll need to initialize the SDK with the base URL of the API and a Bearer token for authentication.

const LotrSDK = require('@bigblue-rm/lotr-sdk');

const sdk = new LotrSDK('https://lotrapi.com', 'your_bearer_token');

## Fetching a Movie
To fetch a specific movie by its ID:
sdk.getMovie(1).then(console.log).catch(console.error);

To fetch all movies with pagination and sorting:
sdk.getMovie(null, 1, 10, 'title').then(console.log).catch(console.error);
In this example, we're fetching the first page of movies (page 1), with 10 movies per page (size 10), sorted by title.

## Fetching a Quote
To fetch a specific quote by its ID:
sdk.getQuote(1).then(console.log).catch(console.error);

To fetch all quotes with a specific filter:
sdk.getQuote(null, 'One').then(console.log).catch(console.error);
In this example, we're fetching all quotes that contain the word "One".

## Fetching Movie Quotes
To fetch quotes for a specific movie with pagination:
sdk.getMovieQuotes(1, 1, 10).then(console.log).catch(console.error);
In this example, we're fetching the first page of quotes (page 1) for the movie with ID 1, with 10 quotes per page (size 10).

## Error Handling
The SDK will throw an error if a request fails. Be sure to handle these errors in your application.

This should give users a better understanding of how to use the updated SDK. Please replace `'your_bearer_token'` with your actual token when using the SDK.

