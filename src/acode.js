// Base

$ = sel => {
    const el = document.querySelectorAll(sel);
    return el.length === 0 ? document.createElement('div') : el[0];
};
$$ = sel => {
    const el = document.querySelectorAll(sel);
    return el;
};
$.ready = fn => {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
};

// Prototypes

const pro = HTMLElement.prototype;
pro.on = function (eventName, eventHandler) {
    this.addEventListener(eventName, eventHandler);
    return this;
};
pro.val = function (newVal) {
    if (newVal === undefined)  return this.value;
    this.value = newVal;
    return this;
};
pro.html = function (html) {
    if (html === undefined) return this.innerHTML;
    this.innerHTML = html;
    return this;
};
pro.append = function (html) {
    this.innerHTML = this.innerHTML + html;
    return this;
};
pro.prepend = function (html) {
    this.innerHTML = html + this.innerHTML;
    return this;
};
pro.addClass = function (className) {
    this.classList.add(className);
    return this;
};
pro.removeClass = function (className) {
    this.classList.remove(className);
    return this;
};
pro.toggleClass = function (className) {
    this.classList.toggle(className);
    return this;
};
pro.hide = function () {
    this.style.display = 'none';
    return this;
};
pro.show = function () {
    if (this.style.display === 'none') this.style.display = '';
    return this;
};
pro.remove = function () {
    this.parentNode.removeChild(this);
};
pro.attr = function (attributeName, value) {
    if (typeof value === 'undefined') return this.getAttribute(attributeName);
    this.setAttribute(attributeName, value);
    return this;
};
pro.hasClass = function (className) {
    return this.classList.contains(className);
};
pro.prev = function () {
    return this.previousElementSibling;
};
pro.next = function () {
    return this.nextElementSibling;
};
pro.parent = function () {
    return this.parentNode;
};
pro.find = function (sel) {
    return this.querySelectorAll(sel);
};
pro.fadeRemove = function () {
    this.addClass('fadeOut');
    setTimeout(() => this.remove(), 200);
};

// Components
/*
// How to use
Render(
    div({ id: 'app', className: 'card' },
        header({ className: 'header' },
            h1({ className: 'header_title' }, 'Simple Framework'),
            a(
                {
                    className: 'button',
                    target: '_blank',
                    alt: 'Find out more about Simple Framework',
                    href: 'https://simple.acode.cl',
                },
                'What is this?',
            ),
        ),
    )
);
*/

$.attributeExceptions = ['role'];
$.setTxt = (el, text) => {
    const textNode = document.createTextNode(text);
    el.appendChild(textNode);
};
$.addArry = (el, children) => {
    children.forEach((child) => {
        if (Array.isArray(child)) $.addArry(el, child);
        else if (child instanceof window.Element) el.appendChild(child);
        else if (typeof child === 'string') $.setTxt(el, child);
    });
};
$.setAttr = (el, styles) => {
    if (!styles) {
        el.removeAttribute('styles');
        return;
    }
    Object.keys(styles).forEach((styleName) => {
        if (styleName in el.style) {
            el.style[styleName] = styles[styleName]; // eslint-disable-line no-param-reassign
        }
        else {
            console.warn(`${ styleName } is not a valid style for a <${ el.tagName.toLowerCase() }>`);
        }
    });
};
$.create = (type, textOrPropsOrChild, ...children) => {
    const el = document.createElement(type);
    if (Array.isArray(textOrPropsOrChild)) $.addArry(el, textOrPropsOrChild);
    else if (textOrPropsOrChild instanceof window.Element) el.appendChild(textOrPropsOrChild);
    else if (typeof textOrPropsOrChild === 'string') $.setTxt(el, textOrPropsOrChild);
    else if (typeof textOrPropsOrChild === 'object') {
        Object.keys(textOrPropsOrChild).forEach((propName) => {
            if (propName in el || $.attributeExceptions.includes(propName)) {
                const value = textOrPropsOrChild[propName];
                if (propName === 'style') $.setAttr(el, value);
                else if (value) el[propName] = value;
            }
            else console.warn(`${ propName } is not a valid property of a <${ type }>`);
        });
    }
    if (children) $.addArry(el, children);
    return el;
};

