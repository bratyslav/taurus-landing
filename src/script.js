// Arrays of data
const networkItems = [
  'facebook',
  'instagram',
  'linkedin',
];
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
const technologiesList = [
  {
    name: 'angular',
    imageUrl: '../images/angular-2.png',
  },
  {
    name: 'jquery',
    imageUrl: '../images/jquery.png',
  },
  {
    name: 'react',
    imageUrl: '../images/react-1.png',
  },
  {
    name: 'nintex',
    imageUrl: '../images/nintex_alt.png',
  },
  {
    name: 'powerbi',
    imageUrl: '../images/powerBI_color_long-1.png',
  },
  {
    name: 'xamarin',
    imageUrl: '../images/xamarin_color.png',
  },
];
const featuresList = [
  '../images/img1-2.png',
  '../images/img2-1.png',
  '../images/img3-1.png',
  '../images/img4-1.png',
  '../images/img5-1.png',
  '../images/img6-1.png',
  '../images/img7-1.png',
  '../images/img8-1.png',
];



// Render a network links
const networks = document.getElementById('networks');

networks.innerHTML = `${
  networkItems.map(item => (`
    <a href="https://www.${item}.com/" title="www.${item}.com">
      <img class="logo" src="../images/${item}-app-symbol.svg" alt="${item} logo">
    </a>
  `))
}`.replace(/,/g, '');



// Render a navigation list
const navList = document.getElementById('navList');

navList.innerHTML=`${
  navLinks.map(link => (`
    <li class="${link.active ? '_active' : ''}">
      <a>${link.title}</a>
    </li>
  `))
}`.replace(/,/g, '');



// Render a technologies
const technologies = document.getElementById('technologies');

technologies.innerHTML = `${
  technologiesList.map(technology => (`
    <img src="${technology.imageUrl}">
  `))
}`.replace(/,/g, '');



// Render a features
const features = document.getElementById('features');

features.innerHTML = `${
  featuresList.map(feature => (`
    <img src="${feature}">
  `))
}`.replace(/,/g, '');



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