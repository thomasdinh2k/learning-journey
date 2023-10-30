[Web note](https://usemynotes.com/destructuring-in-javascript/)
### ****Use Destructuring Assignment to Assign Variables from Nested Objects****

```jsx
//JavaScript
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

const { johnDoe: {age: HIS_AGE, email: HIS_EMAIL}} = user

//Python
person = {
  'name': 'John',
  'age': 30,
  'city': 'New York',
  'address': {
    'street': '123 Main St',
    'zip': '10001'
  }
}

name = person['name']
age = person['age']
city = person['city']
street = person['address']['street']
zip_code = person['address']['zip']
```
