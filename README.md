<a href="https://vinitshahdeo.dev/hacktoberfest-2021">
  <img src="./assets/logo.png" width="15%" height="15%"/>
</a>

# hacktoberfest-issue-hunt 

[![NPM VERSION](http://img.shields.io/npm/v/hacktoberfest-issue-hunt.svg?style=flat&logo=npm)](https://www.npmjs.org/package/hacktoberfest-issue-hunt) [![GitHub license](https://img.shields.io/github/license/vinitshahdeo/inspirational-quotes.svg?style=flat&logo=github)](https://github.com/vinitshahdeo/inspirational-quotes/blob/master/LICENSE) [![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/hacktoberfest-issue-hunt.svg?color=9cf&logo=snyk)](https://www.npmjs.com/package/hacktoberfest-issue-hunt)

This module can be used to **list all the open issues for `hacktoberfest` on GitHub**. You can resolve those issues to complete your **Hacktoberfest** challenge. Learn more about **[Hacktoberfest](https://vinitshahdeo.dev/hacktoberfest-2021)**.

[![NPM](https://nodei.co/npm/hacktoberfest-issue-hunt.png?compact=true)](https://nodei.co/npm/hacktoberfest-issue-hunt/)

## Installation

```bash
npm install hacktoberfest-issue-hunt
```

## Usage

To use this, you need to supply your [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). You can easily create one [here](https://github.com/settings/tokens/new?scopes=repo).

```js
const hacktoberfestIssueHunt = require('hacktoberfest-issue-hunt');
```

#### Using Promise

```js
hacktoberfestIssueHunt({ token: 'XXXXXXXX' })
  .then((issues) => {
    // issues -> list of hacktoberfest issues
  })
  .catch(console.log);
```

#### Using callback

```js
hacktoberfestIssueHunt({ token: 'XXXXXXXX' }, (err, issues) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(issues);
});

```

**Sample response**

```js

[
  {
    title: "Add More Inspirational Quotes",
    link: "https://github.com/vinitshahdeo/inspirational-quotes/issues/4",
  },
  {
    title: "Create a React App to filter Hacktoberfest issues on the basis of languages and labels",
    link: "https://github.com/vinitshahdeo/hacktoberfest-issue-hunt/issues/1",
  }
]

```

## Demo

```bash
git clone https://github.com/vinitshahdeo/hacktoberfest-issue-hunt.git
cd hacktoberfest-issue-hunt
npm run demo
```

Replace `XXXXXXXXXXXXXXX` with your personal access token inside [`example/demo.js`](https://github.com/vinitshahdeo/hacktoberfest-issue-hunt/blob/main/example/demo.js#L3) You can try it out using `npm run demo` or check out the examples [here](./example/demo.js).

- [Learn more](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) about personal access token
- [Generate](https://github.com/settings/tokens/new?scopes=repo) your personal access token


## Options

Additionally, you can provide the following options to filter the `hacktoberfest` issues based on labels and language.

```js

const options = {
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

Please refer the table below to explore available options.

| Option  | Description  |
|---|---|
| `labels`  | Filter issues based on labels e.g. `first timers only`, `help wanted`, `good first issues`, etc.  |
| `language` | Filter issues based on language e.g. `js`, `go`, `python`, etc.  |
| `limit`  | Maximum number of issues |
| `compelete`  | Default is `false`. Pass it as `true` if you want to receive the complete data about an issue, otherwise it will return only `title` and `link` to the issue |

> _Currently the max limit is 100 as the paginated response is not supported._


## Author

Vinit Shahdeo | **[@vinitshahdeo](https://github.com/vinitshahdeo)**

[![Twitter Follow](https://img.shields.io/twitter/follow/Vinit_Shahdeo.svg?style=social)](https://twitter.com/Vinit_Shahdeo)

