>[!Info] Hook - Gắn vào Component
>Học theo video tại link: https://www.youtube.com/watch?v=5ismRwx4ebM&list=PL_-VfJajZj0W8-gf0g3YCCyFh-pVFMOgy

Hook bản chất là cái`hàm`(method) được viết sẵn bởi thư viện ReactJS
```js
import {
	useState,
	useEffect,
	useLayoutEffect,
	useRef,
	UseCallback,
	useMemo,
	useReducer,
	useContext,
	useImperativeHandle,
	useDebugValue
} from 'react'
```

Ví dụ 
```js
// useState
const [state, setState] = useState(initState);
```

Component đơn giản và trở nên dễ hiểu
- Không bị chia logic như methods trong lifecycle của Class Component
- Không cần sử dụng `this`
## Khái niệm LifeCycle
Vòng đời của Component (từ khi nó được thêm vào DOM, cho đến khi nó được thay đổi về mặt dữ liệu, cho đến khi bị gỡ khỏi DOM)
![[Pasted image 20231018101415.png|Component's Life Cycle]]
- Trục X:
	- Mounting: Khi tải Component lần đầu tiên
	- Updating: Khi Update, modify sự kiện
	- Unmounting: Khi xóa bỏ Component
- Trục Y:
	- Render Phrase: Giai đoạn trước Render
	- Commit Phrase: Giai đoạn hậu Render

## Mount và Unmount

Ví dụ
```js
import React from 'react';

const App = () => {
    
    const [showText, setShowText] = React.useState(false)

    return(
        <div>
            {showText ? <h2>Thomas Dinh</h2> : ""}
            <h5> 23 </h5>
            <button onClick={ () => {setShowText(!showText)}}>Toggle Showing Name</button>
        </div>
    );
}

export default App;
```

![[Pasted image 20231019100905.png | Mounting Component]]
Ngay từ thời điểm `Component` được đưa vào trong DOM như trong code đã được tính là *Mount* rồi. Thời điểm khi mình gỡ cái element ra thì gọi là *Unmount* (Trong trường hợp này là khi User nhấn vào Toggle). Và khi chạy ứng dụng từ đầu thì nó *Mount* thẳng luôn, do không có điều kiện gì mà load Component thẳng luôn

![[Pasted image 20231019100710.png]]


Life Cycle đánh dấu thời điểm xảy ra những sự kiện trên.
*VD: Người ta thường gọi APIs tại thời điểm Component được mang vào Dom và khi Component được xóa khỏi DOM thì thường (clearInterval, clearTimeout, removeEventListener) để tránh bị rò rỉ bộ nhớ 

# UseEffect();
Để học được UseEffect một cách suôn sẻ, cần phải biết:

// Events: Add / remove event listener
// Observer pattern: Subscribe / unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted
// ===
// Call API

Syntax
```js
useEffect ( callback, [dependences])
useEffect ( () => {}, [])
```

Dùng `UseEffect` khi nào? 
- Khi muốn thực hiện các `SideEffect` (Update DOM, ListenDomEvents, RemoveEventListener)

Khi học useEffect, cần học và nắm chắc các trường hợp
1. `useEffect` chỉ có call-back function
2. `useEffect` có array dependences rỗng
3. `useEffect` có cả call-back và dependences (khó nhất)

## UseEffect chỉ có call-back
### Khi muốn thực hiện `Side Effect`
>[!caution]+
> - Call back function luôn được gọi sau khi Component Mounted

Đối với `useEffect` chỉ có call-back thì call-back được gọi mỗi khi Component **Re-render** 

![[Pasted image 20231019105721.png | Component được render lại mỗi khi một ký tự được gõ]]

```js
const App = () => {
  const [title, setTitle] = useState("");
  const [showText, setShowText] = React.useState(false);
  const [showInputField, setShowInputField] = React.useState(false);
  
  useEffect(() => {
    console.log(`Render ${title}`);        
    // Document.setTitle(title);
    document.title = title
  });

  return (
    <div>
      {showText && (<h2>Thomas Dinh</h2>)}
      <h5> 24 </h5>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Toggle Showing Name
      </button>
      <button
        onClick={() => {
          setShowInputField(!showInputField);
        }}
      >
        Show Input Field
      </button>

      {showInputField && (
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
      )}
    </div>
  );
};

export default App;
```
Bản chất của việc sử dụng `useEffect` trong trường hợp update `document.title` này là vì cái user interface vẫn là *Main Component* và việc update kia chỉ là **side-effect**. Nếu như không đưa vào `useEffect` thì nếu chạy điều kiện phức tạp sẽ dẫn tới *tràn bộ nhớ* hoặc *xung đột với các sự kiện khác mà ngăn `document.title` xảy ra*
## UseEffect(); có Array dependencies rỗng 
```js
useEffect(() => {}, [])
```
### Khi call API

Khi call API bình thường mà không dùng `useEffect`. React sẽ thực thi code từ trên xuống 
![[Pasted image 20231019113722.png]]
Điều này làm cho Component bị render đi render lại tạo ra **Infinite Loop** -> Ảnh hưởng đến *Performance*
![[Pasted image 20231019114444.png]]

>[!info]+ useEffect() with [ ]
>Chỉ gọi callback 1 lần duy nhất (sau khi Component mounted - rerendered)

https://youtu.be/hjIxfXKmkjk?si=G1bL1QFDgbPilxzk&t=1401
## UseEffect(); with dependencies
```js
useEffect(() => {...}, []);
useEffect(() => {}, dependences)
```

If the array is empty (`[]`), the effect will only run once when the component is mounted. ==Sử dụng khi cần bài toán Logic chỉ muốn chạy 1 lần duy nhất==
![[Pasted image 20231021093415.png]]
![[Pasted image 20231021093449.png]]

Khi sử dụng `useEffect`, kết hợp với `deps` thì khi Mount xong, API sẽ không tiếp tục call nữa vì `deps` là tệp rỗng

*`Dependences`* trong trường hợp này được gọi là biến, chứa 1 giá trị dữ liệu nào đó
`Callback` được **gọi lại** mỗi khi `Dependences` thay đổi

![[Pasted image 20231021102648.png]]

useEffect sẽ kiểm tra (2) trước và sau khi *render*. Nếu khác nhau thì nó sẽ **gọi callback**