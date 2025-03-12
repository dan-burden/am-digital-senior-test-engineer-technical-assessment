# Code Test - AM Digital Senior Test Engineer
## Candidate: Dan Burden

### Approach
This suite uses Playwright, as it is the simplest and quickest way to get a functional test suite up and running. It also provides ample scope for extension and augmentation. Aside from simply scaling end-to-end test coverage, the framework allows for the addition of API testing, or accessibility, etc as future needs dictate. I intend to roll with defaults as far as possible, as they work for most situations and reduce setup time - therefore Typescript is the language used for the test code. 

#### Language
Node.js with Typescript is used, as they match the current ecosystem and allow for seamless collaboration with engineers from other capabilities. While tests themselves are not deployed,user-facing production code, sharing a development ethos and ecosystem means that any engineer should be able to contribute to this test suite with ease.

#### Code standards
By using a linter and code formatter we can avoid running into code smells and flaky, hard to diagnose test issues. Setting this up from the start means we don't end up baking-in bad practice and immediately creating esoteric setups and technical debt.

[Biome](https://biomejs.dev/) was chosen for its simplicity, providing both formatting and linting and requiring zero configuration in order to be useful and effective. Whilst ESLint and Prettier are more widely used, and therefore have more plugin support for Playwright specifically, Biome is a compromise that saves time and sets the suite on the right track.

## Getting Started
### Prerequisites
#### Engine
This project runs on Node.js, targeting the most recent LTS release (v22.14.0) with npm 10.9.2 for package management. However, it should run on lower versions.

You can see your current node versions by using:
```bash
$ node -v && npm -v
```

It is recommended to use something like [Node version manager](https://github.com/nvm-sh/nvm) to switch versions on your local machine.

Containerised development is out of scope for this project, but could be implemented later. 

### Installation
Once you have cloned the repo, from the root of the project run:
```bash
$ npm i
```

Playwright requires installation of browser binaries - this is a huge benefit of the framework, as these binaries are maintained 'for free' along with the version of Playwright installed.

```bash
$ npx playwright install
```

The test suite was developed in VS Code and it is recommended to utilise the [Playwright extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) when contributing to this repo, although other such tools are available for other IDEs.


As it is essentially a wrapper for the built-in Playwright tools such as `--ui` or `--debug` mode, you can configure the projects (browsers) to run, and inspect the trace viewer after tests to dig into failures.


Similarly, [Biome has integrations](https://biomejs.dev/guides/editors/first-party-extensions/) for various IDEs and editors to preserve standards on-the-fly.

### Running Tests
You can run all tests just in Chrome for a quick check:
```bash
$ npm run test
```

or for all configured projects use

```bash
$ npm run test-all-browsers
```

The tests will run in the command line with these npm scripts, or the [Playwright cli runner](https://playwright.dev/docs/running-tests#running-tests) can be invoked accordingly.

If using VS Code, the tests can also be run with the Playwright extension mentioned above.

### Code cleanliness & Linting
Use
```bash
$ npm run format-all
```
to run Biome against all files (this could be improved later).