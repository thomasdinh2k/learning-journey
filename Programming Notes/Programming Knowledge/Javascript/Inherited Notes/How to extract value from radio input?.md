> Instead of searching by class, this time let's search by Name

***
```html
<input type="radio" name="color" value="red"> Red
<input type="radio" name="color" value="green"> Green
<input type="radio" name="color" value="blue"> Blue
```
```js
let radioInputExtractor = document.getElementByName("color").value;
```
> **Tip:** Define ==different values== for radio buttons in the same group, to identify (on the server side) which one was checked.