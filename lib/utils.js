/**
 * Utility function to add `hacktoberfest` label by default
 */
const getIssueLabels = (labels) => {
    return labels ? "hacktoberfest," + labels : "hacktoberfest";
  },
  /**
   * Return only name of the label
   * For getting complete info pass `options.complete: true`
   */
  sanitizeLabels = (labels) => {
    if (!Array.isArray(labels)) return [];

    return labels.map((label) => label.name);
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
    }+is:issue+state:${options.ignoreClosed ? "" : "open"}`;
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
            labels: sanitizeLabels(issue.labels),
            state: issue.state,
            comments: issue.comments,
            createdAt: require("moment")(issue.created_at)
              .utc()
              .format("dddd, MMMM Do YYYY"), // UTC format
            updatedAt: require("moment")(issue.updated_at)
              .utc()
              .format("YYYY-MM-DD"),
          };
        })) ||
      []
    );
  };

module.exports = {
  getQuery,
  sanitizeIssues,
};
