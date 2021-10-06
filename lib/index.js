const { Octokit } = require('@octokit/rest'),
  { getQuery, sanitizeIssues } = require('./utils'),
  MAX_ITEMS = 100, // maximum number of issues

  /**
   * Search issues on GitHub based on labels and language
   */
  getIssues = async (options) => {

    if (!(options && options.token)) {
      throw new TypeError('Please provide personal access token');
    }

    try {
      const octokit = new Octokit({ auth: options.token }),
        issues = await octokit.request('GET /search/issues', {
          q: getQuery(options),
          per_page: options.limit || MAX_ITEMS,
        });

      return options.complete ? issues : sanitizeIssues(issues);
    } 
    catch (err) {
      throw err.status === 401
        ? new Error('Bad credentials! Please provide correct access token.')
        : new Error(
            'Something went wrong, please try again. ' +
              'If you see this error repeatedly, kindly report a bug here: ' +
              'https://github.com/vinitshahdeo/hacktoberfest-issue-hunt/issues/new'
          );
    }
  };

module.exports = (options, cb) => {
  if (typeof cb !== 'function') {
    return getIssues(options); // promise, it can be awaited
  }

  getIssues(options)
    .then((issues) => cb(null, issues))
    .catch(cb);
};
