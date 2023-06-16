###Pre-Requisites:
* Setup local registry `verdaccio`
docker run -it -d --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio

## Purpose of this project
* Playground environment to test lerna (including `lerna publish`) with npm workspace
* Working with `package-lock.json` files


install dependencies:
```
npm install
```

list:
```
lerna list --toposort --long
```

![graph](../lerna-graph/graph.png)
