# ACODE Simple Framework
Simple Framework adapts Material & Mobile First guidelines on components to support most of the best practices of UI in the lightest way possible for designers and developers to lightning fast build apps and websites.

### v1.0.0

## How to use
Use `simple-me` class in your `html` tag and you are ready to go.
```html
<html lang="en" class="simple-me">
    ...
</html>
```

## Header
```html
<header>
    <h1>Simple Framework</h1>
    <p>The Simplest framework you will ever need.</p>
</header>
```

## Grid System
Grid system can be activated using class `.grid`, the children will be rows and the and the children of every child will be a cell.
```html
<main class="grid">
    <section class="border-inside to-c-inside">
        <article>1</article>
        <article>2</article>
    </section>
    <section class="border-inside to-c-inside">
        <article>1</article>
        <article>2</article>
        <article>3</article>
    </section>
    <section class="border-inside to-c-inside">
        <article>1</article>
        <article>2</article>
        <article>3</article>
        <article>4</article>
        <article>5</article>
        <article>6</article>
    </section>
</main>
```

## Typography
Default web-safe font Helvetica, Arial, sans-serif
```html
<main class="grid">
    <section>
        <article><h1>h1</h1></article>
        <article><h2>h2</h2></article>
        <article><h3>h3</h3></article>
        <article><h4>h4</h4></article>
        <article><h5>h5</h5></article>
        <article><h6>h6</h6></article>
    </section>
    <section>
        <article>
            <p>Normal text paragraph, 
                <b>bold text</b>, 
                <i>italic text</i>, 
                <mark>marked text</mark>, 
                <em>emphasized text</em>, 
                <span class="error">error text</span>, 
                <span class="warn">warning text</span>, 
                <span class="success">success text</span>, 
                <a href="#link">a link</a> and 
                <span class="hoverable">.hoverable text</span>.
            </p>
        </article>
    </section>
    <section class="to-c-inside">
        <article class="error"><p>Error cell</p></article>
        <article class="warn"><p>Warning cell</p></article>
        <article class="success"><p>Success cell</p></article>
    </section>
    <section class="error to-c-inside">
        <article><p>Error row</p></article>
    </section>
    <section class="warn to-c-inside">
        <article><p>Warning row</p></article>
    </section>
    <section class="success to-c-inside">
        <article><p>Success row</p></article>
    </section>
</main>
```

## Shadows
There are 6 levels.
```html
<article class="shadow-1">.shadow-1</article>
<article class="shadow-2">.shadow-2</article>
<article class="shadow-3">.shadow-3</article>
<article class="shadow-4">.shadow-4</article>
<article class="shadow-5">.shadow-5</article>
<article class="shadow-6">.shadow-6</article>
```

## Cards
Use `.card` on a div and use `header`, `main` and `footer` as template
```html
<div class="card">
    <header>
        <img src="default.jpg">
    </header>
    <main>
        <p>This is a main tag section to add info</p>
        <p>Second line paragraph</p>
    </main>
    <footer class="to-r">
        <p><a src="#accept">accept</a> | <a src="#cancel">cancel</a></p>
    </footer>
</div>
```

## Tables
To make it responsive you have to wrap it up in a `.responsive` container
```html
<main class="responsive">
    <table>
        <thead>
            <tr>
                <th>header A</th>
                <th>header B</th>
                <th>header C</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>data 1 A</td>
                <td>data 1 B</td>
                <td>data 1 C</td>
            </tr>
            <tr>
                <td>data 2 A</td>
                <td>data 2 B</td>
                <td>data 2 C</td>
            </tr>
            <tr>
                <td>data 3 A</td>
                <td>data 3 B</td>
                <td>data 3 C</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>footer A</td>
                <td>footer B</td>
                <td>footer C</td>
            </tr>
        </tfoot>
    </table>
</main>
```

