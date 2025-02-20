# Contribution guidelines

We welcome contributions to our project. Here are a few guidelines that will help you along the way:

- [Getting started](#getting-started)
- [Question or problem?](#question-or-problem)
- [New components](#new-components)
- [Bugs](#bugs)
- [Feature requests](#feature-requests)
- [Submission guidelines](#submission-guidelines)
- [Coding standards](#coding-standards)
- [Commit message guidelines](#commit-message-guidelines)
- [Testing](#testing)

## Getting started

### Clone the hv-uikit-react and setup all the dependencies and packages

```shell
git clone git@github.com:lumada-design/hv-uikit-react.git
cd hv-uikit-react
npm ci
```

#### Start the storybook dev environment

```shell
npm run doc
```

By default it will run in [http://localhost:6006](http://localhost:6006).

## Question or problem?

Use GitHub issues for bug reports and feature requests or one of our available communication channels for general support questions.

## New components

When contributing with a new component, please add it to the **lab** in `packages/lab/src/<YOUR_COMPONENT>`

In order to make your component available in the Storybook you also need to add:

- A **story** in `packages/lab/src/<YOUR_COMPONENT>/<YOUR_STORY>.stories.js`

### Running the generate utility tool

```shell
npm run generate <YOUR_COMPONENT>
```

This will generate a basic component structure in the lab folder found at `packages/lab/src/<YOUR_COMPONENT>`.

### Symlinking packages

If you need to work on a component and watch the changes reflected on your application at the same time, you can [link](https://docs.npmjs.com/cli/link.html) your packages globally:

```shell
npm run link
```

Alternatively you can use [yalc](https://github.com/wclr/yalc).

## Bugs

If you find a bug in the source code, you can help us by submitting an issue to this repo.
Even better you can submit a Pull Request with a fix.

## Feature requests

You can request a new feature by submitting an issue to this repo.
Features can be **new components** or changes to **existing**.

Please make sure your features are compliant with the [NEXT Design System](https://designsystem.hitachivantara.com/) guidelines.

## Submission guidelines

### Submitting an issue

You can file new issues by selecting from our [new issue templates](https://github.com/lumada-design/hv-uikit-react/issues/new/choose) and filling out the issue template.
Before you submit your issue, search the repository, maybe your question was already answered.

If your issue appears to be a bug, and hasn't been reported, [open a new issue](https://github.com/lumada-design/hv-uikit-react/issues).
Help us to maximize the effort we can spend fixing issues and adding new features, by not reporting duplicate issues.

### Submitting a pull request

Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add.

#### Branch structure

All contributions should target the `master` branch (or a previous major version). Maintainers will be responsible for reviewing and merging the Pull Request.

#### Setup

1. Pull the latest `master` branch.
2. Always work and submit pull requests from a branch:
   ```
   $ git checkout -b YOUR_BRANCH_NAME master
   ```
3. Make sure you follow our [coding standards](#coding-standards), and add new test cases where appropriate following the [testing guidelines](#testing).
4. Commit your changes using a descriptive commit message that follows our [commit message guidelines](#commit-message-guidelines).
5. Once ready for feedback from other contributors and maintainers, push your commits to your fork:
   ```
   $ git push YOUR_FORK_REMOTE YOUR_BRANCH_NAME
   ```
6. Open a Pull Request. The title should follow the same [guidelines of the commit message](#commit-message-guidelines) (most of the times it can simply be the same than the first commit message).

Maintainers will be reviewing your work, making comments, asking questions and suggesting changes to be made before they merge your code.
Once all revisions to your merge request are complete, a maintainer will squash and merge your commits for you.

**That's it! Thank you for your contribution!**

## Coding standards

### Style guide

For a set of basic rules and guidelines for developing React components, see [here](https://github.com/airbnb/javascript/tree/master/react#basic-rules).
Feel free to edit/write components in your own style but be wary that we may ask you to make changes while reviewing your merge request.

### Linting

We enforce some style rules for code in this repository using [eslint](http://eslint.org/). You can install a linting addon to a lot of editors and IDEs that will follow our linting rules.
If you decide to not install a linter addon, or cannot, you can run `npm run lint` to get a report of any style issues.

Any issues not fixed will be caught during CI, and will prevent merging.

## Commit message guidelines

We enforce [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/) specs over how our git commit messages should be formatted. This leads to more readable messages that are easy to follow when looking through the project history. But also, we use the git commit messages to generate the change log.

Commits must be prefixed with a `type` in order to communicate intent, an optional `scope` may be provided after a type.

### Type

Must be one of the following:

- `feat:` a feature that is visible for end users.
- `fix:` a bugfix that is visible for end users.
- `chore:` a change that doesn't impact end users (e.g. chances to CI pipeline)
- `docs:` a change on the documentation
- `refactor:` a change in production code focused on readability, style and/or performance.
- Others commit types are allowed, for example: `style:`, `perf:`, `test:`.

Samples:

```
docs: correct spelling of CHANGELOG
```

```
feat(lang): added polish language
```

```
fix: minor typos in code, fixes issue #12
```

## Testing

If you add any features to our code, make sure to add tests so that your changes are covered.

Test your changes by running our test commands:

```
npm run test
```

We also execute regression tests in all pull requests and releases against the a11y standards (accessibility static analysis), end-to-end tests (using Playwright) and visual tests using Applitools. Please keep an eye on the pull request result for detailed feedback.
