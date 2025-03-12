# My thoughts on my work
Overall I have tried to demonstrate a comfort and eagerness to apply my decade of test experience to the use of a framework like Playwright, in order to achieve appropriate coverage and reliable automated testing. I hope I have been able to show that I understand not only the test technology specifically, but also the nature of the role in general as well as the shape of the team as a whole. 

## Wishlist 
If I gave myself more time, this could be improved in several ways. The below is not exhaustive but intended to show an understanding and appreciation of quality assurance within the SDLC beyond what I have committed here. 

### Specs
I would certainly expand the test specs to cover a few more use cases and scenarios:

#### Scenario 1
With a better understanding of, or ideally control over the data available to search, I would like to craft some more sophisticated search terms and verify that items are returned. Localisation would be something to consider too, with other languages and alphabets covered.

#### Scenario 2
This spec caused me a couple of little issues with the scrolling and apt targeting of locators. With more time I would expand the coverage of the types of content on the timelines, as well as reducing the use of the more brittle locators.

#### Scenario 3
I would again like to have more time to cover more letters, and perhaps following the content links as part of a user journey. The component has potential to be rather large and so I would be curious to test the boundaries of how much is rendered, how navigation holds up with a larger payload etc

### Use fixtures
I have used a rather basic approach to the test files, which I would ideally improve by abstracting locators, strings etc to a page or fixtures file or files. This improves readability of the specs (given that gherkin was used to explain the scenarios it's not unreasonable that clear readability would be valued) as well as the 'DRY' reusability of test code.

### Enforce Linting 
Whilst I am happy to have Biome included, it is rather ineffectual as-is. I would seek to improve this with, for example, formatting on commit or push.

### Make it CI-ready
I would ensure the test suite plugged in seamlessly to CI/CD pipelines in order to provide that confidence and feedback loop for feature development.

### Reporting
I have not configured anything to do with reports, the out-of-the-box defaults will work but may be limited.


## Notes
One of Playwrights handy tools is a test generator, that provides recommended locators whilst navigating a given page.
These are often a good starting point, especially on an unfamiliar web app, and can hint at development improvements to reduce test brittleness and flakiness.

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