const a = (...args) => $.create('a', ...args);
const button = (...args) => $.create('button', ...args);
const div = (...args) => $.create('div', ...args);
const footer = (...args) => $.create('footer', ...args);
const h1 = (...args) => $.create('h1', ...args);
const h2 = (...args) => $.create('h2', ...args);
const h3 = (...args) => $.create('h3', ...args);
const h4 = (...args) => $.create('h4', ...args);
const h5 = (...args) => $.create('h5', ...args);
const h6 = (...args) => $.create('h6', ...args);
const header = (...args) => $.create('header', ...args);
const img = (...args) => $.create('img', ...args);
const main = (...args) => $.create('main', ...args);
const nav = (...args) => $.create('nav', ...args);
const p = (...args) => $.create('p', ...args);
const span = (...args) => $.create('span', ...args);
const SVGcircle = () => document.createElementNS('http://www.w3.org/2000/svg', 'circle') ;
const Render = html => document.body.appendChild(html);

// Custom Components

const Dialog = props => (
    div({ className: 'overlay' },
        div({ className: 'card elevated' },
            h5(props.title),
            p(props.message),
            div({ className: 'buttons right' }, props.buttons)
        )
    )
);

const SheetBottom = props => (
    div({ className: 'overlay sheet-bottom' },
        div({ className: 'card', id: props.id })
    )
);

const SheetSide = props => (
    div({ className: 'overlay sheet-side' },
        div({ className: 'card', id: props.id })
    )
);

const Gallery = props => (
    div({ className: 'overlay', id: 'sfGallery' },
        img({ className: 'galleryFullImage', alt: '', src: props.src })
    )
);

const AsyncLoadingBar = () => (
    div({ className: 'asyncProgressIndicator', id: 'sfAsyncLoadingBar' },
        div({ className: 'bar' })
    )
);

const SyncLoadingCircle = () => {
    let _circle = SVGcircle();
    _circle.setAttribute('cx', '50');
    _circle.setAttribute('cy', '50');
    _circle.setAttribute('r', '20');
    _circle.setAttribute('fill', 'none');
    _circle.setAttribute('stroke-width', '5');
    _circle.setAttribute('stroke-miterlimit', '10');
    let _svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    _svg.appendChild(_circle);
    let _div = document.createElement('div');
    _div.addClass('syncProgressIndicator');
    _div.appendChild(_svg);
    let _overlay = document.createElement('div');
    _overlay.addClass('overlay');
    _overlay.id = 'sfSyncLoadingCircle';
    _overlay.appendChild(_div);
    return _overlay;
};

// Functions

/**
 *
 * @param item
 * @returns {boolean}
 */
$.isset = item => {
    return item instanceof Element ? $.exists(item) : typeof item !== 'undefined' && item !== null;
};

/**
 *
 *  ajax('https://acode.cl/test', { parameter: 9 })
 *  .then( response => {
 *      console.log(response); // JSON data parsed by 'response.json()' call
 *  });
 *
 * @param url
 * @param data
 * @param options
 * @returns {Promise}
 *
 */
