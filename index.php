<?php $v = '0.1.8'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="src/img/favicon.png">
    <title>Simple Framework</title>
    <link href="src/acode.css?v=<?=$v?>" rel="stylesheet">
</head>
<body>
<header>
    <i onclick="$('nav').toggleClass('active')" class="fas fa-bars menu"></i>
    <img class="logo" src="src/img/logo.svg" alt>
    <p class="hideOnSmall">Simple Framework</p>
    <ul class="icons">
        <li><a href="https://github.com/AndresRobert/Simple-Framework" target="_blank"><i class="fab fa-github"></i></a></li>
    </ul>
</header>
<nav class="followScroll">
    <a href="#download"><i class="fas fa-cloud-download-alt"></i>Download</a>
    <a href="#grid" class="active"><i class="fas fa-grip-horizontal"></i>Grid</a>
    <a href="#cards"><i class="fas fa-address-card"></i>Cards & Tabs</a>
    <a href="#typo"><i class="fas fa-heading"></i>Typo</a>
    <a href="#tables"><i class="fas fa-table"></i>Tables</a>
    <a href="#lists"><i class="fas fa-list-ul"></i>Lists & Chips</a>
    <a href="#gallery"><i class="fas fa-images"></i>Gallery</a>
    <a href="#navigation" class="hideOnSmall"><i class="fas fa-bars"></i>Navigation</a>
    <a href="#dialog"><i class="fas fa-window-restore"></i>Dialogs</a>
    <a href="#progress"><i class="fas fa-spinner"></i>Progress</a>
    <a href="#forms"><i class="fas fa-mouse-pointer"></i>Forms</a>
