import {
    pages
} from '../controllers/index'
let contentX = document.getElementById('contentX');

const router = async (route) => {
    contentX.innerHTML = '';
    switch (route) {
        case '': {
            return contentX.appendChild(pages.home());
        }
        case '#/': {
            return contentX.appendChild(pages.home());
        }
        case '#/post':
            return contentX.appendChild(await pages.post());
        case '#/products':
            return console.log('products');
        default:
            return console.log('404!!!!');
    }
}

export {
    router
};