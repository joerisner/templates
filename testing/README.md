# Testing

## cypress/fixtures

- If there are multiple tests that depend on static data, adding fixture files to this directory can be a good method of maintaining that data

## cypress/specs

- By default, Cypress will create a `cypress/integrations` directory where all of the specs are to be stored. I change the name of the directory to `cypress/specs` instead (and update the `specPattern` option in the config file to reflect the change).

## cypress/support

- This is the directory where utils and custom commands reside
- Rather than having a single file for all custom commands, a `cypress/support/commands` directory can can be created with different files included and then simply import those files into `cypress/support/index.ts`

## cypress.config.ts

- Root level of project
- Cypress config file with E2E default config options

## cypress.d.ts

- TS declaration file for Cypress types & interfaces (custom commands)

## cypress.env.json

- Root level of project
- Git-ignored environment variables file in JSON format for Cypress
