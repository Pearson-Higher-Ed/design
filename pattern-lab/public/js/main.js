const openBtn = document.getElementById('openMainMenu'),
      barsIcon = document.getElementById('bars'),
      sidebar = document.getElementById('sidebar'),
      content = document.getElementById('content'),
      overlay = document.getElementById('overlay');

let   timer = 0,
      counter = 0;

// helper function to cycle through list items
function cycleElements(element, callback) {
    return element.forEach(item => {
        callback(item);
    })
}

// toggles the menu
content.addEventListener('click', event => {
    if (event.target === barsIcon || event.target === openBtn) {
        sidebar.classList.add('open');
        overlay.classList.add('overlay');
    } else if (event.target !== barsIcon || event.target !== openBtn) {
        sidebar.classList.remove('open');
        overlay.classList.remove('overlay');
    }
});

// toggles submenu items
sidebar.addEventListener('click', event => {
    const ariaExpanded = event.target.getAttribute('aria-expanded');

    if (ariaExpanded === 'false') {
        event.target.setAttribute('aria-expanded', 'true');
    } else if (ariaExpanded === 'true') {
        event.target.setAttribute('aria-expanded', 'false');
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

// accessibility - keyup and keydown cycling.
window.addEventListener("keydown", function (event) {
    const focusedElement = document.activeElement;

    if (event.defaultPrevented) {
        return;
    }
    switch (event.key) {
        case "ArrowDown":
            console.log('arrow-down');
            break;

        case "ArrowUp":
            console.log('arrow-up');
            // Do something for "up arrow" key press.

            break;
        default:
            return;
    }
    event.preventDefault();
}, true);




