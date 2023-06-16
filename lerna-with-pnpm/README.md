###Pre-Requisites:
* Setup local registry `verdaccio`
docker run -it -d --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio

## Purpose of this project
* Playground environment to test lerna (including `lerna publish`) with pnpm workspace
* No-hoist


install dependencies:
```
pnpm install
```

list:
```
lerna list --toposort --long
```

![graph](../lerna-graph/graph.png)
