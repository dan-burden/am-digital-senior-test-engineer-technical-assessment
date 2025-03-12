# Code Test - AM Digital Senior Test Engineer
## Candidate [Dan Burden](mailto:dan.burden@proton.me) | [07890357402](tel:07890357402)

### Approach
This suite uses Playwright, as it is the simplest and quickest way to get a functional test suite up and running. It also provides ample scope for extension and augmentation. Aside from simply scaling end-to-end test coverage, the framework allows for the addition of API testing, or accessibility, etc as future needs dictate. I intend to roll with defaults as far as possible, as they work for most situations and reduce setup time - therefore Typescript is the language used for the test code. 

#### Language
Node.js and Typescript are used, as they match the current ecosystem and allow for seamless collaboration with engineers from other capabilities. While tests themselves are not deployed,user-facing production code, sharing a development ethos and ecosystem means that any engineer should be able to contribute to this test suite with ease.

#### Code standards
By using a linter and code formatter we can avoid running into code smells and flaky, hard to diagnose test issues. Setting this up from the start means we don't end up baking-in bad practice and immediately creating esoteric setups and technical debt.

[Biome](https://biomejs.dev/) was chosen for its simplicity, providing both formatting and linting and requiring zero configuration in order to be useful and effective. Whilst ESLint and Prettier are more widely used, and therefore have more plugin support for Playwright specifically, Biome is a compromise that saves time and sets the suite on the right track.

## Getting Started
### Prerequisites
#### Engine
This project runs on Node.js, targetting the most recent LTS release (v22.14.0) with npm 10.9.2 for package management. However, it should run on anything from v14.x.x upwards.
You can see your current node versions by using:
```bash
$ node -v && npm -v
```

It is recommended to use something like [Node version manager](https://github.com/nvm-sh/nvm) to switch versions on your local machine.

Containerised developement is out of scope for this project, but could be implemented later. 

### Installation
Once you have cloned the repo, from the root of the project run:
```bash
$ npm i
```

Playwright requires installation of browser binaries - this is a huge benefit of the framework, as these binaries are maintained 'for free' along with the version of Playwright installed.

```bash
$ npx playwright install
```

## Notes
One of Playwrights handy tools is a test generator, that provides recommended locators whilst navigating a given page.
These are often a good starting point, especially on an unfamiliar web app, and can hint at development imporvements to reduce test brittleness and flakiness.

For whatever reason the demo site doesn't seem to like the plugins used to generate these locators, and the following page-breaking error occurs multiple times when attempting to interact:
```err
frontend.bundle.js?v…V0yk7KNR4_XsGt5TM:2 Uncaught TypeError: Cannot read properties of null (reading 'removeChild')
    at Element.remove (frontend.bundle.js?v…R4_XsGt5TM:2:349524)
    at Highlight.clearHighlight (<anonymous>:3991:59)
    at Highlight._innerUpdateHighlight (<anonymous>:4010:10)
    at Highlight.updateHighlight (<anonymous>:3999:10)
    at Recorder._updateHighlight (eval at extend (demo.quartexcollections.com/:6082:40), <anonymous>:1132:20)
    at Recorder.updateHighlight (eval at extend (demo.quartexcollections.com/:6082:40), <anonymous>:1125:10)
    at RecordActionTool._updateModelForHoveredElement (eval at extend (demo.quartexcollections.com/:6082:40), <anonymous>:498:20)
    at RecordActionTool.onMouseMove (eval at extend (demo.quartexcollections.com/:6082:40), <anonymous>:300:10)
    at Recorder._onMouseMove (eval at extend (demo.quartexcollections.com/:6082:40), <anonymous>:1065:71)
    at HTMLDocument.eval (eval at extend (demo.quartexcollections.com/:6082:40), <anonymous>:918:68)
```

If you wish to reproduce, you can run
```bash
$ npx playwright codegen https://demo.quartexcollections.com/
```

and observe in the DevTools (CMD/CTRL + SHIFT + I) > Console. The error appears to be related to mouseOver events.