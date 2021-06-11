// JS | 1:21:00
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item | 1:23:00
function selectItem(e) {
   // Remove all show and border classes | 1:24:38 | 1:28:14
   removeBorder();
   removeShow();
   // Add border to current tab item | 1:23:24
   this.classList.add('tab-border');
   // Grab content item from DOM | 1:28:00
   const tabContentItem = document.querySelector(`#${this.id}-content`);
   // Add show class | 1:30:04
   tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items | 1:24:45
function removeBorder() {
   tabItems.forEach(item => {
      item.classList.remove('tab-border');
   });
}

// Remove show class from all content items | 1:27:57
function removeShow() {
   tabContentItems.forEach(item => {
      item.classList.remove('show');
   });
}

// Listen for tab item click | 1:22:24
tabItems.forEach(item => {
   item.addEventListener('click', selectItem);
});