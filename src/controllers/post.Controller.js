import view from "../views/post.html";

const getPost = async () => {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await reponse.json();
}

export default async () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    const posts = await getPost();
    const divContentPost = divElement.querySelector('#divPost');
    let html = '';

    posts.map(post => {
        html = '';
        let div = document.createElement('div');
        div.classList.add('divPost');
        div.classList.add('mb-2');
        html += `<h3>${post.title}</h3>`;
        html += `<p>${post.body}</p>`;
        div.innerHTML = html;
        divContentPost.appendChild(div);
    });

    return divElement;
}