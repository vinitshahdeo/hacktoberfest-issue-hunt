const hacktoberfestIssueHunt = require('../lib/index'),
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
