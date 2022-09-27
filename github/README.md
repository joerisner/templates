# Github

All of my Git repositories are hosted on Github. At the root level of a project, I create a `.github` directory with the below files.

## workflows/build.yml

TBD

## dependabot.yml

- Dependabot runs on a weekly cadence and keeps all of the project's dependencies up-to-date

## mergify.yml

- For public repositories, I try to use Mergify for managing pull requests
- Since I'm the only contributor on my projects (aside from good ol' dependabot), most of the rules are pretty simple and mostly focus on auto-merging and adding or removing labels
- For private repositories, I don't use Mergify because they're not covered under the free tier

## pull_request_template.md

- Template for the body of a pull request
