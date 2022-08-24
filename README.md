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

## Nav
You can add `div` tags as items inside the `nav` tag
```html
<button class="nav" id="nav" onclick="toggleNav()">+</button>
<nav id="navbar" class="is-hidden">
    <div>nav item 1</div>
    <div>nav item 2</div>
    <div>nav item 3</div>
    <div>nav item 4</div>
    <div>nav item 5</div>
    <div>nav item 6</div>
</nav>
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
    </section>
    <section class="border-inside to-c-inside">
        <article>1</article>
        <article>2</article>
        <article>3</article>
        <article>4</article>
        <article>5</article>
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
<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>
<p>normal paragraph.</p>
<p><b>bold</b> paragraph</p>
<p><i>italic</i> paragraph</p>
<p>paragraph with: <mark>marked</mark>, <em>emphasized</em>, <a href="#link">link</a> or <span class="hoverable">.hoverable</span>.</p>
```

## Cards
Use `.card` on a div and use `header`, `main` and `footer` as template
```html
<main class="grid">
    <section>
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
        <div class="card">
            <header>
                <h3>h3</h3>
                <p>header</p>
            </header>
            <main>
                <img src="default.jpg">
            </main>
            <footer class="to-r">
                <p><a src="#accept">accept</a> | <a src="#cancel">cancel</a></p>
            </footer>
        </div>
        <div class="card">
            <header>
                <h3>h3</h3>
            </header>
            <main>
                <p>This is a main tag section to add info</p>
                <p>Second line paragraph</p>
            </main>
            <footer>
                <img src="default.jpg">
            </footer>
        </div>
    </section>
    <section>
        <div class="card">
            <header>
                <h3>h3</h3>
                <p>header</p>
            </header>
            <main>
                <p>no footer</p>
            </main>
        </div>
        <div class="card">
            <main>
                <p>no header</p>
            </main>
            <footer class="to-r">
                <p><a src="#accept">accept</a> | <a src="#cancel">cancel</a></p>
            </footer>
        </div>
        <div class="card hoverable">
            <header>
                <h3>h3</h3>
                <p>no content (also hoverable)</p>
            </header>
            <footer class="to-r">
                <p><a src="#accept">accept</a> | <a src="#cancel">cancel</a></p>
            </footer>
        </div>
    </section>
</main>
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
                <th>header D</th>
                <th>header E</th>
                <th>header F</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>data 1 A</td>
                <td>data 1 B</td>
                <td>data 1 C</td>
                <td>data 1 D</td>
                <td>data 1 E</td>
                <td>data 1 F</td>
            </tr>
            <tr>
                <td>data 2 A</td>
                <td>data 2 B</td>
                <td>data 2 C</td>
                <td>data 2 D</td>
                <td>data 2 E</td>
                <td>data 2 F</td>
            </tr>
            <tr>
                <td>data 3 A</td>
                <td>data 3 B</td>
                <td>data 3 C</td>
                <td>data 3 D</td>
                <td>data 3 E</td>
                <td>data 3 F</td>
            </tr>
            <tr>
                <td>data 4 A</td>
                <td>data 4 B</td>
                <td>data 4 C</td>
                <td>data 4 D</td>
                <td>data 4 E</td>
                <td>data 4 F</td>
            </tr>
            <tr>
                <td>data 5 A</td>
                <td>data 5 B</td>
                <td>data 5 C</td>
                <td>data 5 D</td>
                <td>data 5 E</td>
                <td>data 5 F</td>
            </tr>
            <tr>
                <td>data 6 A</td>
                <td>data 6 B</td>
                <td>data 6 C</td>
                <td>data 6 D</td>
                <td>data 6 E</td>
                <td>data 6 F</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>footer A</td>
                <td>footer B</td>
                <td>footer C</td>
                <td>footer D</td>
                <td>footer E</td>
                <td>footer F</td>
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
Only buttons can be buttons
```html
<button>Normal</button>
<button disabled>Disabled</button>
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
            <input id="form-email" type="email">
        </article>
        <article>
            <label for="form-password">Password</label>
            <input id="form-password" type="password">
        </article>
        <article>
            <label for="form-date">Date</label>
            <input id="form-date" type="date">
        </article>
        <article>
            <label for="form-search">Search <span class="error">* this input is disabled</span></label>
            <input id="form-search" type="search" disabled>
        </article>
    </section>
    <section>
        <article>
            <label for="form-area">Area</label>
            <select>
                <option>Area 1</option>
                <option>Area 2</option>
                <option>Area 3</option>
                <option>Area 4</option>
            </select>
        </article>
        <article>
            <label for="form-texttarea">Text area</label>
            <Textarea id="form-texttarea"></Textarea>
        </article>
        <article>
            <label for="form-placeholder">Placeholder</label>
            <input id="form-placeholder" type="text" placeholder="placeholder text">
        </article>
        <article>
            <label for="form-file">File</label>
            <input id="form-file" type="file">
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
            <input type="checkbox" id="vue" value="Vue">
        </article>
        <article>
            <label for="angular" class="checkbox">Angular</label>
            <input type="checkbox" id="angular" value="Angular">
        </article>
        <article>
            <label for="react" class="checkbox">React</label>
            <input type="checkbox" id="react" value="React">
        </article>
        <article>
            <label for="svelte" class="checkbox">Svelte</label>
            <input type="checkbox" id="svelte" value="Svelte">
        </article>
    </section>
    <section>
        <article style="flex: 3;">
            <label for="form-range">Range</label>
            <input id="form-range" type="range">
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
<html lang="en" class="simple-me">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Simple New Project</title>
        <link href="path/to/simple.css" rel="stylesheet">
    </head>
    <body>
    <!-- Content -->
    </body>
</html>
```

## See it in action
Visit [Simple Framework](https://andresrobert.github.io/Simple-Framework/)
