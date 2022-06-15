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
    } //,
    // {
    //   "description": "Label in any update case",
    //   "matchUpdateTypes": ["major","minor", "patch", "pin"],
    //   "addlabels": ["some-type"]
    // },
    // {
    //   "description": "Label in any case",
    //   "addlabels": ["any"]
    // }
  ],

  enabledManagers: ["npm"],
  repositories: [
      'svenXY/renovate-example',
  ]
};

