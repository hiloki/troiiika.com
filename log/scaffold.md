---
layout: layouts/log.njk
title: 記事のScaffold
date: 2019-12-02
tags: ["log"]
---

<time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time>

# {{ title }}

今のところの仮の構想だが、ちょっとしたログのような短文の log カテゴリと、もっと長文で独立した article カテゴリで書きわけようと考えている。

それぞれでのメタ情報やフォーマットに違いが出てくるので、Markdown ファイル生成を Scaffold できるようにしたかった。

ということで、同僚のつくった[Scaffdog](https://blog.wadackel.me/2019/scaffdog/)を拝借することにした。いったん必要最低限でこしらえた。
