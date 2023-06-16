###Pre-Requisites:
* Setup local registry `verdaccio`
docker run -it -d --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio

## Purpose of this project
* Playground environment to test lerna
* Compare lerna with different package managers:
  * npm
  * pnpm
  * yarn
* Test no-hoist capability
* Working with lock files
* Testing publish flow

