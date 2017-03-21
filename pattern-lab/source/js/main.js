const openBtn = document.getElementById('openMainMenu'),
      barsIcon = document.getElementById('bars'),
      sidebar = document.getElementById('sidebar'),
      content = document.getElementById('content'),
      overlay = document.getElementById('overlay'),
      firstNavItem = document.getElementById('About'),
      lastNavButton = document.querySelector('#dropdownNav li:last-child button'),
      lastListItem = document.querySelector('#dropdownNav li:last-child button + div ul li:last-child a'),
      anchor = document.querySelectorAll('#sidebar a'),
      buttons = document.querySelectorAll('#sidebar button'),
      navLinks = [];

let   timer = 0,
      counter = 0;


// return item from loop
function loopElements (element, callback) {
   return element.forEach(function(item){
        callback(item);
    })
}

function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('overlay');
    setTimeout(function(){
        sidebar.classList.add('js-hide');
        openBtn.focus();
    }, 500)
}

function focusTarget() {
    "use strict";

}

loopElements(anchor, function(a) {
    return navLinks.push(a);
});

loopElements(buttons, function(button) {
    return navLinks.push(button);
});

// Loops focus of navigation items
loopElements(navLinks, function(item){
    item.onfocus = function(event){
        const target = event.target;
        if (target.getAttribute('data-focused') === 'false') {
            target.setAttribute('data-focused', 'true');
        } else if (target.getAttribute('data-focused') === 'true') {
            target.setAttribute('data-focused', 'false');
        }
    };
    item.onblur = function(event) {
        const target = event.target;
        if (target.getAttribute('data-focused') === 'false') {
            target.setAttribute('data-focused', 'true');
        } else if (target.getAttribute('data-focused') === 'true') {
            target.setAttribute('data-focused', 'false');
        }

        if (sidebar.classList.contains('open')) {
            if (target === lastNavButton && target.getAttribute('aria-expanded') === 'false') {
                firstNavItem.focus();
            } else if (target === lastListItem && lastNavButton.getAttribute('aria-expanded') === 'true') {
                firstNavItem.focus();
            }
        }

    }
});


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


document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.key === 'Escape' || evt.key === 'Esc') {
        if (sidebar.classList.contains('open')) {
            closeMenu();
        } else {
            return
        }
    }
};


