function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(comments => displayComments(comments))
}

function displayComments(comments) {
    const commentContainer = document.getElementById('comments-container')
    for (comment of comments) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment')
        commentDiv.innerHTML = `
        <p>ID: ${comment.id}</p>
        <p>Name: ${comment.name}</p>
        <p>Email: ${comment.email}</p>
        `
        commentContainer.appendChild(commentDiv)
    }
}
loadComments();