## Chips
Use `.chip` class to convert any container into a chip
```html
<div class="chip">basic chip</div>
<div class="chip hoverable"><i>.hoverable</i> chip</div>
<div class="chip badge-r icon-l">multiple chip<em>55</em><img src="icon.jpg"></div>
<div class="chip close-r"><i>.close-r</i> chip <em>X</em></div>
<div class="chip icon-r"><i>.icon-r</i> chip<img src="icon.jpg"></div>
<div class="chip badge-r"><i>.badge-r</i> chip <em>55</em></div>
<div class="chip image-r"><i>.image-r</i> chip<img src="default.jpg"></div>
<div class="chip close-l"><i>.close-l</i> chip <em>X</em></div>
<div class="chip icon-l"><i>.icon-l</i> chip<img src="icon.jpg"></div>
<div class="chip badge-l"><i>.badge-l</i> chip <em>55</em></div>
<div class="chip image-l"><i>.image-l</i> chip<img src="default.jpg"></div>
```

## Tabs
`.tabs` class is used to organize data in a seamless layout
```html
<main class="tabs">
    <section>
        <a id="title1" href="#!" class="selected">Title 1</a>
        <a id="title2" href="#!">Title 2</a>
        <a id="title3" href="#!">Title 3</a>
    </section>
    <article id="tab1" class="selected">
        Content A
    </article>
    <article id="tab2">
        Content B
    </article>
    <article id="tab3">
        Content C
    </article>
</main>
```

## Dots
`.dots` is also a dotted layout for indexing data
```html
<main class="dots">
    <article class="selected">
        Content Dot A
    </article>
    <section>
        <a class="prev" href="#!">
            <img src="src/img/prev.png" alt="prev">
        </a>
        <a href="#!" class="selected"></a>
        <a href="#!"></a>
        ...
        <a href="#!"></a>
        <a class="next" href="#!">
            <img src="src/img/next.png" alt="next">
        </a>
    </section>
</main>
```

## Lists
Lists need no classes
```html
<ul>
    <li>item a</li>
    <li>item y</li>
    <li>item b</li>
    <ul>
        <li>item a</li>
        <li>item y</li>
        <li>item b</li>
        <ol>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
        </ol>
    </ul>
</ul>
```

## Buttons
Only buttons, submit inputs and `a` links can be buttons
```html
<button>Normal</button>
<button disabled>Disabled</button>
<a class="button">Link Button</a>
<a class="button disabled">Link Button Disabled</a>
<button class="error">Error</button>
<button class="warn">Warning</button>
<button class="success">Success</button>
```

## Dialogs
Use `.card.as-dialog` to create dialogs
```html
<div id="dialog1" class="card as-dialog">
    <header>
        <h4>This is a dialog</h4>
    </header>
    <main>
        <p>This is the informaton section</p>
    </main>
    <footer>
        <p class="to-r">
            <a href="#ok_dialog">OK</a> | <a href="#cancel_dialog">Cancel</a>
        </p>
    </footer>
</div>
```

## Snackbar
use `.snackbar` as a container and `.snackbar-item` as the actual message container
```html
<div class="snackbar">
    <div class="snackbar-item">
        <p>Snackbar important message</p>
        <a href="#!" onclick="this.parentElement.remove()">Dismiss</a>
    </div>
    <div class="snackbar-item">
        <p>Another important message</p>
        <a href="#!" onclick="this.parentElement.remove()">Dismiss</a>
    </div>
</div>
```

## Appbar
Use `header` or `footer` with class `.app-bar` to create them
```html
<header class="app-bar">
    <a href="#!">
        <img src="src/img/menu.png" alt="menu">
    </a>
    <p>App Title</p>
    <div class="appbar-links">
        <a href="#!"><img src="src/img/link1.png" alt="link1"></a>
        <a href="#!"><img src="src/img/link2.png" alt="link2"></a>
    </div>
</header>
...
<footer class="app-bar">
    <a href="#!">
        <img src="src/img/menu.png" alt="menu">
        <p>Menu</p>
    </a>
    <a href="#!">
        <img src="src/img/link1.png" alt="link1">
        <p>Link 1</p>
    </a>
    <a href="#!">
        <img src="src/img/link2.png" alt="link2">
        <p>Link 2</p>
    </a>
</footer>
```
You can use aside as the menu container for the sandwich button
```html
<aside>
    <a class="selected">nav item 1</a>
    <a>nav item 2</a>
    <a>nav item 3</a>
</aside>
```

## Nav
You can add `a` tags as items inside the `nav` tag
```html
<button class="nav">+</button>
<nav class="is-hidden">
    <a>nav item 1</a>
    <a>nav item 2</a>
    <a>nav item 3</a>
</nav>
```

