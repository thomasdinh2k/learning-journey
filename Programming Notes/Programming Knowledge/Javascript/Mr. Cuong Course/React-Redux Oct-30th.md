```Jsx
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Page404 from './Components/Page404';

function App() {
  return (
    <BrowserRouter>
    <div id='wrap'>
      <ul>
        <li><a to="/">Home</a></li>
        <li><a to="About">About</a></li>
        <li><a to="Blog">Blog</a></li>
        <li><a to="Contact">Contact</a></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Blog' element={<Blog/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App
```

Một ứng dụng React là ứng dụng không có **reload**. Nếu state của thằng nào thay đổi thì mình thằng đó *reload* thôi. Để ngăn page reload ta dùng `Link`

Cài Postman