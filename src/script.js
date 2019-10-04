// Arrays of data
const navLinks = [
  {
    title: 'Home',
    active: true,
  },
  {
    title: 'About us',
    active: false,
  },
  {
    title: 'Servises',
    active: false,
  },
  {
    title: 'Events',
    active: false,
  },
  {
    title: 'Gallery',
    active: false,
  },
  {
    title: 'Contacts',
    active: false,
  },
];



// Render a navigation list
const navList = document.getElementById('navList');

navList.innerHTML=`
  ${navLinks.map(link => (
    `<li class="${link.active ? '_active' : ''}">
      <a>${link.title}<a/>
    </li>`
  ))}
`.replace(/,/g, '');



// Toggle of navigation visibility in small screens
let smMenuIsVisible = true;

const toggleSmMenuVisibility = () => {
  smMenuIsVisible = !smMenuIsVisible;

  if (smMenuIsVisible) {
    navList.classList.remove('_hidden');
  } else {
    navList.classList.add('_hidden');
  };
};

if (window.innerWidth <= 960) {
  toggleSmMenuVisibility();
};

window.addEventListener('resize', () => {
  if(window.innerWidth > 960) {
    navList.classList.remove('_hidden');
  };

  if (window.innerWidth <= 960) {
    navList.classList.add('_hidden');
    smMenuIsVisible = false;
  };
});