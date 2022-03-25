# atcoder-user-competition-history-api
AtCoderのあるアカウントのコンテスト成績表を取得するWeb API

## Requirement
- npm
- clasp

## Deploy
`.clasp.json`を作成する。

```
{
    "scriptId": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "rootDir": "./src"
}

```

以下のコマンドでdeployされる。

```
clasp push
clasp deploy -i <Deploy ID>
```
