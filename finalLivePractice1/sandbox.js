/*
	Add code to do the following:

	1. When you click on an `li` it selects it.
  2. If the `li` is already selected, it unselects it.
  3. After each click, update the total count of selected `li`s in the H1.
*/
document.addEventListener('DOMContentLoaded', function (){
  // create an alias for li
  const li = document.querySelectorAll('li')
  const ul = document.querySelector('ul')
  const theSpan = document.querySelector('span')
  var theSpanText = theSpan.innerText
  console.log(ul)
  console.log(typeof(theSpanText))
  // create a eventlistener that on click highlights selected item and adds a class of selected 
  var highlighter = function highlight (val) {
    var target = val.target
    console.log(target)
    if (target.className === 'selected'){
      target.style.color = 'black'

    } else {
      target.style.color = 'blue'
      target.className = 'selected'
    }
  }
  ul.addEventListener('click', highlighter)
})
