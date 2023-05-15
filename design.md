
Finally, let's write our `design.md`:

```markdown
# SDK Design

The SDK is designed to be as user-friendly as possible. It abstracts away the complexity of interacting with the Lord of the Rings API, allowing developers to focus on building their applications.

We're using Axios, a promise-based HTTP client, to handle requests. This makes the SDK asynchronous by nature, providing non-blocking operations. 

The SDK's main class `LotrSDK` has three methods: `getMovie`, `getQuote`, and `getMovieQuotes`. These methods correspond to the available API endpoints. They take an optional ID parameter to fetch a specific movie or quote, and if no ID is provided, they return all movies or quotes, respectively.

The `getMovieQuotes` method fetches all quotes for a specific movie, based on its ID.

In the future, we can easily extend the SDK to cover more endpoints, following the same design pattern.
