# Versioning

I use the following tools for managing language and library versions:
- Ruby: [rbenv](https://github.com/rbenv/rbenv)
- Node: [nvm](https://github.com/nvm-sh/nvm)
- Ruby Gems: [Bundler](https://bundler.io/)
- Node Packages: [Yarn](https://yarnpkg.com/)

## .nvmrc

- Root level of project
- Config file for `nvm` declaring the Node version for the project
- Changing the Node version used in the project is as simple as updating this file and anywhere else in the project where the Node version is referenced (CI workflows for example)

## .ruby-version

- Root level of project
- Config file for `rbenv` (and other rb version managers) declaring the Ruby version for the project
- Changing the Ruby version used in the project is as simple as updating this file and anywhere else in the project where the Ruby version is referenced (CI workflows for example)

## Gemfile

- Root level of project 
- The `Gemfile` included in this repository simply lists many of the gems I prefer to work with. There are two "sections" in the template file - one for Rails, and one for Bridgetown - since those are usually the only types of Ruby projects I build that require a `Gemfile` for Bundler.

## package.json

- Root level of project
- The `package.json` included in this project makes a couple of assumptions. It assumes I'm using [Cypress](https://www.cypress.io/) as a testing tool for end-to-end tests, and also that I'm storing environment variables in a `.env` file. These can be removed when those aren't necessary for the project.
- Another thing to note is that some of the scripts can be removed if those same scripts are duplicated somewhere else. For example, a Rake task that performs the same task.
- Also, all of the dependencies are simply `devDependencies` in the template. In most cases, some of those packages could be moved to `dependencies` instead.