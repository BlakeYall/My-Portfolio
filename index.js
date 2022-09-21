const tablinks = document.getElementSByClassName('tab-links');
const tabcontents = document.getElementSByClassName('tab-contents');

function opentab(tabname) {
 
  for(tablink of tablinks) {
    tablink.classlist.remove('active-link');
  }
  
  for(tabcontent of tabcontents) {
    tabcontent.classlist.remove('active-tab');
  }
  
  event.currentTarget.classlist.add('active-link');
  document.getElementById.classlist.Add('active-tab');
}
