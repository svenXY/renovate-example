module.exports = {
  platform: 'github',
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

