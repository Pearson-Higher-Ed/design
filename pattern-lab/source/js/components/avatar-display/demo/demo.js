import AvatarDisplay from '../main'; // to demo direct API usage

// When available on npm, consumer usage would be similar to:
// import avatarDisplay from '@pearson-components/avatar-display'

function init() {

  // Demo eventing API
  document.body.dispatchEvent(new CustomEvent('o.InitAvatarDisplay', {
    detail: {
      elementId: 'demo-target1',
      avatarURLText: 'http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
      avatarAltText: 'Small Avatar Image',
      avatarSize: 'small'
    }
  }));

  // Demo direct API
  new AvatarDisplay({
    elementId: 'demo-target2',
    avatarAltText: 'Large Avatar Image',
    avatarSize: 'large'
  });

}

window.onload = init;
