<a href="https://vinitshahdeo.dev/hacktoberfest-2021">
  <img src="./assets/logo.png" width="15%" height="15%"/>
</a>

# hacktoberfest-issue-hunt 

[![NPM VERSION](http://img.shields.io/npm/v/hacktoberfest-issue-hunt.svg?style=flat&logo=npm)](https://www.npmjs.org/package/hacktoberfest-issue-hunt) [![GitHub license](https://img.shields.io/github/license/vinitshahdeo/inspirational-quotes.svg?style=flat&logo=github)](https://github.com/vinitshahdeo/inspirational-quotes/blob/master/LICENSE) [![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/hacktoberfest-issue-hunt.svg?color=9cf&logo=snyk)](https://www.npmjs.com/package/hacktoberfest-issue-hunt)

This module can be used to **list all the open issues for `hacktoberfest` on GitHub**. You can resolve those issues to complete your **Hacktoberfest** challenge. Learn more about **[Hacktoberfest](https://vinitshahdeo.dev/hacktoberfest-2021)**.

**[View Live Demo](https://hacktoberfest-issues.vercel.app/) • [Documentation](https://vinitshahdeo.github.io/hacktoberfest-issue-hunt/) • [Check on NPM](https://www.npmjs.com/package/hacktoberfest-issue-hunt)**

[![NPM](https://nodei.co/npm/hacktoberfest-issue-hunt.png?compact=true)](https://nodei.co/npm/hacktoberfest-issue-hunt/)

## Installation

```bash
npm install hacktoberfest-issue-hunt
```

## Usage

To use this, you need to supply your [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) by GitHub. You can easily create one [here](https://github.com/settings/tokens/new?scopes=repo).

```js
const hacktoberfest = require('hacktoberfest-issue-hunt');
```

#### Using Promise

```js
hacktoberfest({ token: 'XXXXXXXX' })
  .then((issues) => {
    // issues -> list of hacktoberfest issues
  })
  .catch(console.log);
```

#### Using callback

```js
hacktoberfest({ token: 'XXXXXXXX' }, (err, issues) => {
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
    labels: ["good first issue", "help wanted", "hacktoberfest"],
    state: "open",
    comments: 2,
    createdAt: "Monday, October 11th 2021",
  },
  {
    title: "Create a React App to filter Hacktoberfest issues on the basis of languages and labels",
    link: "https://github.com/vinitshahdeo/hacktoberfest-issue-hunt/issues/1",
    labels: ["good first issue", "help wanted", "hacktoberfest"],
    state: "open",
    comments: 5,
    createdAt: "Sunday, October 10th 2021",
  }
]

```

Kindly refer to the [documentation](https://vinitshahdeo.github.io/hacktoberfest-issue-hunt/) to learn more.

## Demo

```bash
git clone https://github.com/vinitshahdeo/hacktoberfest-issue-hunt.git
cd hacktoberfest-issue-hunt
npm run demo
```

Replace `XXXXXXXXXXXXXXX` with your personal access token inside [`example/demo.js`](https://github.com/vinitshahdeo/hacktoberfest-issue-hunt/blob/main/example/demo.js#L3) You can try it out using `npm run demo` or check out the examples [here](./example/demo.js).

- [Learn more](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) about personal access token
- [Generate](https://github.com/settings/tokens/new?scopes=repo) your personal access token
- [**SECURITY WARNING**] Never push your token on GitHub. It "acts as a password" coupled with rights which can be revoked. Please revoke/delete your token if you've committed by mistake.
- You can view it in action below:
  - [hacktoberfest-issues-hunt.netlify.app](https://hacktoberfest-issues-hunt.netlify.app/)
  - [hacktoberfest-issues.vercel.app](https://hacktoberfest-issues.vercel.app/)


## Options

Additionally, you can provide the following options to filter the `hacktoberfest` issues based on labels and language.

```js

const options = {
  token: 'XXXXXXXXXXXXXXX', // replace it with your token
  labels: 'first-timers-only',
  limit: 10,
  language: 'js',
  ignoreClosed: false, // default is true
  complete: true // default is false
};

// using promises
hacktoberfest(options)
  .then((issues) => console.log(issues))
  .catch(console.log);

// using callback
hacktoberfest(options, (err, issues) => {
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
| `labels`  | Filter issues based on labels e.g. `first timers only`, `help wanted`, `good first issues`, etc. Pass a comma-separated string containing the labels  |
| `language` | Filter issues based on language e.g. `js`, `go`, `python`, etc.  |
| `limit`  | Maximum number of issues |
| `ignoreClosed`  | Default is `true`. Pass it as `false` if you want to fetch closed issues as well otherwise it will return only `open` issues |
| `complete`  | Default is `false`. Pass it as `true` if you want to receive the complete info about an issue. Refer [`fixtures/data.js`](./fixtures/data.js) to learn more about the complete issue object |

> _Currently the max limit is 100 as the paginated response is not supported._

## Sample Applications

[![npm](https://img.shields.io/npm/dy/hacktoberfest-issue-hunt.svg?logo=npm&color=yellow)](https://www.npmjs.com/package/hacktoberfest-issue-hunt)

* A React App created by [@evertcode](https://github.com/evertcode/hacktoberfest-issues-hunt-search). **View the live demo [here](https://hacktoberfest-issues.vercel.app/)**.
* A React App created by [@lbaweja1999](https://github.com/lbaweja1999/hacktoberfest-issue-hunt-react-app). **View the live demo [here](https://hacktoberfest-issues-hunt.netlify.app/)**.
* A React App created by [@heysujal](https://github.com/heysujal/hacktoberfest-issue). **View the live demo [here](https://hacktoberfest-issues.netlify.app/)**.
* [Click here](https://github.com/vinitshahdeo/hacktoberfest-issue-hunt/network/dependents?dependent_type=REPOSITORY) to view all.

## Contributing

- 🚨 **Please check out [discussions](https://github.com/vinitshahdeo/hacktoberfest-issue-hunt/discussions/3) to find out how you can contribute.**
- 💡 Refer [`IDEAS.md`](./IDEAS.md) to explore what you can build using this module. Your innovative ideas are most welcome.

## Author

Vinit Shahdeo ❯ **[@vinitshahdeo](https://github.com/vinitshahdeo)**

[![Twitter Follow](https://img.shields.io/twitter/follow/Vinit_Shahdeo.svg?style=social)](https://twitter.com/Vinit_Shahdeo)

## Support

Show some 💙 by [starring](https://github.com/vinitshahdeo/hacktoberfest-issue-hunt/stargazers) this repository or [buying me a coffee](https://www.buymeacoffee.com/vinitshahdeo)!

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/vinitshahdeo)