$.ajax = async function (url = '', data = {}, options = {}) {
    const method = $.isset(options.method)
        ? options.method
        : 'POST', // *GET, POST, PUT, DELETE, etc.
    contentType = $.isset(options.content_type)
        ? options.content_type
        : { 'Content-Type': 'application/json' }, // 'Content-Type': 'application/x-www-form-urlencoded'
    cors = $.isset(options.cors)
        ? options.cors // no-cors, *cors, same-origin
        : 'cors',
    cache = $.isset(options.cache)
        ? options.cache // *default, no-cache, reload, force-cache, only-if-cached
        : 'no-cache',
    credentials = $.isset(options.credentials)
        ? options.credentials // include, *same-origin, omit
        : 'same-origin',
    redirect = $.isset(options.redirect)
        ? options.redirect // manual, *follow, error
        : 'follow',
    policy = $.isset(options.policy)
        ? options.policy // no-referrer, *client
        : 'no-referrer',
        response = await fetch(url, {
        method: method,
        mode: cors,
        cache: cache,
        credentials: credentials,
        redirect: redirect,
        referrerPolicy: policy,
        headers: contentType,
        body: JSON.stringify(data) // body data type must match 'Content-Type' header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
};

$.cookie = {};
$.cookie.set = (name, value, days = 90) => {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
};
$.cookie.get = name => {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};
$.cookie.delete = name => document.cookie = name + '=; Max-Age=-99999999;';

$.exists = sel => sel instanceof Element ? document.body.contains(sel) : document.body.contains($(sel));

// Framework

$.dialog = (message = '', options = {}) => {
    let title = $.isset(options.title) ? options.title : 'Information',
        buttons = $.isset(options.buttons) ? options.buttons : [],
        _buttons = [];
    buttons.forEach(_button => {
        let _id = $.isset(_button.id) ? _button.id : '',
            _text = $.isset(_button.text) ? _button.text : '';
        if (_text !== '') {
            _buttons.push(button({ className: 'text', id: _id }, _text));
        }
    });
    Render(Dialog({ title: title, message: message, buttons: _buttons }));
    $.init('overlay');
};

$.sheet = (type = '', html = '') => {
    if (type === 'side') {
        Render(SheetSide({ id: 'sfSheet' }));
    }
    else {
        Render(SheetBottom({ id: 'sfSheet' }));
    }
    $('#sfSheet').innerHTML = html;
    $.init('overlay');
};

$.fullscreenImg = src => {
    if ($.isset(src)) {
        Render(Gallery({ src: src }));
        $('#sfGallery').on('click', () => {
            $('#sfGallery').fadeRemove();
        });
    }
};

$.loading = {};
$.loading.async = () => Render(AsyncLoadingBar());
$.loading.sync = () => Render(SyncLoadingCircle());
$.loading.dismiss = () => {
    let sfAsyncLoadingBar = $('#sfAsyncLoadingBar'),
        sfSyncLoadingCircle = $('#sfSyncLoadingCircle');
    if ($.exists('#sfAsyncLoadingBar')) sfAsyncLoadingBar.fadeRemove();
    if ($.exists('#sfSyncLoadingCircle')) sfSyncLoadingCircle.fadeRemove();
};

$.snackbarId = 1;
$.snackbar = (message, button = '') => {
    let _id = $.snackbarId++,
    _container = $('.snackbarContainer');
    if (button === '') {
        _container.appendChild(div({ id: 'snackItem' + _id }, message));
        let _time = message.length * 20 + 3000;
        setTimeout(() => $('#snackItem' + _id).fadeRemove() , _time);
    }
    else {
        _container.appendChild(div({ id: 'snackItem' + _id }, message, span(button)));
        let _snackbar = $('#snackItem' + _id);
        _snackbar.find('span')[0].on('click', () => _snackbar.fadeRemove());
    }
};

$.inView = (element, threshold = 0) => {
    const rect = element.getBoundingClientRect();
    const vpWidth = window.innerWidth;
    const vpHeight = window.innerHeight;
    const above = rect && rect.bottom - threshold <= 0;
    const below = rect && rect.top - vpHeight + threshold >= 0;
    const left = rect && rect.right - threshold <= 0;
    const right = rect && rect.left - vpWidth + threshold >= 0;
    const inside = !!rect && !above && !below && !left && !right;
    return { inside, above, below, left, right };
};

$.init = component => {
    switch (component) {
        case 'nav':
            let items = $('nav').find('a');
            items.forEach((item, index, list) => {
                item.on('click', e => {
                    list.forEach(link => { link.removeClass('active') });
                    e.target.addClass('active');
                    $('nav').removeClass('active');
                });
            });
            break;
        case 'followScroll':
            let active = true;
            window.addEventListener('scroll', () => {
                const item = $('.followScroll').find('a'),
                    first = 0,
                    last = item.length - 1,
                    scrollTop = ((document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop) === 0,
                    scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight,
                    scrolledToBottom = (((document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop) + window.innerHeight) >= scrollHeight;
                if (item.length > 0) {
                    if (scrollTop) {
                        if (!item[first].hasClass('active')) {
                            item.forEach(e => { e.removeClass('active') });
                            item[first].addClass('active')
                        }
                    }
                    else
                        if (scrolledToBottom) {
                            if (!item[last].hasClass('active')) {
                                item.forEach(e => { e.removeClass('active') });
                                item[last].addClass('active')
                            }
                        }
                        else {
                            item.forEach(e => {
                                let { inside } = $.inView($(e.attr('href')));
                                if (!active) {
                                    if (inside && !e.hasClass('active')) {
                                        e.addClass('active');
                                        active = true;
                                    }
                                }
                                else {
                                    if (!inside && e.hasClass('active')) {
                                        e.removeClass('active');
                                        active = false;
                                    }
                                }
                            });
                        }
                }
            });
            break;
        case 'snackbar':
            Render(div({ className: 'snackbarContainer' }));
            break;
        case 'overlay':
            let overlays = $$('.overlay');
            overlays.forEach(overlay => {
                overlay.on('click', e => {
                    if (e.target.hasClass('overlay')) {
                        overlay.fadeRemove();
                    }
                });
            });
            break;
        case 'gallery':
            let galleries = $$('.gallery');
            galleries.forEach(gallery => {
                let images = gallery.find('img');
                images.forEach((item, index, list) => {
                    let _height = item.height;
                    let _width = item.width;
                    if (_height < _width) {
                        item.addClass('narrower');
                    }
                    item.on('click', e => {
                        $.fullscreenImg(e.target.attr('src'));
                    });
                });
            });
            break;
        case 'circleIndicator':
            let indicators = $$('.circleIndicator');
            indicators.forEach(indicator => {
                let circleBG = SVGcircle();
                circleBG.setAttribute('cx', '24');
                circleBG.setAttribute('cy', '24');
                circleBG.setAttribute('r', '22');
                circleBG.style.strokeDasharray = '100 0';
                indicator.appendChild(circleBG);
                let circle = SVGcircle();
                circle.setAttribute('cx', '24');
                circle.setAttribute('cy', '24');
                circle.setAttribute('r', '22');
                const circumference = 44 * Math.PI;
                circle.style.strokeDasharray = `${ circumference } ${ circumference }`;
                circle.style.strokeDashoffset = '' + (circumference - indicator.dataset.percent / 100 * circumference);
                indicator.appendChild(circle);
            });
            let indeterminateIndicators = $$('.circleIndicatorIndeterminate');
            indeterminateIndicators.forEach(indicator => {
                let circle = SVGcircle();
                circle.setAttribute('cx', '24');
                circle.setAttribute('cy', '24');
                circle.setAttribute('r', '22');
                circle.style.strokeDasharray = '1, 200';
                circle.style.strokeDashoffset = '0';
                indicator.appendChild(circle);
            });
            break;
        case 'range':
            let ranges = $$('input[type="range"]');
            ranges.forEach(range => {
                range.on('input', e => {
                    e.target.prev().find('.range')[0].html(e.target.value);
                });
            });
            break;
        case 'tabs':
            let tabContainers = $$('.tabs');
            tabContainers.forEach(tabContainer => {
                tabContainer.find('.tab').forEach((tab, i, _tabs) => {
                    tab.on('click', e => {
                        _tabs.forEach(_tab => _tab.removeClass('active'));
                        e.target.addClass('active');
                    });
                });
            });
            break;
        case 'tooltip':
            if (!$.exists('#sfTooltip')) {
                Render(span({ id: 'sfTooltip', className: 'tooltip' }, ''));
                window.onscroll = () => _tooltip.removeClass('show');
            }
            let _tooltip = $('#sfTooltip');
            let hasTooltips = $$('[data-tooltip]');
            hasTooltips.forEach(hasTooltip => {
                hasTooltip.on('mouseenter', e => {
                    let element = e.target,
                        message = element.dataset.tooltip;
                    _tooltip.html(message);
                    let { right, bottom, left } = element.getBoundingClientRect();
                    _tooltip.style.top = (bottom + 10) + 'px';
                    _tooltip.style.left = (left + (right - left) / 2) + 'px';
                    _tooltip.style.maxWidth = (element.clientWidth + 10) + 'px';
                    _tooltip.style.marginLeft = '-' + (_tooltip.clientWidth / 2) + 'px';
                    _tooltip.addClass('show');
                });
                hasTooltip.on('mouseleave', () => _tooltip.removeClass('show'));
                hasTooltip.on('touchstart', e => {
                    let element = e.target,
                        message = element.dataset.tooltip;
                    _tooltip.html(message);
                    let { right, bottom, left } = element.getBoundingClientRect();
                    _tooltip.style.top = (bottom + 10) + 'px';
                    _tooltip.style.left = (left + (right - left) / 2) + 'px';
                    _tooltip.style.maxWidth = (element.clientWidth + 10) + 'px';
                    _tooltip.style.marginLeft = '-' + (_tooltip.clientWidth / 2) + 'px';
                    _tooltip.toggleClass('show');
                });
            });
            break;
        default:
    }
};

$.ready(() => {
    $.init('nav');
    $.init('followScroll');
    $.init('snackbar');
    $.init('gallery');
    $.init('circleIndicator');
    $.init('range');
    $.init('tabs');
    $.init('tooltip');
});