</nav>
<main class="pv-4 hasNav">
    <div id="download" class="grid">
        <div class="row">
            <div class="col-12 center">
                <h6 class="center">The Simplest framework you will ever need</h6>
            </div>
            <div class="col-12 center">
                <a class="button" href="src/files/simpleFramework.zip">Download Now</a>
            </div>
        </div>
    </div>
    <div id="grid" class="grid">
        <h3>Grid</h3>
        <div class="row hideOnSmall">
            <div class="col-12 border center">12</div>
        </div>
        <div class="row">
            <div class="col-1-sm border center">1</div>
            <div class="col-11-sm border center">11</div>
        </div>
        <div class="row">
            <div class="col-2-sm border center">2</div>
            <div class="col-10-sm border center">10</div>
        </div>
        <div class="row">
            <div class="col-3-sm border center">3</div>
            <div class="col-9-sm border center">9</div>
        </div>
        <div class="row">
            <div class="col-4-sm border center">4</div>
            <div class="col-8-sm border center">8</div>
        </div>
        <div class="row">
            <div class="col-5-sm border center">5</div>
            <div class="col-7-sm border center">7</div>
        </div>
        <div class="row">
            <div class="col-6-sm border center">6</div>
            <div class="col-6-sm border center">6</div>
        </div>
        <div class="row hideOnSmall">
            <div class="col-4 border center">4</div>
            <div class="col-4 border center">4</div>
            <div class="col-4 border center">4</div>
        </div>
        <div class="row hideOnSmall">
            <div class="col-3 border center">3</div>
            <div class="col-3 border center">3</div>
            <div class="col-3 border center">3</div>
            <div class="col-3 border center">3</div>
        </div>
        <div class="row hideOnSmall">
            <div class="col-2 border center">2</div>
            <div class="col-2 border center">2</div>
            <div class="col-2 border center">2</div>
            <div class="col-2 border center">2</div>
            <div class="col-2 border center">2</div>
            <div class="col-2 border center">2</div>
        </div>
        <div class="row hideOnSmall">
            <div class="col-1 border center">1</div>
            <div class="col-1 border center">1</div>
            <div class="col-1 border center">1</div>
            <div class="col-1 border center">1</div>
            <div class="col-1 border center">1</div>
            <div class="col-1 border center">1</div>
            <div class="col-1 border center">1</div>
            <div class="col-1 border center">1</div>
            <div class="col-1 border center">1</div>
            <div class="col-1 border center">1</div>
            <div class="col-1 border center">1</div>
            <div class="col-1 border center">1</div>
        </div>
    </div>
    <div id="cards" class="grid">
        <h3>Cards & Tabs</h3>
        <div class="row">
            <div class="col-6">
                <div class="card">
                    <h5>Card Title</h5>
                    <p class="title">Title description</p>
                    <p>Regular Card body text</p>
                </div>
            </div>
            <div class="col-6">
                <div class="card elevated">
                    <h5>Elevated Card Title</h5>
                    <p class="title">Title description</p>
                    <p>Card body text</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
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
            </div>
            <div class="col-6">
                <div class="card title">
                    <h5>Card Title First</h5>
                    <img src="src/img/example.jpg" alt>
                    <p>Card body text text with image and buttons</p>
                    <div class="buttons">
                        <button class="text">More Info</button>
                        <button class="text">Close</button>
                        <button class="text icon"><i class="fas fa-ellipsis-v"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="tabs">
                    <button class="tab active">Tab 1</button>
                    <button class="tab">Tab 2</button>
                    <button class="tab">Tab 3</button>
                    <button class="tab">Tab 4</button>
                    <button class="tab">Tab 5</button>
                    <button class="tab">Tab 6</button>
                    <button class="tab">Tab 7</button>
                    <button class="tab">Tab 8</button>
                    <button class="tab">Tab 9</button>
                    <button class="tab">Tab 10</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="tabs wide">
                    <button class="tab active"><i class="fas fa-thumbs-up"></i>Like</button>
                    <button class="tab"><i class="fas fa-share-alt"></i>Share</button>
                    <button class="tab"><i class="fas fa-heart"></i>Favorite</button>
                    <button class="tab"><i class="fas fa-star"></i>Star</button>
                </div>
            </div>
        </div>
    </div>
    <div id="typo" class="grid">
        <h3>Typo</h3>
        <p class="title">Uses Open Sans out from the box (300 & 600 only, but you can add more if needed)</p>
        <div class="row">
            <div class="col-12">
                <h1 class="p0">Header 1</h1>
                <h2 class="p0">Header 2</h2>
                <h3 class="p0">Header 3</h3>
                <h4 class="p0">Header 4</h4>
                <h5 class="p0">Header 5</h5>
                <h6 class="p0">Header 6</h6>
                <p>Paragraph</p>
                <hr>
                <p>Divider</p>
            </div>
        </div>
    </div>
    <div id="tables" class="grid">
        <h3>Tables</h3>
        <div class="row">
            <div class="col-12 overflow border">
                <table>
                    <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                        <th>Header 3</th>
                        <th>Header 4</th>
                        <th>Header 5</th>
                        <th>Header 6</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Cell A1</td>
                        <td>Cell A2</td>
                        <td>Cell A3</td>
                        <td>Cell A4</td>
                        <td>Cell A5</td>
                        <td>Cell A6</td>
                    </tr>
                    <tr>
                        <td>Cell B1</td>
                        <td>Cell B2</td>
                        <td>Cell B3</td>
                        <td>Cell B4</td>
                        <td>Cell B5</td>
                        <td>Cell B6</td>
                    </tr>
                    <tr>
                        <td>Cell C1</td>
                        <td>Cell C2</td>
                        <td>Cell C3</td>
                        <td>Cell C4</td>
                        <td>Cell C5</td>
                        <td>Cell C6</td>
                    </tr>
                    <tr>
                        <td>Cell D1</td>
                        <td>Cell D2</td>
                        <td>Cell D3</td>
                        <td>Cell D4</td>
                        <td>Cell D5</td>
                        <td>Cell D6</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div id="lists" class="grid">
        <h3>Lists & Chips</h3>
        <div class="row">
            <div class="col-12">
                <div class="chip">Basic Chip</div>
                <div class="chip"><i class="fas fa-star"></i>Chip with Icon</div>
                <div class="chip fill">Filled Chip</div>
                <div class="chip fill dismiss">Closable Chip<i class="fas fa-times"></i></div>
                <div class="chip"><img src="src/img/avatar.jpg" alt>Image and Name Chip</div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <h5>Single-Line List</h5>
                    <ul>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li class="hideOnSmall">List Item</li>
                        <li class="hideOnSmall">List Item</li>
                        <li class="hideOnSmall">List Item</li>
                    </ul>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <h5>Two-Line List</h5>
                    <ul class="two">
                        <li>List Item <p>Secondary text</p></li>
                        <li>List Item <p>Secondary text</p></li>
                        <li class="hideOnSmall">List Item <p>Secondary text</p></li>
                        <li class="hideOnSmall">List Item <p>Secondary text</p></li>
                        <li class="hideOnSmall">List Item <p>Secondary text</p></li>
                    </ul>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <h5>Three-Line List</h5>
                    <ul class="three">
                        <li>List Item
                            <p>Secondary text</p>
                            <p>Tertiary text</p>
                        </li>
                        <li>List Item
                            <p>Secondary text</p>
                            <p>Tertiary text</p>
                        </li>
                        <li class="hideOnSmall">List Item
                            <p>Secondary text</p>
                            <p>Tertiary text</p>
                        </li>
                        <li class="hideOnSmall">List Item
                            <p>Secondary text</p>
                            <p>Tertiary text</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <h5>1-Line + Icon</h5>
                    <ul class="icon">
                        <li>List Item<i class="far fa-star"></i></li>
                        <li>List Item<i class="far fa-star"></i></li>
                        <li>List Item<i class="far fa-star"></i></li>
                    </ul>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <h5>2-Line + Icon & Image</h5>
                    <ul class="two icon image">
                        <li>List Item
                            <p>Secondary text</p>
                            <i class="far fa-star"></i>
                            <img src="src/img/avatar.jpg" alt>
                        </li>
                        <li>List Item
                            <p>Secondary text</p>
                            <i class="far fa-star"></i>
                            <img src="src/img/avatar.jpg" alt>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <h5>3-Line + Image</h5>
                    <ul class="three image">
                        <li>List Item
                            <p>Secondary text</p>
                            <p>Tertiary text</p>
                            <img src="src/img/avatar.jpg" alt>
                        </li>
                        <li>List Item
                            <p>Secondary text</p>
                            <p>Tertiary text</p>
                            <img src="src/img/avatar.jpg" alt>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id="gallery" class="grid">
        <h3>Image Gallery</h3>
        <div class="row">
            <div class="col-12 hideOnSmall">
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
            </div>
            <div class="col-12 hideOnSmall">
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
            </div>
            <div class="col-12">
                <div class="gallery two">
                    <div class="item">
                        <img src="src/img/example.jpg" alt="">
                        <p>Image Info <i class="far fa-star"></i></p>
                    </div>
                    <div class="item round">
                        <img src="src/img/example2.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="navigation" class="grid hideOnSmall">
        <h3>Navigation</h3>
        <p class="title">Only affects desktop view, on mobile is always collapsed. If Rail is on on mobile is always visible</p>
        <div class="row">
            <div class="col-12">
                <button onclick="$('body').toggleClass('menuAlwaysHidden')">Toggle NavBar View</button>
                <button onclick="
                    $('nav').toggleClass('rail');
                    $('main').toggleClass('hasNav').toggleClass('hasRail');
                    $('footer').toggleClass('hasNav').toggleClass('hasRail');">Toggle Rail View
                </button>
            </div>
        </div>
    </div>
    <div id="dialog" class="grid">
        <h3>Dialogs, Sheets & Snackbar</h3>
        <div class="row">
            <div class="col-12">
                <button onclick="
                    $.dialog(
                        'Dialog body very, very, long text example for testing purposes',
                        {
                            title: 'Dialog Header',
                            buttons: [
                                { text: 'Action 1', id: 'action1' },
                                { text: 'Action 2', id: 'action2' }
                            ]
                        }
                    )">Show Dialog
                </button>
                <button onclick="
                    $.sheet(
                        'bottom',
                        '<h5>Bottom Sheet</h5><p class=\'title\'>It\'s a card! you can add html on it!</p><p>And any Text you want.</p>'
                    )">Bottom Sheet
                </button>
                <button onclick="
                    $.sheet(
                        'side',
                        '<h5>Side Sheet</h5><p class=\'title\'>It\'s a card! you can add html on it!</p><p>And any Text you want.</p>'
                    )">Side Sheet
                </button>
                <button onclick="$.snackbar('This will be dismissed in 3 secs')">Timed Snackbar</button>
                <button onclick="$.snackbar('This will stay here until you click on: ', 'Dismiss')">Snackbar</button>
                <button data-tooltip="Very Long Description">Tooltip</button>
            </div>
        </div>
    </div>
    <div id="progress" class="grid">
        <h3>Progress Indicators</h3>
        <h4 class="sub">Environment</h4>
        <p class="title">Indeterminate loading indicators on screen that applies to environment processes</p>
        <div class="row">
            <div class="col-12">
                <button onclick="showAsyncProgressBar(3)">Async Bar</button>
                <button onclick="showSyncProgressBar(3)">Sync Circular</button>
            </div>
        </div>
        <h4 class="sub">Inline</h4>
        <div class="row">
            <div class="col-3">
                <p>25%</p>
                <div class="linearIndicator">
                    <div class="fixed" style="width: 25%"></div>
                </div>
            </div>
            <div class="col-3">
                <p>50%</p>
                <div class="linearIndicator">
                    <div class="fixed" style="width: 50%"></div>
                </div>
            </div>
            <div class="col-3">
                <p>100%</p>
                <div class="linearIndicator">
                    <div class="fixed" style="width: 100%"></div>
                </div>
            </div>
            <div class="col-3">
                <p>Indeterminate</p>
                <div class="linearIndicator">
                    <div class="bar"></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <p>Circular 25%</p>
                <svg class="circleIndicator" data-percent="25"></svg>
            </div>
            <div class="col-3">
                <p>Circular 50%</p>
                <svg class="circleIndicator" data-percent="50"></svg>
            </div>
            <div class="col-3">
                <p>Circular 70%</p>
                <svg class="circleIndicator" data-percent="75"></svg>
            </div>
            <div class="col-3">
                <p>Circular Indeterminate</p>
                <svg class="circleIndicatorIndeterminate"></svg>
            </div>
        </div>
    </div>
    <div id="forms" class="grid">
        <h3>Forms</h3>
        <p class="title">All components almost out of the box (no classes needed for default styles)</p>
        <h4 class="sub">Buttons</h4>
        <p class="title">This style applies to button and a.button</p>
        <div class="row">
            <div class="col-4 center">
                <button><i class="fas fa-star"></i>button</button>
            </div>
            <div class="col-4 center">
                <button class="fill"><i class="fas fa-star"></i>button .fill</button>
            </div>
            <div class="col-4 center">
                <button class="text"><i class="fas fa-star"></i>button .text</button>
            </div>
        </div>
        <div class="row">
            <div class="col-4 center">
                <button class="square"><i class="fas fa-star"></i>button .square</button>
            </div>
            <div class="col-4 center">
                <button class="round fill"><i class="fas fa-star"></i>.round.fill</button>
            </div>
            <div class="col-4 center">
                <button disabled><i class="fas fa-times"></i>disabled</button>
            </div>
        </div>
        <div class="row">
            <div class="col-4 center">
                <button class="fab pulse"><i class="fas fa-plus"></i></button>
            </div>
            <div class="col-4 center">
                <button class="fab fill"><i class="fas fa-pen"></i></button>
            </div>
            <div class="col-4 center">
                <button class="fab text"><i class="fas fa-link"></i></button>
            </div>
        </div>
        <h4 class="sub">Input Fields</h4>
        <div class="row form">
            <div class="col-3">
                <label for="default">Default</label>
                <input id="default" type="text" placeholder="Text field">
            </div>
            <div class="col-3">
                <label for="leading">Leading Icon <i class="fas fa-star"></i></label>
                <input id="leading" class="leading" type="text" placeholder="icon to left">
            </div>
            <div class="col-3">
                <label for="trailing" class="trailing">Trailing Icon <i class="fas fa-star"></i></label>
                <input id="trailing" class="trailing" type="text" placeholder="icon to right">
                <span class="input">* Required</span>
            </div>
            <div class="col-3">
                <label for="error" class="error">With error</label>
                <input id="error" class="error" type="text" placeholder="Invalid data">
                <span class="input error">Error info</span>
            </div>
        </div>
        <div class="row form">
            <div class="col-3">
                <label for="disabled">Disabled</label>
                <input id="disabled" type="text" value="Fixed value" disabled>
            </div>
            <div class="col-3">
                <label for="select">Select</label>
                <select id="select">
                    <option>Item 1</option>
                    <option>Item 2</option>
                    <option>Item 3</option>
                </select>
            </div>
            <div class="col-3">
                <label for="select3">Error</label>
                <select id="select3" class="error" disabled>
                    <option>Disabled</option>
                    <option>Disabled 1</option>
                    <option>Disabled 1</option>
                </select>
                <span class="input">Unavailable</span>
            </div>
            <div class="col-3">
                <input type="submit" class="fill" value="Submit">
            </div>
        </div>
        <div class="row form">
            <div class="col-6">
                <label for="rng1">Range 1 <span class="range">25</span></label>
                <input id="rng1" type="range" value="25">
            </div>
            <div class="col-6">
                <label for="rng2">Disabled <span class="range">50</span></label>
                <input id="rng2" type="range" value="50" disabled>
            </div>
        </div>
        <h4 class="sub">Radio & Checkbox</h4>
        <div class="row form">
            <div class="col-3">
                <label for="chk1" class="checkbox">Checkbox 1</label>
                <input id="chk1" type="checkbox" checked>
            </div>
            <div class="col-3">
                <label for="chk2" class="checkbox">Checkbox 2</label>
                <input id="chk2" type="checkbox">
            </div>
            <div class="col-3">
                <label for="chk3" class="checkbox">Checkbox 3</label>
                <input id="chk3" type="checkbox">
            </div>
            <div class="col-3 hideOnSmall">
                <label for="chk4">Compare</label>
                <input id="chk3" type="text" placeholder="Alignment">
            </div>
        </div>
        <div class="row form">
            <div class="col-3">
                <label for="sw1" class="switch">Switch 1</label>
                <input id="sw1" class="switch" type="checkbox" checked>
            </div>
            <div class="col-3">
                <label for="sw2" class="switch">Switch 2</label>
                <input id="sw2" class="switch" type="checkbox">
            </div>
            <div class="col-3">
                <label for="sw3" class="switch">Switch 3</label>
                <input id="sw3" class="switch" type="checkbox">
            </div>
            <div class="col-3 hideOnSmall">
                <label for="sw4">Compare</label>
                <input id="sw3" type="text" placeholder="Alignment">
            </div>
        </div>
        <div class="row form">
            <div class="col-3">
                <label for="rd1" class="radio">Radio 1</label>
                <input id="rd1" name="radio" type="radio" checked>
            </div>
            <div class="col-3">
                <label for="rd2" class="radio">Radio 2</label>
                <input id="rd2" name="radio" type="radio">
            </div>
            <div class="col-3">
                <label for="rd3" class="radio">Radio 3</label>
                <input id="rd3" name="radio" type="radio">
            </div>
            <div class="col-3 hideOnSmall">
                <label for="rd4">Compare</label>
                <input id="rd3" type="text" placeholder="Alignment">
            </div>
        </div>
    </div>
