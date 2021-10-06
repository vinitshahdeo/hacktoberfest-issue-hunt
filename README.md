# hacktoberfest-issue-hunt

[![GitHub license](https://img.shields.io/github/license/vinitshahdeo/inspirational-quotes.svg?style=flat&logo=github)](https://github.com/vinitshahdeo/inspirational-quotes/blob/master/LICENSE)

This module can be used to **list all the open issues on GitHub that are labelled as `hacktoberfest`**. You can resolve those issues to complete your **Hacktoberfest** challenge. Learn more about **[Hacktoberfest](https://vinitshahdeo.dev/hacktoberfest-2021)**.

## Installation

```bash
npm install hacktoberfest-issue-hunt
```

## Usage

To use this, you need to supply your [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). You can easily create one [here](https://github.com/settings/tokens/new?scopes=repo).

```js

const hacktoberfestIssueHunt = require('hacktoberfest-issue-hunt'),
  options = {
    token: 'XXXXXXXXXXXXXXX', // replace it with your token
    labels: 'first-timers-only',
    limit: 10,
    language: 'js',
  };

// using promises
hacktoberfestIssueHunt(options)
  .then((issues) => console.log(issues))
  .catch(console.log);

// using callback
hacktoberfestIssueHunt(options, (err, issues) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(issues);
});

```

Check out examples [here](./example/demo.js).

## Options

Additionally, you can provide the following options to filter the `hacktoberfest` issues based on labels and language.

| Option  | Description  |
|---|---|
| `labels`  | Filter issues based on labels e.g. `first timers only`, `help wanted`, `good first issues`, etc.  |
| `language` | Filter issues based on language e.g. `js`, `go`, `python`, etc.  |
| `limit`  | Maximum number of issues |

> _Currently the max limit is 100 as the paginated response is not supported._

## Author

Vinit Shahdeo | **[@vinitshahdeo](https://github.com/vinitshahdeo)**

[![Twitter Follow](https://img.shields.io/twitter/follow/Vinit_Shahdeo.svg?style=social)](https://twitter.com/Vinit_Shahdeo)

