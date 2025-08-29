


### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

## Answer1

- getElemmentById  returns a single Element object. It's give us to a array like object.
- getElementsByClassName Selects all elements that have a specific class name.Returns a live HTMLCollection.
- querySelector selects the first element that matches a specified CSS selector.
- querySelectorAll selects all elements that match a specified CSS selector. Returns a static NodeList

## Answer2
- Use the document.createElement() method, passing the tag name of the element you want to create as a string argument.
- For example from my own code :
- 
    const contactPart = document.createElement("div");
    contactPart.classList.add("contactPart");

    const contactName = document.createElement("h1");
    contactName.classList.add("font-semibold");
    contactName.textContent = callName;

    contactPart.appendChild(contactName);

    ## Answer3

    - Event bubbling directs an event to its target. It works like this:
    - When an element (like a button) is clicked, an event is directed to the element.
    - If an event handler is set for the element, the event handler is triggered.
    - Then the event "bubbles up" to the elements parent.
    - If an event handler is set for the parent, this event handler is triggered.
  

     ## Answer4
    - Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

      ## Answer5

      ### preventDefault():
      - This method is used to prevent the default action associated with an event from occurring.
  
      ### stopPropagation():
      - This method is used to prevent the propagation (or "bubbling") of an event up or down the DOM tree.


- 📂 **GitHub Repository** : <https://github.com/sodium000/Emergency-Hotline>
- 🌐 **Live Link** :<https://sodium000.github.io/Emergency-Hotline/>

---

# Let's Code and Achieve your Dream 🎯