</main>
<footer class="hasNav">
    <div id="" class="grid">
        <div class="row">
            <div class="col-12">
                <h6><img src="src/img/isotype.svg" style="height:2rem;margin: 0 1rem -0.5rem 0" alt=""> Acode Design & Development</h6>
                <p>Simple Framework adapts Material & Mobile First guidelines on components to support most of the best practices
                    of UI in the lightest way possible for designers and developers to lightning fast build apps and websites.</p>
                <hr>
                <div class="right">
                    <a class="button text slim" href="src/acode.min.css" target="_blank"><i class="fab fa-css3 m0"></i></a>
                    <a class="button text slim" href="src/acode.min.js" target="_blank"><i class="fab fa-js m0"></i></a>
                    <a class="button text slim" href="https://github.com/AndresRobert/Simple-Framework" target="_blank"><i class="fab fa-github m0"></i></a>
                    <a class="button text slim" href="mailto:contact@acode.cl" target="_blank"><i class="fas fa-envelope m0"></i></a>
                    <a class="button text slim" href="https://www.acode.cl" target="_blank"><img src="src/img/icon.svg" class="fa" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</footer>
<script src="src/acode.js?v=<?=$v?>"></script>
<script src="https://kit.fontawesome.com/a93fffc8fc.js" crossorigin="anonymous"></script>
<script>
    let showAsyncProgressBar = time => {
        $.loading.async();
        setTimeout(() => $.loading.dismiss(), time * 1000)
    };

    let showSyncProgressBar = time => {
        $.loading.sync();
        setTimeout(() => $.loading.dismiss(), time * 1000)
    };
</script>
</body>
</html>