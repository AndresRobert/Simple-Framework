# ACODE Simple Framework
This very lightweight CSS/JS framework for lightning fast frontend development. Keep It Simple!!

## Breadcrumbs
```html
<ul class="breadcrumbs">
  <li><a href="#toHome">Home</a></li>
  <li><a href="#somewhere">Somewhere</a></li>
  <li>Here</li>
</ul>
```
## Cards & Colors
```html
<div class="card">
  Content
</div>
```
```html
<div class="card">
  <div class="title">Card Title</div>
  Content
</div>
```
```css
/* Colors */
.disable {}
.main {}
.inverted {}
.accent {}
.primary {}
.secondary {}
.tertiary {}
```
and somo more to use and explore!
## Typo
All headers, span, pre, etc... redefined! no classes needed
## Grid
Use f2 to f11 to handle flexbox widths
```html
<section class="toCenter">
  <div>1</div>
  <div>2</div>
  <div class="f2">3</div>
</section>
```
## Images
Always responsive, `.rounded` corners or `.circle` shaped
## Buttons
Buttons are full width on grid, can also be `.circle` shaped or `.fab` (float action button)
## Navbar
```html
<nav>
  <ul>
    <li>Link 1</li>
    <li>Link 2</li>
    <li class="submenu collapse-next close">Dropdown</li>
    <li class="submenu">
      <ul>
        <li>Sub Link 1</li>
        <li>Sub Link 2</li>
      </ul>
    </li>
  </ul>
</nav>
```
## Icons
Add custom icons:
```css
.icon.yourIcon {
    -webkit-mask-image: url(/src/icon/yourIcon.svg);
    mask-image: url(/src/icon/yourIcon.svg);
}
```
Library:
```html
<span class="icon add"></span>
<span class="icon close"></span>
<span class="icon delete"></span>
<span class="icon down"></span>
<span class="icon empty"></span>
<span class="icon filled"></span>
<span class="icon left"></span>
<span class="icon mail"></span>
<span class="icon menu"></span>
```
etcetera...
## Lists
Redefined!
```html
<ul>
  <li></li>
</ul>
```
## Forms
Check it out at the demo page.
## Loaders
```html
<div class="loading"></div>
```
and some variations!
## Tables
Out of the box and Datatable plugin compatible
## Collapsible
```html
<ul>
  <li class="collapse-next">Collapsible title</li>
  <li>Collapsible content</li>
</ul>
```
```javascript
init.collapse();
```
## Carousel
```html
<div class="carousel">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```
## Modals
```html
<div class="modal close" id="myModal">
  <div class="header"></div>
  <div class="body"></div>
  <div class="footer"></div>
</div>
```
```javascript
on.click('openMyModal', () => {add.class('myModal', 'open')});
```
## Tabs
```html
<div class="tabs">
  <div>
    <input type="radio" id="tab-1" name="tab-group-1" checked>
    <label for="tab-1">Tab One</label>
    <div>Content for Tab One</div>
  </div>
  <div>
    <input type="radio" id="tab-2" name="tab-group-1">
    <label for="tab-2">Tab One</label>
    <div>Content for Tab Two</div>
  </div>
  <div>
    <input type="radio" id="tab-3" name="tab-group-1">
    <label for="tab-3">Tab One</label>
    <div>Content for Tab Three</div>
  </div>
</div>
```
## Bottom Menu
```html
<div id="bottomMenu" class="myBottomMenu">
    <div class="items">
        <div class="active">
            <span class="icon add"></span>Add
        </div>
        <div>
            <span class="icon message"></span>Chat
        </div>
        <div>
            <span class="icon mail"></span>Mail
        </div>
        <div>
            <span class="icon power"></span>Logout
        </div>
    </div>
    <div class="contents">
        <div>Add content for tab</div>
        <div>Maybe a form to sent a comment</div>
        <div>Feed with mails</div>
        <div>Good bye message...</div>
    </div>
</div>
```
```javascript
init.bottomMenu('myBottomMenu');
```
## JS Helpers
```javascript
// toggle between classes
toggle.class('id', 'className');
// add classes
add.class('id', 'className');
// remove classes
remove.class('id', 'className');
// on events
on.click('id', handler => {});
on.change('id', handler => {});
on.keyup('id', handler => {});
on.mousedown('id', handler => {});
on.focus('id', handler => {});
on.blur('id', handler => {});
// init specific components by id
init.counter('id');
init.bottomMenu('id');
// init all components
init.checkbox();
init.radio();
init.range();
init.collapse();
// show snackbar
snackbar.show('message', 'classes', duration);
// ajax Promise
ajax.post('/url', {data});
```
## CSS Helpers
```css
/* Fixed header and footer */
.fixed {}
/* Convert div on a card */
.card {}
/* Point out buttons */
.sonar {}
/* 
pre, div & span resized font
.d5 -> .d1 (0.5em -> 0.9em)
.x1 -> .x9 (1em -> 3em)
 */
/* Shadows */
.flat {}
.shadow1 {}
.shadow2 {}
.shadow3 {}
/* Flex width
.f2 -> .f11
Icon sizes
.x2 -> .x9 (1.2em -> 3em)
 */
/* Font weight */
.light {}
.normal {}
.bold {}
/* Text align */
.toLeft {} 
.toCenter {} 
.toRight {}
/* Attributes */
.unselectable {} 
.truncated {} 
.clickable {} 
.rounded {} 
.hidden {} 
.hideOnSmall {} 
.showOnSmall {} 
.keepOnSmall {}
/* Separation */
.upperGap {} 
.lowerGap {}
```
## Use it Now!
Visit [ACODE Simple Framework](https://acode.cl/)
