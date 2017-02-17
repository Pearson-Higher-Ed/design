# drawer [![Build Status](https://travis-ci.org/Pearson-Higher-Ed/drawer.svg?branch=master)](https://travis-ci.org/Pearson-Higher-Ed/drawer) [![Coverage Status](https://coveralls.io/repos/Pearson-Higher-Ed/drawer/badge.svg?branch=master&service=github)](https://coveralls.io/github/Pearson-Higher-Ed/drawer?branch=master)

## Demo

	npm install
	npm run dev
	
Navigate to **localhost:8081/demo** in your favorite browser.

## Usage

Add `data-o-component="o-drawer"` to the target element to enable drawer. You can use a link with `href` or a button with `data-target` as the trigger:

```html
<a href="#drawer-example" data-toggle="o-drawer">Link trigger</a>
<button data-toggle="o-drawer" data-target="#drawer-example">Button trigger</button>

<div id="drawer-example" class="o-drawer-right o-drawer-animated" data-o-component="o-drawer">
  <button type="button" data-target="#drawer-example" data-close="o-drawer">
    <span class="pe-icon--times" aria-hidden="true"></span>
    <span class="pe-sr-only">close</span>
  </button>
  <p>Quisque in tortor finibus, dictum sem vel, convallis felis. Nunc ac mi in urna euismod eleifend in vitae augue. Suspendisse blandit feugiat vulputate. Praesent sit amet fringilla eros. Mauris nunc nisl, laoreet sit amet molestie vitae, sodales et diam.</p>
</div>
```

## Enabling using JavaScript

```js
new Drawer(document.querySelector('#myDrawer'));
```

You can use the static `init` method to initialize all drawer elements within a specified element:

```js
Drawer.init(document.body);
```

This module will also listen for the `o.InitAllDrawerElements` event; when fired, it will initialize all drawer elements on the page.

## API

### Constructor

`Drawer(element)`

Initializes a drawer element, where `element` is the target element and an instance of `HTMLElement`.

### Methods

`open()`

Expands the target element.

`close()`

Collapses the target element.

`toggle()`

Toggles the target element, depending on its current state.

### Events

| Event Name							 | Description																				 |
|--------------------------|-----------------------------------------------------|
| oDrawer.open						 | Fires immediately when the `open` method is called. |
| oDrawer.close						| Fires immediately when the `close` method is called. |

```js
document.querySelector('#myDrawer').addEventListener('oDrawer.open', function (e) {
	// Do something
});
```

## Accessibility

The Drawer treats keyboard focus similar to a modal dialog; when the Drawer is opened, focus is moved to the first focusable inside the Drawer (there should always be a closing button inside, ideally as the first element) and `aria-expanded` is set to true on the element which triggered the Drawer to open.

So long as the Drawer is open, focus is trapped inside and cycles until either the Drawer is closed by clicking an element with the matching  `data-close` attribute, or the ESC key is hit.

When the Drawer closes, if closed from within focus is brought back to the triggering element. Otherwise, focus is left on whichever other element was clicked. In both cases, `aria-expanded` is set back to false on the triggering element.

## Browser support

Tested and working on:

|	Browser	 | Versions									|
|:----------:|:----------------------:|
|	 Chrome	 |	 36+								  	 |
|	 Firefox	|	 30+									 |
|	 IE			 |	 11+								 |
|	 Edge			 |	 13.10586 							 |
|	 Safari			 |	 9 								 |


## Contributions

Please review the [guidelines](https://github.com/Pearson-Higher-Ed/docs/blob/master/origami-contributions.md) for contributing before getting started.

## License

This software is published by Pearson Education under the [MIT license](LICENSE).
