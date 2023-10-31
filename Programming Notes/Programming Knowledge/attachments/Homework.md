


```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML CSS Sep26</title>
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <div id="menu">
        <h3 id="title">DANH MỤC SẢN PHẨM</h3>
        <ul>
            <li class="menu-item"><a href="#">iPhone</a></li>
            <li class="menu-item"><a href="#">Samsung</a></li>
            <li class="menu-item"><a href="#">HTC</a></li>
            <li class="menu-item"><a href="#">OPPO</a></li>
            <li class="menu-item"><a href="#">Huawei</a></li>
            <li class="menu-item"><a href="#">BlackBerry</a></li>
        </ul>
    </div>
    <br>
    <div id="menu">
        <h3 id="title" class="overline">MENU</h3>
        <ul>
            <li class="menu-item"><a href="#">Home</a></li>
            <li class="menu-item"><a href="#">About</a></li>
            <li class="menu-item"><a href="#"><span class="yellow">Blog</span></a></li>
            <li class="menu-item"><a href="#">Contact</a></li>
        </ul>
    </div>
</body>

</html>
```
```css
#menu {
    margin: 20 auto;
    font-family: Arial, Helvetica, sans-serif;

    width: 300px;
    height: 40px;
    
    background-color: #999999;
    
    display:table-cell;
    margin: 5px;
}

#title {
    background-color: #ffa500;
    color: white;
    height: 40px;
    font-size: 17px;
    
    text-align: center;
    line-height: 40px;
    margin-bottom: 0;
}

.menu-item{
    height: 30px;
    line-height: 30px;
    font-size: 15px;
}

#menu > ul{
    background-color: #c4bdbd;
    margin: 0;
}

.menu-item > a {
    text-decoration: none;
    color: black;
}

a > .yellow {
    color: rgb(255, 255, 0);
    font-weight: bolder;
}

.overline{
    text-decoration: overline;
}
```
![[Pasted image 20230926221720.png]]