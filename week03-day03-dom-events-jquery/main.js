console.log('in main.js') ;

var newCssClassName = 'minor';
var svgElement = document.getElementById('home-button.icon');


// 1. Using setAttribute(), and maintaining existing class names
var svgElementClassAttribute = svgElement.getAttribute('class');
svgElementClassAttribute += ' ' + newCssClassName;
svgElement.setAttribute('class', svgElementClassAttribute);

// 2. Using className, and maintaining existing class names
svgElement.className += ' ' + newCssClassName;

// 3. Using classList.add()
svgElement.classList.add(newCssClassName);



$(function (){
  console.log('DOM loaded (jQuery)');
  console.log('--- using jQuery');

  //var listContainer = document.getElementById('item-list') ; // Normal DOM
  var listContainer1 = document.getElementById('item-list') ;  //using jQuery
  // it's useful to have convention of namiing the result of jQuery
  // call with a '$' prefix (as below).
  // That way, it is immedialely
  var $listContainer2 = $('#item-list') ;  //using jQuery
  //var listItem = $('li');
  var listItem = $('#item-list li');

  console.log('listContainer1 (document.getElementById:)', listContainer1);
  console.log('listContainer2 (jQuery)', $listContainer2);

  console.log('listItem (jQuery):', listItem);

  var newListItem1 = $('<li>new item prepended by jQuery</li>').addClass( 'dull' );
  var newListItem2 = $('<li>new item appended by jQuery</li>').addClass( 'garish' );
  $listContainer2.prepend(newListItem1);
  $listContainer2.append(newListItem2);

// Now let's add the 'emphasised' CSS class to all the <li> elements

  // var listItems2 = document.getElementsByTagName('li');
  // for (var i = 0; i < listItems2.length; i++){
  //   listItems2[i].classList.add('emphasised');
  // }

// And with jQuery , it's a lot more simple:
  $listContainer2.children().addClass('emphasised');

// now to add a click handler to the buttom
  $('#pickMeBtn').on('click', function(){
    console.log('jQuery .on("click") handler');
  });
  //and this works too:
  $('#pickMeBtn').click(function(){
    console.log('jQuery .click handler');

  });

});


//console.log(document) ;
document.addEventListener('DOMContentLoaded', function (){
  console.log('DOM loaded (with DOMContentLoaded event )');
  console.log(document);

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

  //var pickMeButton = document.getElementById('pickMeBtn') ;

  // function handdleButtonClick() {
  //   alert('Picked!');
  //   pickMeButton.innerHTML = 'You have clicked this buttom';
  //   pickMeButton.style.color = 'White';
  //   pickMeButton.style.backgroundColor = 'Green';
  // }
  //
  // pickMeButton.addEventListener('click', handdleButtonClick);

});
