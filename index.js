const itemOne = document.getElementById('item1');
const itemTwo = document.getElementById('item2');
const itemThree = document.getElementById('item3');
const bookSection = document.getElementById('book-section');
const addSection = document.getElementById('add-section');
const contactSection = document.getElementById('contact-section');

// when link is clicked the rest of the sections are hidden using the class

itemOne.addEventListener('click', () => {
  bookSection.classList.remove('hidden');
  addSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});

itemTwo.addEventListener('click', () => {
  addSection.classList.remove('hidden');
  bookSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});

itemThree.addEventListener('click', () => {
  contactSection.classList.remove('hidden');
  bookSection.classList.add('hidden');
  addSection.classList.add('hidden');
});