## Progress Indicators
Linear
```html
<div class="progress">
    <div class="indicator" style="width:25%"></div>
</div>
```
Radial
```html
<div class="progress-circle p25">
    <p>25%</p>
</div>
```

## Forms
`form` tag is already a grid, so no need to add the `.grid` class
```html
<form action="#">
    <section>
        <article>
            <label for="form-email">Email</label>
            <input id="form-email" name="email" type="email">
        </article>
        <article>
            <label for="form-password">Password</label>
            <input id="form-password" name="password" type="password">
        </article>
        <article>
            <label for="form-date">Date</label>
            <input id="form-date" name="date" type="date">
        </article>
        <article>
            <label for="form-search">Search <span class="error">* this input is disabled</span></label>
            <input id="form-search" name="search" type="search" disabled>
        </article>
    </section>
    <section>
        <article>
            <label for="form-area">Area</label>
            <select name="area">
                <option>Area 1</option>
                <option>Area 2</option>
                <option>Area 3</option>
                <option>Area 4</option>
            </select>
        </article>
        <article>
            <label for="form-texttarea">Text area</label>
            <Textarea id="form-texttarea" name="text"></Textarea>
        </article>
        <article>
            <label for="form-placeholder">Placeholder</label>
            <input id="form-placeholder" name="another" type="text" placeholder="placeholder text">
        </article>
        <article>
            <label for="form-file">File</label>
            <input id="form-file" name="file" type="file">
        </article>
    </section>
    <section>
        <article>
            <label>Languages</label>
            <label for="python" class="radio">Python</label>
            <input type="radio" name="fav_language" id="python" value="Python">
        </article>
        <article>
            <label for="java" class="radio">Java</label>
            <input type="radio" name="fav_language" id="java" value="Java">
        </article>
        <article>
            <label for="csharp" class="radio">C-sharp</label>
            <input type="radio" name="fav_language" id="csharp" value="C-sharp">
        </article>
        <article>
            <label for="php" class="radio">PHP</label>
            <input type="radio" name="fav_language" id="php" value="PHP">
        </article>
    </section>
    <section>
        <article>
            <label>Frameworks</label>
            <label for="vue" class="checkbox">Vue</label>
            <input type="checkbox" id="vue" name="vue" value="Vue">
        </article>
        <article>
            <label for="angular" class="checkbox">Angular</label>
            <input type="checkbox" id="angular" name="angular" value="Angular">
        </article>
        <article>
            <label for="react" class="checkbox">React</label>
            <input type="checkbox" id="react" name="react" value="React">
        </article>
        <article>
            <label for="svelte" class="checkbox">Svelte</label>
            <input type="checkbox" id="svelte" name="svelte" value="Svelte">
        </article>
    </section>
    <section>
        <article style="flex: 3;">
            <label for="form-range">Range</label>
            <input id="form-range" name="range" type="range">
        </article>
        <article>
            <input id="form-submit" type="submit">
        </article>
    </section>
</form>
```

## Footer
`footer` tag inverts the color palette (`header` does the same)
```html
<footer>
    <h3>Footer</h3>
    <a href="https://github.com/AndresRobert/Simple-Framework">Github</a>
</footer>
```

## Start Here
```html
<!DOCTYPE html>
<html lang="en" class="smpl">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Simple New Project</title>
        <link href="path/to/smpl.min.css" rel="stylesheet">
    </head>
    <body>
    <!-- Content -->
    </body>
</html>
```

## Apply themes as easy as this:
Simple Blue Theme
```css
:root {
    --background: #DEF;
    --on-background-light: #CDF;
    --primary: #06D;
    --primary-dark: #049;
    --primary-light: #9CF;
    --hue-rotate: 360deg;
}
```
Simple Green Theme
```css
:root {
    --background: #DFD;
    --on-background-light: #BDA;
    --primary: #3A0;
    --primary-dark: #270;
    --primary-light: #AF8;
    --hue-rotate: 245deg;
}
```
Simple Red Theme
```css
:root {
    --background: #ffdddd;
    --on-background-light: #FFCCDD;
    --primary: #DD0011;
    --primary-dark: #770011;
    --primary-light: #FF9999;
    --hue-rotate: 145deg;
}
```

## See it in action
Visit [Simple Framework](https://andresrobert.github.io/Simple-Framework/)
