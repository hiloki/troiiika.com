---
layout: layouts/log.njk
title: トップページにカテゴリ記事一覧を出す
date: 2019-12-03
tags: ["log"]
---

<time datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>

# {{ title }}

トップページを `collection.all` を出力しているのを `log` カテゴリの投稿だけ出すようにする。
リンク一覧じゃなく、全文出すのも考えたがいったん。
さすがにそろそろ最低限のスタイルほしい。
