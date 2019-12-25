---
name: "articles"
description: "long article"
message: "Please enter file name"
root: "./articles/"
output: "**/*"
ignore: []
---

# `{{ input }}.md`

```markdown
---
layout: layouts/article.njk
title: {{ input }}
date: 
tags: ["articles"]
---
```
