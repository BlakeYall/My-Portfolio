/* eslint-disable linebreak-style */
const tablinks = document.getElementSByClassName('tab-links');
const tabcontents = document.getElementSByClassName('tab-contents');
// eslint-disable-next-line linebreak-style

// eslint-disable-next-line no-unused-vars, linebreak-style
function openTab(tabname) {
  // eslint-disable-next-line no-restricted-syntax, no-const-assign, linebreak-style
  for (tablinks of tablinks) {
    // eslint-disable-next-line linebreak-style
    tablinks.classlist.remove('active-link');
  }
  // eslint-disable-next-line no-trailing-spaces
  
  // eslint-disable-next-line no-restricted-syntax, no-const-assign
  for (tabcontents of tabcontents) {
    tabcontents.classlist.remove('active-tab');
  }
  // eslint-disable-next-line no-trailing-spaces
  
  // eslint-disable-next-line no-restricted-globals
  event.currentTarget.classlist.add('active-link');
  document.getElementById.classlist.Add('active-tab');
}
