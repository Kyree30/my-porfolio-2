const sections = document.querySelectorAll('.sections');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content'); // Changed querySelectorAll to querySelector

function PageTransitions() {
  // Active btn class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function() {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].classList.remove('active-btn');
      this.classList.add('active-btn');
    });
  }

  // Section Active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    // remove selected from the other btns
    sectBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // hide other sections
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    const element = document.getElementById(id);
    if (element) {
      element.classList.add("active");
    }
  });

  // Call other functions or perform additional tasks
}

PageTransitions();
