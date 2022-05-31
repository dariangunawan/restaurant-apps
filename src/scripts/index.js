import 'regenerator-runtime'; /* for async await transpile */
import '../styles/base.css';
import '../styles/navbar.css';
import '../styles/skip-link.css';
import '../styles/jumbotron.css';
import '../styles/footer.css';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
// import swRegister from './utils/sw-register';
import './views/components/component';

import ('../DATA.json').then(({default: jsonData}) => {
    console.log(jsonData)
    let datas = jsonData['restaurants']
    let dataList = '';
    datas.forEach(function(data) {
        dataList +=`
        <div class="list_item">
            <img class="thumbnail" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
            <div class="city">${data['city']}</div>
            <div class="list_item_content">
                <p class="rating">
                    Rating: <a href="#" class="rating_value">${data['rating']}</a>
                </p>
                <h1 class="list_item_title"><a href="#">${data['name']}</a></h1>
                <div class="description">${data['description'].slice(0, 150)}...</div>
            </div>
        </div>
        `;
    });
    document.querySelector('#tes').innerHTML = dataList;  
});

const app = new App({
    content: document.querySelector('#content'),
    menu: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    main: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});