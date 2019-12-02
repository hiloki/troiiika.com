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

<time datetime="\{\{ post.date | dateIso \}\}">\{\{ post.date | dateReadable \}\}</time>

# \{\{ title \}\}
```
