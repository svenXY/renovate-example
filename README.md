# renovate-example

example reproduction repo for discussion #16065
https://github.com/renovatebot/renovate/discussions/16065

## Expected behavior

Among others, I want to add labels for the update type and - if applicable - if
they are dev dependencies.

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
      } //,
//    {
//      "description": "Label in any update case",
//      "matchUpdateTypes": ["major","minor", "patch", "pin"],
//      "addlabels": ["some-type"]
//    },
//    {
//      "description": "Label in any case",
//      "addlabels": ["any"]
//    }
  ]
```

Dependencies of type major should have dependencies, major, devDependecies of
type minor or patch should have dependencies, devDeps, non-major and so on. 

I have checked a little further, but to keep it as small as possible, I have
commented it for now. However, uncommenting the next two rules, I would expect
"some-type" and "any" to be added to all PRs, but nothing happens

## Actual behavior

Neither the major nor the non-major label get added whereas the devDeps label
gets added. This is curious as if order actually played a role here, one would
assume that either the first or the last merge should "win".
