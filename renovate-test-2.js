module.exports = {
  platform: 'github',
  schedule: ["every weekday"],
  logFileLevel: process.env.RENOVATE_LOG_FILE_LEVEL,
  logFile: process.env.LOG_FILE,
  includeForks: true,
  dependencyDashboard: false,
  platformAutomerge: true,
  onboarding: true,
  extends: [
    ":semanticPrefixFixDepsChoreOthers",
    ":ignoreModulesAndTests",
    ":autodetectPinVersions",
    "group:monorepos",
    "group:recommended",
    "workarounds:all",
    ":rebaseStalePrs",
    ":disableDependencyDashboard"
  ],
  prConcurrentLimit: 0,
  prHourlyLimit: 0,
  branchConcurrentLimit: 0,
  labels: ["dependencies"],
  packageRules: [
    {
      "description": "Label devDependencies",
      "matchDepTypes": ["devDependencies"],
      "addLabels": ["devDeps"]
    },
    {
      "description": "Label major",
      "matchUpdateTypes": ["major"],
      "addlabels": ["major"]
    },
    {
      "description": "Label non-major",
      "matchUpdateTypes": ["minor", "patch", "pin"],
      "addlabels": ["non-major"]
    }
  ],

  enabledManagers: ["npm"],
  repositories: [
      'svenXY/renovate-example',
  ]
};

