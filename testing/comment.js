function insertComment(commentText) {
    const comment = document.createComment(commentText);
    document.body.appendChild(comment);
}

window.addEventListener("load", (event) => {
    insertComment('The added Javascript is working');
});