function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => displayPost(posts))
}

function displayPost(posts) {
    const postContainer = document.getElementById('post-container')
    for (post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('postDiv');
        postDiv.innerHTML = `
        <h3>User: ${post.userId}</h3>
        <h4>Title: ${post.title}</h4>
        <p>Description: ${post.body}</p>
        `;
        postContainer.appendChild(postDiv)

    }
}

loadPost();