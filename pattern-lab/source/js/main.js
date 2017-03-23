const openBtn = document.getElementById('openMainMenu'),
      barsIcon = document.getElementById('bars'),
      barsIcon2 = document.getElementById('bars2'),
      sidebar = document.getElementById('sidebar'),
      content = document.getElementById('content'),
      overlay = document.getElementById('overlay'),
      firstNavItem = document.getElementById('openMainMenu2'),
      lastNavButton = document.querySelector('#dropdownNav li:last-child button'),
      lastListItem = document.querySelector('#dropdownNav li:last-child button + div ul li:last-child a'),
      anchor = document.querySelectorAll('#sidebar a'),
      buttons = document.querySelectorAll('#sidebar button'),
      navLinks = [];

let   timer = 0,
      counter = 0,
        poop = false;


// closes the menu
function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('overlay');
    setTimeout(function(){
        sidebar.classList.add('js-hide');
        openBtn.focus();
    }, 500)
}


// toggles the data-focus attribute
function toggleDataFocus(event) {
    const target = event.target;
    if (target.getAttribute('data-focused') === 'false') {
        target.setAttribute('data-focused', 'true');
    } else if (target.getAttribute('data-focused') === 'true') {
        target.setAttribute('data-focused', 'false');
    }
}


// close the menu when escape is pressed
window.onkeydown = function(event) {
    if (event.key === "Escape" || event.key === 'Esc'){
        if (sidebar.classList.contains('open')) {
            closeMenu();
        }
    }
};


// captures focus and toggles focus
sidebar.addEventListener('focus', function(event) {
    toggleDataFocus(event);

        firstNavItem.onkeydown = function(event) {
            if (event.shiftKey === true && event.key === "Tab") {
                setTimeout(function(){
                    lastNavButton.focus();
                }, 500)
            }
        };

}, true);


// captures blur and toggles blur
sidebar.addEventListener('blur', function(event) {
    const target = event.target;
    toggleDataFocus(event);
    if (sidebar.classList.contains('open') === true) {
        if (target === lastNavButton && target.getAttribute('aria-expanded') === 'false') {
            firstNavItem.focus();
        } else if (lastNavButton.getAttribute('aria-expanded') === 'true' && target === lastListItem) {
            firstNavItem.focus();
        }
    }
    firstNavItem.onkeydown = function(event) {
        if (event.shiftKey === true && event.key === "Tab") {
            setTimeout(function(){
                lastNavButton.focus();
            }, 500)
        }
    };


}, true);


// toggles the menu
content.addEventListener('click', event => {
    if (event.target === barsIcon || event.target === openBtn) {
        sidebar.classList.remove('js-hide');
        setTimeout(function(){
            sidebar.classList.add('open');
            overlay.classList.add('overlay');
            firstNavItem.focus();
        }, 100);

    } else if (sidebar.classList.contains('open')) {
        closeMenu();
    }
});


// toggles submenu items
sidebar.addEventListener('click', event => {
    const ariaExpanded = event.target.getAttribute('aria-expanded');
    if (ariaExpanded === 'false') {
        event.target.setAttribute('aria-expanded', 'true');
    } else if (ariaExpanded === 'true') {
        event.target.setAttribute('aria-expanded', 'false');
    } else if (event.target === firstNavItem || event.target === barsIcon2) {
        closeMenu();
    }

});



// changes the menu icon color at a certain scroll position
content.addEventListener('scroll', event => {
    if(timer) {
        window.clearTimeout(timer);
    }
    timer = window.setTimeout( ()=> {
        const position = event.target.scrollTop;
        if (position >= 331) {
            barsIcon.classList.add('primary');
        } else {
            barsIcon.classList.remove('primary');
        }
    }, 20);
});




