const openBtn = document.getElementById('openMainMenu'),
    barsIcon = document.getElementById('bars'),
    barsIconInMenu = document.getElementById('barsInMenu'),
    sidebar = document.getElementById('sidebar'),
    content = document.getElementById('content'),
    overlay = document.getElementById('overlay'),
    firstNavItem = document.getElementById('openMainMenu2'),
    lastNavButton = document.querySelector('#dropdownNav li:last-child button'),
    lastListItem = document.querySelector('#dropdownNav li:last-child button + div ul li:last-child a'),
    secondLastListItem = document.getElementById("three");

let timer = 0,
    counter = 0;


// helper that closes the menu
function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('overlay');
    setTimeout(() => {
        sidebar.classList.add('js-hide');
        openBtn.focus();
    }, 500)
}


// helper that toggles the data-focus attribute
function toggleDataFocus(event) {
    const target = event.target;
    if (target.getAttribute('data-focused') === 'false') {
        target.setAttribute('data-focused', 'true');
    } else if (target.getAttribute('data-focused') === 'true') {
        target.setAttribute('data-focused', 'false');
    }
}


// close the menu when escape is pressed
window.onkeydown = (event) => {
    if (event.key === "Escape" || event.key === 'Esc') {
        if (sidebar.classList.contains('open')) {
            closeMenu();
        }
    }
};


// keyboard focus and blur
// cycle through menu
sidebar.addEventListener('focus', (event) => {
    toggleDataFocus(event);
    firstNavItem.onkeydown = (event) => {
        const ariaExpanded = lastNavButton.getAttribute('aria-expanded'),
            shiftKey = event.shiftKey,
            keyPress = event.key;

        if (ariaExpanded === 'false' && shiftKey === true && keyPress === "Tab") {
            setTimeout(() => {
                lastNavButton.focus();
            }, 10)
        } else if (ariaExpanded === 'true' && shiftKey === true && keyPress === "Tab") {
            setTimeout(() => {
                lastListItem.focus();
            }, 10)
        }
    };

    lastNavButton.onkeydown = (event) => {
        const ariaExpanded = event.target.getAttribute('aria-expanded'),
            shiftKey = event.shiftKey,
            keyPress = event.key;

        if (ariaExpanded === 'false' && shiftKey === true && keyPress === "Tab") {
            setTimeout(() => {
                document.getElementById("Compounds").focus();
            }, 10)
        }
    };

    lastListItem.onkeydown = (event) => {
        const shiftKey = event.shiftKey,
            keyPress = event.key;

        if (shiftKey === true && keyPress === "Tab") {
            setTimeout(() => {
                document.getElementById("three").focus();
            }, 10)
        }

    }

}, true);


// keyboard toggle aria expanded attributes
sidebar.addEventListener('blur', (event) => {
    const target = event.target,
        sidebarOpen = sidebar.classList.contains('open');

    toggleDataFocus(event);
    if (sidebarOpen === true) {
        if (target === lastNavButton && target.getAttribute('aria-expanded') === 'false') {
            firstNavItem.focus();
        } else if (lastNavButton.getAttribute('aria-expanded') === 'true' && target === lastListItem) {
            firstNavItem.focus();
        }
    }
}, true);


// opens the menu and sets focus to first item.
// when the overlay is clicked, close the menu and set focus to button.
content.addEventListener('click', event => {
    if (event.target === barsIcon || event.target === openBtn) {
        sidebar.classList.remove('js-hide');
        setTimeout(() => {
            sidebar.classList.add('open');
            overlay.classList.add('overlay');
            firstNavItem.focus();
        }, 10);
        firstNavItem.focus();

    } else if (sidebar.classList.contains('open')) {
        closeMenu();
    }
});


// toggles aria expanded attributes when item is clicked.
// closes the menu when bars are clicked.
sidebar.addEventListener('click', event => {
    const ariaExpanded = event.target.getAttribute('aria-expanded');
    if (ariaExpanded === 'false') {
        event.target.setAttribute('aria-expanded', 'true');
    } else if (ariaExpanded === 'true') {
        event.target.setAttribute('aria-expanded', 'false');
    } else if (event.target === firstNavItem || event.target === barsIconInMenu) {
        closeMenu();
    }

});


// changes the menu icon color at a certain scroll position
content.addEventListener('scroll', event => {
    if (timer) {
        window.clearTimeout(timer);
    }
    timer = window.setTimeout(() => {
        const position = event.target.scrollTop;
        if (position >= 331) {
            barsIcon.classList.add('primary');
        } else {
            barsIcon.classList.remove('primary');
        }
    }, 20);
});




