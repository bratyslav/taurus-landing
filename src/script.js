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

const navList = document.getElementById('navList');
navList.innerHTML=`
  ${navLinks.map(link => (
    `<li class="${link.active ? '_active' : ''}">
      <a>${link.title}<a/>
    </li>`
  ))}
`.replace(/,/g, '');