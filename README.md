# renovate-example

example reproduction repo for discussion #16065 https://github.com/renovatebot/renovate/discussions/16065

## Expected behavior

Among others, I want to add labels for the update type and - if applicable - if they are dev dependencies.

https://docs.renovatebot.com/configuration-options/#addLabels

```
"labels": ["dependencies"],
"package_rules": 
   [
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
  ]
```

Dependencies of type major should have dependencies, major, devDependecies of type minor or patch should have dependencies, devDeps, non-major and so on. 

## Actual behavior

Neither the major nor the non-major label get added whereas the devDeps label gets added
