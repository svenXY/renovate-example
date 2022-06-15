module.exports = {
  platform: 'github',
  labels: ["dependencies"],
  packageRules: [
    {
      "description": "Label major",
      "matchUpdateTypes": ["major"],
      "addlabels": ["major"]
    },
    {
      "description": "Label devDependencies",
      "matchDepTypes": ["devDependencies"],
      "addLabels": ["devDeps"]
    },
    {
      "description": "Label non-major",
      "matchUpdateTypes": ["minor", "patch", "pin"],
      "addlabels": ["non-major"]
    }
  ],
  repositories: [
      'svenXY/renovate-example',
  ]
};

