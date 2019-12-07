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
title:
date:
tags: ["log"]
---

<time datetime="\{\{ date | dateIso \}\}">\{\{ date | dateReadable \}\}</time>

# \{\{ title \}\}
```
