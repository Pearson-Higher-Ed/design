// Uses the native CustomEvent constructor that no version of IE supports (MS Edge does!).
// See usage of polyfill-customevent.js to work in IE.

document.addEventListener('DOMContentLoaded', function() {

  var element = document.querySelector('.demo-container');
  var config = {
    session: 'session',
		user: { givenName: 'XXXXXXXXXXXXXXXX' },
		mode: 'Basic',
		onLogin: function () {
			alert('You signed in');
		},
		onLogout: function () {
			alert('You signed out');}
  };

  document.dispatchEvent(new CustomEvent('o.DOMContentLoaded', {
    detail: {
      element: element,
      config: config
    }
  }));

  setTimeout(function() {

    config.user = { givenName: 'Bender' };

    document.dispatchEvent(new CustomEvent('o.DOMContentLoaded', {
      detail: {
        element: element,
        config: config
      }
    }));
  }, 2000);



	// Event Listeners

  // Help menu
	document.addEventListener('oAppHeader.help.toggle', function () {
		alert('You toggled help');
		console.log('oAppHeader.help.toggle');
	});

  // Sign out event
  document.addEventListener('oAppHeader.logout', function () {
		console.log('oAppHeader.logout');
	});

});
