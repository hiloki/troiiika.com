---
layout: layouts/log.njk
title: アセットファイルのパス
date: 2019-12-07
tags: ["log"]
---

CSS や画像などのアセットファイルは、何も設定しないと dist ディレクトリにコピーされない。
公式ドキュメントの[MANUAL PASSTHROUGH FILE COPY (FASTER) ](https://www.11ty.dev/docs/copy/)の項を参考に、config ファイルを修正した。
ただこれだけど、CSS ファイルを更新しても自動でビルドはされないので、それはひと工夫追加が必要。
