
The use of parentheses in JavaScript arrow functions depends on whether you're using them to return a *single expression* or *multiple statements*.

## Single Expression

```jsx
// Single expression, no need for parentheses or curly braces
const add = (a, b) => a + b;
```

When an arrow function contains a single expression (i.e., a *concise piece of code* that produces a value), you can use an implicit return without curly braces and parentheses.
## Multiple Statements
```jsx
// Multiple statements, use curly braces and 'return'
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
```

For Example, 

**ARROW FUNCTION WITHOUT RETURN**
```JSX
		<tbody>
          {userData.map((usr) => (
            <tr key={usr.id}>
              <td>{usr.name}</td>
              <td>{usr.username}</td>
              <td>{usr.phone}</td>
              <td>{usr.email}</td>
            </tr>
          ))}
        </tbody>
```
**ARROW FUNCTION WITH RETURN**

```JSX
		<tbody>
          {userData.map((usr) => {
            return (
              <tr key={usr.id}>
              <td>{usr.name}</td>
              <td>{usr.username}</td>
              <td>{usr.phone}</td>
              <td>{usr.email}</td>
            </tr>
            )
          })}
        </tbody>
```