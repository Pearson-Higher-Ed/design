# Integrating o-app-header

This document is designed to help you get o-app-header working in your application.

### Core Concept

The idea is to initialize App Header in a way that allows it to work for users, even if you are not aware of user session state, or application state, and then change things as you become aware of those states.  The App Header is an active widget;  it's meant to be changed and upgraded alongside the user experience of your app.  The techniques that follow work off of this core concept, and are effective regardless of when you initialize piSession.ja and/or the AppHeader.

## Initializing the Component

It is recommended that you store the oAppHeader instance after initialization so that you may interact with it later.  To achieve this, it is further recommended that you avoid automatic initialization of oAppHeader.

**Note:** AppHeader() **DOES** inject DOM elements and must therefore be called after DOMReady.  In auto-init scenarios, this will happen with the event 'O.DOMContentLoaded', an abstraction of the events fired for 'window.onload' in major browsers.

```js
var AppHeader = require('o-app-header');
var appHeader = new AppHeader();

// this assignment adds the instance to the DOM, non-globally, so that it can later be retrieved and manipulated.
// header.o-app-header will exist after O.DOMContentLoaded has fired.
document.querySelector('header.o-app-header').oAppHeader = appHeader;
```

Once you have a stored reference to the oAppHeader instance, retrieving it is trivial.

```js
var appHeader = document.querySelector('header.o-app-header').oAppHeader;
```

## Interacting With the Component

Since the header may initialize before you know who your user is, whether or not they are logged in, or even before you know that piSession.js is loaded and initialized, it is recommended that you start oAppHeader in "Signed Out" mode with the login controls turned off.

```js
var appHeader = document.querySelector('header.o-app-header').oAppHeader;
appHeader.setMode('Signed Out', {showLoginControls: false});
```

Once you have established user identity data and that the user is in fact logged in, "Basic" is the mode most applications will use to present the standard header.

```js
var appHeader = document.querySelector('header.o-app-header').oAppHeader;
appHeader.setMode('Basic', {
  user: {
    givenName: 'UserFirstname'
  }
});
```

**Note:** setMode() may be called at any time once oAppHeader is initialized.  This is useful for switching the display of the header to respond to auth events, and changes to user profile data in the event they change their given name in the application.

O-app-header is completely de-coupled from piSession.js, and expects data to be passed into it for correct rendering.  This was done to ensure that developers can integrate the header without having to first use a specific integration of piSession.js.  Auth, session management, and user-profile handling are left entirely to the integrating application, and the data is simply passed to the header as options.
