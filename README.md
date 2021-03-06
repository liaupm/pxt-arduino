# Blockly (Microsoft MakeCode fork)

This is a fork of [Blockly](https://github.com/google/blockly/), an open source visual programming environment.
The fork is maintained by the Microsoft MakeCode team, and is used to power the blocks environment in [PXT](https://github.com/Microsoft/pxt).

This concrete version has an implementation of an arduino code generator. The changes are visible in /generators/arduino and /generators/arduino/
This is a WIP, many files are added manually and this is not a final implementation. This repo is used mainly for testing and control version.


Major additions and changes in this fork:
* [scratch-blocks](https://github.com/llk/scratch-blocks) rendering of the blocks [block_render_svg.js](https://github.com/Microsoft/pxt-blockly/blob/develop/core/block_render_svg.js)
* Using insertion markers instead of dragged connections [insertion_marker_manager.js](https://github.com/Microsoft/pxt-blockly/blob/develop/core/insertion_marker_manager.js)
* Inverted and coloured toolbox modes [toolbox.js](https://github.com/Microsoft/pxt-blockly/blob/develop/core/toolbox.js#L428) 
* Supports disabled categories [toolbox.js](https://github.com/Microsoft/pxt-blockly/blob/develop/core/toolbox.js#L360)
* Supports icons in the toolbox
* Adds a number slider field [field_slider.js](https://github.com/Microsoft/pxt-blockly/blob/develop/core/field_slider.js)
* Zoom in / out with touch gestures [touch_gesture.js](https://github.com/Microsoft/pxt-blockly/blob/develop/core/touch_gesture.js)
* Workspace comments that appear like sticky notes [workspace_comment.js](https://github.com/Microsoft/pxt-blockly/blob/develop/core/workspace_comment.js)
* A number of Edge & IE fixes
* Support underlining and icons in flyout labels [flyout_button.js](https://github.com/Microsoft/pxt-blockly/blob/develop/core/flyout_button.js#L203)

## Prerequisites

* node, npm
* python

## Development

```
git clone https://github.com/google/closure-library
cd closure-library
git checkout v20180805
cd ../
git clone https://github.com/Microsoft/pxt-blockly
cd pxt-blockly
npm install .
```

## Building

* `gulp build` to build blockly (install ``gulp`` if needed ``npm install -g gulp``)

## Integrating in PXT

* `gulp publish` from the ``develop`` branch.

**Make sure you've checked out the correct closure-library (see above)**

See [more tips about **pxt+pxt-blockly** testing](https://github.com/Microsoft/pxt/tree/master/scripts).

## Playground

There is a playground manual testing page at [tests/playground.html](./tests/playground.html), which requires no build step or server running.

`open tests/playground.html`

## License

The original Google/Blockly is licensed under Apache License (Version 2.0).

New code is licensed under MIT.
