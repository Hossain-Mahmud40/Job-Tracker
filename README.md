1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   --> getElementById : It select an only one element which has a specific ID.
   --> getElementsByClassName : It selects all the Elements which has same class. 
   --> querySelector : It selects the very first element with a id or class. we can use . or # to call a id or a class
   --> querySelectorAll: It select all the elements with a similar class or anyother css selector..

2. How do you create and insert a new element into the DOM?
  --> First we create a new element using the document.createElement('tagName') method.. then we add innertext or classes or html to in using appendChild()..

3. What is Event Bubbling? And how does it work?
  --> Event bybbling is a process where an event starts from the depest target element and goes up to its parent element one by one like a bubble goes to the sky.
4. What is Event Delegation in JavaScript? Why is it useful?
  --> it is a process where we add an event in the parent element. The parent element controll all the child buttons. so if we add any new button or dive we dont have to add the event again..
5. What is the difference between preventDefault() and stopPropagation() methods?
  --> reventDefault(): t stops the default behavior of an HTML element. For example, it prevents a form from refreshing the page when submitted, or stops a link from opening a new URL.
  --> stopPropagation(): It stops event bubbling. It prevents an event from going up and triggering the parent elements' events.
