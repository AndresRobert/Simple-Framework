// Base

$ = sel => {
    const el = document.querySelectorAll(sel);
    return el.length === 1 ? el[0] : el;
};

$$ = sel => {
    return document.querySelectorAll(sel);
};

$.ready = fn => {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
};

// Prototypes

const pro = HTMLElement.prototype;

pro.on = function (eventName, eventHandler) {
    this.addEventListener(eventName, eventHandler);
};

pro.val = function (newVal) {
    return (newVal !== undefined ? this.value = newVal : this.value);
};

pro.html = function (html) {
    if (html === undefined) return this.innerHTML;
    this.innerHTML = html;
};

pro.append = function (html) {
    this.innerHTML = this.innerHTML + html;
};

pro.prepend = function (html) {
    this.innerHTML = html + this.innerHTML;
};

pro.addClass = function (className) {
    this.classList.add(className);
};

pro.removeClass = function (className) {
    this.classList.remove(className);
};

pro.toggleClass = function (className) {
    this.classList.toggle(className);
};

pro.hide = function () {
    this.style.display = 'none';
};

pro.show = function () {
    if (this.style.display === 'none') this.style.display = '';
};

pro.remove = function () {
    this.parentNode.removeChild(this);
};

pro.attr = function (attributeName, value) {
    return typeof value === 'undefined'
        ? this.getAttribute(attributeName)
        : this.setAttribute(attributeName, value);
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

// Components

/*
// Modo de uso

$(body).append(
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

const attributeExceptions = [
    'role',
];

const appendText = (el, text) => {
    const textNode = document.createTextNode(text);
    el.appendChild(textNode);
};

const appendArray = (el, children) => {
    children.forEach((child) => {
        if (Array.isArray(child)) {
            appendArray(el, child);
        }
        else
            if (child instanceof window.Element) {
                el.appendChild(child);
            }
            else
                if (typeof child === 'string') {
                    appendText(el, child);
                }
    });
};
const setStyles = (el, styles) => {
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
const makeElement = (type, textOrPropsOrChild, ...children) => {
    const el = document.createElement(type);
    if (Array.isArray(textOrPropsOrChild)) {
        appendArray(el, textOrPropsOrChild);
    }
    else
        if (textOrPropsOrChild instanceof window.Element) {
            el.appendChild(textOrPropsOrChild);
        }
        else
            if (typeof textOrPropsOrChild === 'string') {
                appendText(el, textOrPropsOrChild);
            }
            else
                if (typeof textOrPropsOrChild === 'object') {
                    Object.keys(textOrPropsOrChild).forEach((propName) => {
                        if (propName in el || attributeExceptions.includes(propName)) {
                            const value = textOrPropsOrChild[propName];

                            if (propName === 'style') {
                                setStyles(el, value);
                            }
                            else
                                if (value) {
                                    el[propName] = value;
                                }
                        }
                        else {
                            console.warn(`${ propName } is not a valid property of a <${ type }>`);
                        }
                    });
                }
    if (children) appendArray(el, children);
    return el;
};

const a = (...args) => makeElement('a', ...args);
const button = (...args) => makeElement('button', ...args);
const div = (...args) => makeElement('div', ...args);
const footer = (...args) => makeElement('footer', ...args);
const h1 = (...args) => makeElement('h1', ...args);
const h2 = (...args) => makeElement('h2', ...args);
const h3 = (...args) => makeElement('h3', ...args);
const h4 = (...args) => makeElement('h4', ...args);
const h5 = (...args) => makeElement('h5', ...args);
const h6 = (...args) => makeElement('h6', ...args);
const header = (...args) => makeElement('header', ...args);
const img = (...args) => makeElement('img', ...args);
const main = (...args) => makeElement('main', ...args);
const nav = (...args) => makeElement('nav', ...args);
const p = (...args) => makeElement('p', ...args);
const span = (...args) => makeElement('span', ...args);


const Render = (html) => {
    document.body.appendChild(html);
};

// Custom Components

const Dialog = props => (
    div(
        { className: 'overlay', id: 'sfDialog' },
        div(
            { className: 'card elevated' },
            h5(props.title),
            p(props.message),
            div({ className: 'buttons right' }, props.buttons)
        )
    )
);

const Gallery = props => (
    div(
        { className: 'overlay', id: 'sfGallery' },
        img({ className: 'galleryFullImage', alt: '', src: props.src })
    )
);

// Functions

/**
 *
 * @param item
 * @returns {boolean}
 */
const isset = item => {
    return typeof item !== 'undefined' && item !== null;
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
async function ajax (url = '', data = {}, options = {}) {
    const method = isset(options.method)
        ? options.method
        : { 'Content-Type': 'application/json' }; // *GET, POST, PUT, DELETE, etc.
    const contentType = isset(options.content_type)
        ? options.content_type
        : { 'Content-Type': 'application/json' }; // 'Content-Type': 'application/x-www-form-urlencoded'
    const cors = isset(options.cors)
        ? options.cors // no-cors, *cors, same-origin
        : 'cors';
    const cache = isset(options.cache)
        ? options.cache // *default, no-cache, reload, force-cache, only-if-cached
        : 'no-cache';
    const credentials = isset(options.credentials)
        ? options.credentials // include, *same-origin, omit
        : 'same-origin';
    const redirect = isset(options.redirect)
        ? options.redirect // manual, *follow, error
        : 'follow';
    const policy = isset(options.policy)
        ? options.policy // no-referrer, *client
        : 'client';
    const response = await fetch(url, {
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
}

// Framework

$.dialog = (message = '', options = {}) => {
    let title = isset(options.title) ? options.title : 'Information',
        buttons = isset(options.buttons) ? options.buttons : [],
        _buttons = [];
    buttons.forEach(_button => {
        let _id = isset(_button.id) ? _button.id : '',
            _text = isset(_button.text) ? _button.text : '';
        if (_text !== '') {
            _buttons.push(button({ className: 'text', id: _id }, _text));
        }
    });
    Render(Dialog({ title: title, message: message, buttons: _buttons }));
    $('#sfDialog').on('click', e => {
        if (e.target.id === 'sfDialog') {
            e.target.remove();
        }
    });
};

$.fullscreenImg = src => {
    if (isset(src)) {
        Render(Gallery({ src: src }));
        $('#sfGallery').on('click', e => {
            $('#sfGallery').remove();
        });
    }
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
        case 'gallery':
            let galleries = $$('.gallery');
            galleries.forEach((gallery) => {
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
        default:
    }
};

$.ready(() => {
    $.init('nav');
    $.init('gallery');
});