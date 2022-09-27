# Linters

For linting, I use ESLint for JavaScript/TypeScript and RuboCop for Ruby.

## .eslintrc.json

- Root level of project
- ESLint configuration file that usually extends other recommended configurations
- Since I try to use TypeScript as much as possible, the parser is usually a TS parser imported in the project
- There are a number of dependencies that are needed in order to ESLint and TS play nicely. See the [package.json](../versioning/package.json) file for examples.

## .rubocop.yml

- Root level of project
- RuboCop configuration file
- RuboCop rules are pretty straightforward and simple, but several of them needed to be disabled in order to allow me to use Prettier in the way I prefer. See notes for specifics in the file.
