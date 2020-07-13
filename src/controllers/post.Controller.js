import view from "../views/post.html";

const getPost = async () => {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await reponse.json();
}

export default async () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    const post = await getPost();
    let ulList = divElement.querySelector('#ulList');
    let html = '';
    post.map(post1 => {
        let li = createElement('li');
        html = ''
    });
    console.log(post);
    return divElement;
}