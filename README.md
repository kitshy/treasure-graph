<!--
parent:
  order: false
-->

<div align="center">
  <h1> treasure repo </h1>
</div>

## Install
### Install dependencies
```bash
yarn add @graphprotocol/graph-cli 
```

### init
```bash
yarn graph init treasure-graph
```

## Deploy
### auth
```bash
yarn graph auth XXXX
```

### build
```bash
yarn graph codegen && graph build
```

### deploy subgraph

```bash
yarn graph deploy treasure-graph
```

## Contribute

### 1.fork repo

fork treasure-graph to your github

### 2.clone repo

```bash
git@github.com:kitshy/treasure-graph.git
```

### 3. create new branch and commit code

```bash
git branch -C xxx
git checkout xxx

coding

git add .
git commit -m "xxx"
git push origin xxx
```

### 4.commit PR

Have a pr on your github and submit it to the treasure-graph repository

### 5.review

After the treasure-graph code maintainer has passed the review, the code will be merged into the treasure-graph library. At this point, your PR submission is complete

### 6.Disclaimer

This code has not yet been audited, and should not be used in any production systems.
