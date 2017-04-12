# Yoga
Yoga is a flexbox Sass grid library. Yoga is designed to be simple custom grid
solution for modern web layouts. The library does not include any browser
prefixed CSS by default.

## Installation
With [NPM](https://www.npmjs.com/package/@azinasili/yoga):

```bash
npm install @azinasili/yoga --save
```

Install Yoga with [Bower](http://bower.io) package manager:

```bash
bower install yoga --save
```

Import Yoga into your stylesheet:

```scss
@import "path/to/yoga/yoga";
```

It’s not recommended to add or modify files so that you can update them easily.

### API
Yoga can be used to create basic bootstrap style grids using `@include yoga-container`,
`@include yoga-row`, and `@include yoga-columns` mixins. Yoga also includes mixins
for individual flexbox properties to create your own custom and semantic layouts.
Yoga includes [SassDoc](https://github.com/SassDoc/sassdoc) to document function
and mixin uses. Open the `HTML` document in your browser to read about all of
Yoga's APIs.

## Bugs
Flexbox currently has some weird cross bowers bugs. A list of common bugs can be
found at [flexbugs](https://github.com/philipwalton/flexbugs) repo. If there is an
issue with Yoga please open an issue with steps to recreate the bug.

## License
The MIT License (MIT)

Copyright (c) 2014 Azin Asili

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
