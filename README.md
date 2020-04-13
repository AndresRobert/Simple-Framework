# ACODE Simple Framework
Simple Framework adapts Material & Mobile First guidelines on components to support most of the best practices of UI in the lightest way possible for designers and developers to lightning fast build apps and websites.

## GRID
```html
<div class="grid">
    <div class="row">
        <div class="col-12"></div>
    </div>
</div>
```
## Regular Card
```html
<div class="card">
    <h5>Card Title</h5>
    <p class="title">Title description</p>
    <p>Regular Card body text</p>
</div>
```

## Elevated Card
```html
<div class="card elevated">
    <h5>Elevated Card Title</h5>
    <p class="title">Title description</p>
    <p>Card body text</p>
</div>
```

## Card with image
```html
<div class="card">
    <img src="src/img/example.jpg" alt>
    <h5>Card Title</h5>
    <p class="title">Title description</p>
    <p>Regular Card body text with image and buttons</p>
    <div class="buttons">
        <button class="text">More Info</button>
        <button class="text">Close</button>
    </div>
</div>
```

## Chips
```html
<div class="chip">Basic Chip</div>
<div class="chip"><i class="fas fa-star"></i>Chip with Icon</div>
<div class="chip fill">Filled Chip</div>
<div class="chip fill dismiss">Closable Chip<i class="fas fa-times"></i></div>
<div class="chip"><img src="src/img/avatar.jpg" alt>Image and Name Chip</div>
```

## Lists
```html
<ul class="icon">
    <li>One Line + Icon<i class="far fa-star"></i></li>
</ul>
<ul class="two">
    <li>Two Lines
        <p>Secondary text</p>
    </li>
</ul>
<ul class="three">
    <li>Three Lines
        <p>Secondary text</p>
        <p>Tertiary text</p>
    </li>
</ul>
```

## Gallery
Default 4 images per row
```html
<div class="gallery">
    <div class="item">
        <img src="src/img/example.jpg" alt="">
        <p>Image Info <i class="far fa-star"></i></p>
    </div>
    <div class="item">
        <img src="src/img/example2.jpg" alt="">
    </div>
    <div class="item round">
        <img src="src/img/example.jpg" alt="">
    </div>
    <div class="item">
        <img src="src/img/example.jpg" alt="">
    </div>
</div>

<div class="gallery six">
    <div class="item">
        <img src="src/img/example.jpg" alt="">
        <p>Image Info <i class="far fa-star"></i></p>
    </div>
    <div class="item">
        <img src="src/img/example2.jpg" alt="">
    </div>
    <div class="item round">
        <img src="src/img/example.jpg" alt="">
    </div>
    <div class="item">
        <img src="src/img/example.jpg" alt="">
    </div>
    <div class="item">
        <img src="src/img/example.jpg" alt="">
    </div>
    <div class="item">
        <img src="src/img/example.jpg" alt="">
    </div>
</div>

<div class="gallery two">
    <div class="item">
        <img src="src/img/example.jpg" alt="">
        <p>Image Info <i class="far fa-star"></i></p>
    </div>
    <div class="item round">
        <img src="src/img/example2.jpg" alt="">
    </div>
</div>
```

## Navigation
```html
<nav class="followScroll">
    <a href="#grid" class="active"><i class="fas fa-grip-horizontal"></i>Grid</a>
    <a href="#cards"><i class="fas fa-address-card"></i>Cards</a>
    <a href="#typo"><i class="fas fa-heading"></i>Typo</a>
    <a href="#tables"><i class="fas fa-table"></i>Tables</a>
    <a href="#lists"><i class="fas fa-list-ul"></i>Lists</a>
    <a href="#gallery"><i class="fas fa-images"></i>Gallery</a>
    <a href="#navigation" class="hideOnSmall"><i class="fas fa-bars"></i>Navigation</a>
    <a href="#dialog"><i class="fas fa-window-restore"></i>Dialogs</a>
    <a href="#progress"><i class="fas fa-spinner"></i>Progress</a>
    <a href="#forms"><i class="fas fa-mouse-pointer"></i>Forms</a>
</nav>
```

## Environment Progress Indicators
```javascript
$.loading.async();
$.loading.sync();
$.loading.dismiss();
```

## Snackbar & Dialog
```javascript
$.snackbar('This will be dismissed in 3 secs');
$.dialog(
    'Dialog body very, very, long text example for testing purposes',
    {
        title: 'Dialog Header',
        buttons: [
            { text: 'Action 1', id: 'action1' },
            { text: 'Action 2', id: 'action2' }
        ]
    }
);
```

## jQuery-ish Functions
```javascript
$.ready(() => {
    $('#myDiv').find('.someClass').forEach(item => console.log);
    $('.myClass').hide(); // returns first
    $$('.myClass').forEach(item => item.hide()); // returns all
});

$('#myButton')
    .on('click', event => event.target.addClass('clicked'))
    .append($('#someOther').val())
    .next()
    .hide();
```

## JSX-ish Declarative Views and Encapsulated Components
```javascript

// Real Dialog creation

Render(
    div({ className: 'overlay' },
        div({ className: 'card elevated' },
            h5('My Title'),
            p('My Message'),
            div(
                { className: 'buttons right' }, 
                button({ className: 'text', id: 'my_button' }, 'My Button')
            )
        )
    )
);

// Also mixable

button(
    { className: 'text', id: 'my_button' },
    'My Button'
).on('click', () => $.snackbar('Button pressed'));

```

## Start Here
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple Framework</title>
        <link href="pathTo/acode.css" rel="stylesheet">
    </head>
    <body>
    <!-- Content -->
    <script src="pathTo/acode.js"></script>
    <script src="https://kit.fontawesome.com/a93fffc8fc.js" crossorigin="anonymous"></script>
    </body>
</html>
```

## Use it Now!
Visit [ACODE Simple Framework](https://simple.acode.cl/)
