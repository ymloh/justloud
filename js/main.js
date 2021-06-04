const sectionLoader = (evt) => {
  const navitems = document.getElementsByClassName('navitem');
  const sections = document.getElementsByTagName('section');

  for (let x of navitems)
    x.classList.remove("active");

  for (let x of sections)
    x.classList.remove("display");

  const id = `navitem-${location.hash.substr(1)}`;
  const section_id = `section-${location.hash.substr(1)}`;

  document.getElementById(id).classList.add('active');

  document.getElementById(section_id).classList.add('display');
  console.log(`section_id: ${section_id}`);
};


window.addEventListener("load", sectionLoader);

window.addEventListener("hashchange", sectionLoader);