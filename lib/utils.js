/**
 * Utility function to add `hacktoberfest` label by default
 */
 const getIssueLabels = (labels) => {
    return labels ? "hacktoberfest," + labels : "hacktoberfest";
  },

  /**
   *
   * Returns a query that can be used to search open issues on GitHub for Hacktoberfest
   *
   * @param {labels, language} options - filter by labels and language
   * NOTE: `labels` should be comma-separated string e.g. 'first-timers-only,bug'
   */
  getQuery = (options) => {
    return `label:${getIssueLabels(options.labels)}+language:${
      options.language
    }+is:issue+state:open`;
  },

  /**
   *
   * Return only title and link of the issues
   */
  sanitizeIssues = (issues) => {
    return (
      (issues.data &&
        issues.data.items &&
        issues.data.items.map((issue) => {
          return {
            title: issue.title,
            link: issue.html_url,
          };
        })) ||
      []
    );
  };

module.exports = {
  getQuery,
  sanitizeIssues,
};
