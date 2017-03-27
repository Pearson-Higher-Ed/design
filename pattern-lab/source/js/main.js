const openBtn = document.getElementById('openMainMenu'),
    barsIcon = document.getElementById('bars'),
    barsIconInMenu = document.getElementById('barsInMenu'),
    sidebar = document.getElementById('sidebar'),
    content = document.getElementById('content'),
    overlay = document.getElementById('overlay'),
    firstNavItem = document.getElementById('openMainMenu2'),
    lastNavButton = document.querySelector('#dropdownNav > li:last-child button'),
    lastListItem = document.querySelector('#dropdownNav li:last-child li:last-child a'),
    lastFirstItem =  document.querySelector('#dropdownNav > li:last-child li:first-child a');

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

function reverseFocus (obj, shiftPressed, callback) {
    obj.onkeydown = (event) => {
        if (event.shiftKey === shiftPressed && sidebar.classList.contains('open')) {
            event.preventDefault();
            if (event.key === 'Tab') {
                callback();
            }
        }
    };
}


firstNavItem.onkeydown = (event) => {
    if (event.shiftKey === true && sidebar.classList.contains('open')) {
        event.preventDefault();
        if (event.key === 'Tab') {
            if (lastNavButton.getAttribute('aria-expanded') === 'false') {
                lastNavButton.focus();
            } else if (lastNavButton.getAttribute('aria-expanded') === 'true') {
                lastListItem.focus();
            }
        }
    }

};


lastNavButton.onkeydown = (event) => {
    if (event.shiftKey === false && sidebar.classList.contains('open')) {
        event.preventDefault();

        if (event.key === 'Tab') {
            if (lastNavButton.getAttribute('aria-expanded') === 'false') {
                firstNavItem.focus();
            } else if (lastNavButton.getAttribute('aria-expanded') === 'true') {
                lastFirstItem.focus();
            }
        }
        if (event.keyCode == 32) {
            console.log(event.keyCode);
            lastNavButton.click();
        }
    }
};


lastListItem.onkeydown = (event) => {
    if (event.shiftKey === false && sidebar.classList.contains('open')) {
        event.preventDefault();
        if (event.key === 'Tab') {
            firstNavItem.focus();
        }
    }
};


// close the menu when escape is pressed
window.onkeydown = (event) => {
    if (event.key === "Escape" || event.key === 'Esc') {
        if (sidebar.classList.contains('open')) {
            closeMenu();
        }
    }
};


//keyboard toggle aria expanded attributes
sidebar.addEventListener('blur', (event) => {
    toggleDataFocus(event);
}, true);


// keyboard toggle aria expanded attributes
sidebar.addEventListener('focus', (event) => {
toggleDataFocus(event);
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
        }, 100);
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