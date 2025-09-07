## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById : select one element by id
- getElementsByClassName: select all elements of classname
- querySelector: select 1st element of css selector
- querySelectorAll: select all element of css selector

## How do you create and insert a new element into the DOM?
- creation: document.createElement("tagName")
- insert: it can be done in many ways i show one as example  document.getElementById("existingElementID").append("newElementName)

## What is Event Bubbling and how does it work?

- 1st target element then it moves to it parent then grandparent so on like bubble

## What is Event Delegation in JavaScript? Why is it useful?
- add event listener to parent instead of add all of child so that event bubbling happend
## What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() : to stop reloading when form is used
- stopPropagation(): to stop event bubbling