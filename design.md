# SDK Design

The SDK is designed to be as user-friendly as possible. It abstracts away the complexity of interacting with the Lord of the Rings API, allowing developers to focus on building their applications.

## HTTP Client

We're using Axios, a promise-based HTTP client, to handle requests. This makes the SDK asynchronous by nature, providing non-blocking operations. The use of Axios also provides us with easy-to-use APIs for request and response interceptors, which can be used for logging, modifying requests, and global error handling.

## Authentication

The SDK supports Bearer token authentication. The Bearer token is passed into the constructor of the `LotrSDK` class and is included in the headers of all subsequent API requests.

## Methods

The SDK's main class `LotrSDK` has three methods: `getMovie`, `getQuote`, and `getMovieQuotes`.

`getMovie` and `getQuote` methods can fetch a specific movie or quote respectively if an ID is provided. If no ID is provided, they can return a paginated and sorted list of all movies or a filtered list of all quotes, respectively.

The `getMovieQuotes` method fetches a paginated list of quotes for a specific movie, based on its ID.

These methods are built to be flexible and to easily accommodate the API's capabilities. For instance, they accept optional parameters for page number, page size, sorting, and filtering, providing developers with maximum control.

## Future Improvements

In the future, we can easily extend the SDK to cover more endpoints, following the same design pattern. We can also add more sophisticated error handling and retry logic, and support more authentication methods if necessary.
