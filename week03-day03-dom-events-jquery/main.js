console.log('in main.js') ;

//console.log(document) ;
document.addEventListener('DOMContentLoaded', function (){


  console.log('--- using querySelectorAll');

  var selectedListItems = document.querySelectorAll('.selected');

  console.log('selected:', selectedListItems);

  for (var i = 0; i < selectedListItems.length; i++) {
    console.log('select the list item style', selectedListItems[i].style);
    selectedListItems[i].style.color = 'red';
  }

  console.log('--- Create list item style');
  var newListItem = document.createElement('li') ;

  newListItem.innerHTML = 'in new York';
  newListItem.setAttribute('class', 'muted');

// we are going to call .appendChild on the parent <ul> element.
// That <ul> Element has an id attribute

// so we retrive the DOM element that contains the list item,
// because we want to call .appendChild() on it.
// NOTE: wo do NOT pass a CSS selector ('#item-list') to the
// .getElementById() method.

  var listContainer = document.getElementById('item-list') ;

  listContainer.appendChild(newListItem) ;

// TODO:
// - update the above code to add the "selected" CSS class to newListItem
// - what do you notice?

//newListItem.setAttribute('class', 'setBlueColor');
//newListItem.style.color = 'blue';

  console.log('--- DOM events') ;

  var pickMeButton = document.getElementById('pickMeBtn') ;

  function handdleButtonClick() {
    alert('Picked!');
    pickMeButton.innerHTML = 'You have clicked this buttom';
    pickMeButton.style.color = 'White';
    pickMeButton.style.backgroundColor = 'Green';
  }

  pickMeButton.addEventListener('click', handdleButtonClick);

});
