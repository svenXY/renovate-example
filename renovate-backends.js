const config = require('./config-base');

module.exports = {
  ...config,
  extends: [
    ...config.extends,
    'local>myteam/ops/renovate:backend-config'
  ],
    enabledManagers: ["maven"],
    repositories: [
        'some/repo'
    ]
};
