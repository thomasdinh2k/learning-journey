# Basic Terminology
## Responsive Design 
* Responsive Design is the approach that suggests that **design** and **development** should **respond** to the user's **behavior** and **environment based** on screen size, platform and orientation
* The practice consists of:
	* Flexible grids and layouts
	* Images
	* Intelligent uses of CSS media queries
## Box Model
**Box Model** is used when talking about *design* and *layout*. 
**Box Model** *wraps* around every HTML element, consists of:
* Margins
* Borders
* Padding
* *Content*

#### Fundamental Code
```html
<div class="container-fluid">
        <div class="header bg-success">
            Header section of the website

        </div>
        <div class="content">
            <div class="row">
                <div class="sidebar col-2 sidebar">Left Sidebar
                    
                </div>
                <div class="sidebar col-7 main-content">Main Content</div>
                <div class="sidebar col-3 sidebar bg-secondary">Extra Content</div>
            </div>
        </div>

        <div class="footer bg-info">
            Footer section of the website
        </div>
    </div>
```
## Containers  
* Most **basic** element in Bootstrap
* Used to *pad* content inside of them
> Two types of Containers
* Fix-width containers
	* There are few cases you might wanted to use fix width rather than fluid
		* Login screen
		* Static website (For only desktop audiences)
			* Real-estate company
			* Small restaurant
			* Small-medium scale websites
* Fluid containers `container-fluid`(For responsive design)
	* width is always 100% of the device screen
	* always about percentage design
		* e.g:
			* 40% side bar
			* 60% main content
![[Pasted image 20231016034510.png|Fix-width containers]]

# Grid system
Use to design layout, templates, structure of the website
>[!info] Bootstrap Grid
>Support 12 columns/row across the page

* Grid consists of rows/columns

![[Pasted image 20231016035433.png | Columns breakdown example]]
- Bootstrap grid supports:
	- xs - extra small - mobile
	- sm - small - mobile / ipad
	- md - medium - ipad (in landscape)/desktop
	- lg - large
	- xl - extraLarge
![[Pasted image 20231016035827.png]]
### More about grid system
![[Pasted image 20231016045124.png | col-sm-12 col-md-4 col-lg-3 pb-4]]

This code means:
- On **small**, a col would take 12 spaces => 1 `card` each row
	![[Pasted image 20231016045302.png | 150]]
- On **medium**, a col would take 4 spaces => 3 `card` each row
	![[Pasted image 20231016045430.png | 250]]
- On **large**, a col would take 3 spaces => 12//3 = 4 `card` each row
	![[Pasted image 20231016045529.png|300]]

>[!info-] Make list scrollable CSS #CSS 
> Uses `overflow-y: scroll;`

