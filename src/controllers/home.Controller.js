import view from '../views/home.html';

export default () => {
    console.log(view);
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    const btnClick = divElement.querySelector('#btnClick');
    btnClick.addEventListener('click', () => {
        alert('e');
    });
    return divElement;
}