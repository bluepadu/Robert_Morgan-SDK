# LOTR SDK

## Installation

To install the SDK, run the following command in your terminal:
```bash
npm install lotr-sdk
```

## Usage

Here's an example of how to use the SDK:

```javascript
const LotrSDK = require('lotr-sdk');

const sdk = new LotrSDK('https://lotrapi.com');

sdk.getMovie(1).then(console.log).catch(console.error);
sdk.getQuote(1).then(console.log).catch(console.error);
sdk.getMovieQuotes(1).then(console.log).catch(console.error);
