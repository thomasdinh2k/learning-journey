#CSS 

## The float Property
The `float` property is used for positioning and formatting content e.g. let an image float left to the text in a container.

The `float` property can have one of the following values:

- `left` - The element floats to the left of its container
- `right` - The element floats to the right of its container
- `none` - The element does not float (will be displayed just where it occurs in the text). This is default
- `inherit` - The element inherits the float value of its parent

In its simplest use, the `float` property can be used to wrap text around images.
![[Pasted image 20230929100959.png]]

# Input - Dom
## onBlur()

`onBlur` is used to specify what to do when user exit that input box ^4b654f
```js
<input
              type="text"
              placeholder="About Samsung Galaxy Fold 5"
              style={{display: "inline-block", height: "25px", maxWidth:"250px", fontWeight: "bolder"}}
              onBlur={ ( ) => setShowInput(!showInput)}
              
            ></input>
```
