const sectionLoader = evt => {
  const navitems = document.getElementsByClassName('navitem');
  const sections = document.getElementsByTagName('section');

  for (let x of navitems)
    x.classList.remove("active");

  for (let x of sections)
    x.classList.remove("display");

  const id = `navitem-${location.hash.substr(1)}`;
  const section_id = `section-${location.hash.substr(1)}`;

  for (let elem of document.getElementsByClassName(id))
    elem.classList.add('active');

  document.getElementById(section_id).classList.add('display');
  // console.log(`section_id: ${section_id}`);
};

const hamburgerClick = () => {
  document.querySelector('.hamburger').addEventListener('click', evt => {
    const navVert = document.querySelector('.navlist-vert');
    const isShowing = navVert.classList.contains('show');
    isShowing ? navVert.classList.remove('show') : navVert.classList.add('show');
  });
};

const hamburgerMenuItemClick = () => {
  const navlist_vert = document.querySelector('.navlist-vert');
  for (let elem of document.querySelectorAll('.hamburger-nav a'))
    elem.addEventListener('click', () => navlist_vert.classList.remove('show'));
}

window.addEventListener("load", sectionLoader);
window.addEventListener("load", hamburgerClick);
window.addEventListener("load", hamburgerMenuItemClick);

window.addEventListener("hashchange", sectionLoader);