# Code Style

For formatting and code styling, I use Prettier in my projects installed as a dev dependency.

## .prettierignore

- Root level of project
- Syntax is just like a `.gitignore` file and everything included in the file will be ignored by Prettier

## .prettierrc

- Root level of project
- This JSON-formatted file lists all of the Prettier rules configured for the project
- My `.prettierrc` file includes options for using in a Ruby project, but those options are removed if the project doesn't use Ruby

## Additional Notes

- I typically pair Prettier with ESLint for projects that include JS/TS. Additional plugins and packages are needed in order to get the two to play nicely together. Rather than list them here, just refer to:
  - [.eslintrc](../linters/.eslintrc.json)
  - [package.json](../versioning/package.json)
- For Ruby projects I still use Prettier, although admittedly, it is annoying to have a dependency on a Node package just for styling if I have no intention of using other JS packages in the project. There are a couple of gems that have to be included in the Gemfile when using Prettier with Ruby as well as some overriding of default RuboCop rules as well. See the following for examples:
  - [Gemfile](../versioning/Gemfile)
  - [rubocop.yml](../linters/.rubocop.yml)
