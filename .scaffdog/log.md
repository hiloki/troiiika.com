---
name: "log"
description: "short log"
message: "Please enter file name"
root: "./log/"
output: "**/*"
ignore: []
---

# `{{ input }}.md`

```markdown
---
layout: layouts/log.njk
title: {{ input }}
date: {{ input }}
tags: ["log"]
---
```
