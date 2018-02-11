// add post
function updatePost(post) {
    var postHtml = '';
    postHtml += '<blockquote class="blockquote text-center">';
    postHtml += '  <p class="mb-0">' + post.name + '</p>';
    postHtml += '  <footer class="blockquote-footer">' + post.message + '</footer>';
    postHtml += '</blockquote>';

    var currentResultHtml = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = currentResultHtml + postHtml;
}

// bind submit event
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var nameEl = document.getElementById('name');
    var messageEl = document.getElementById('message');
    var name = nameEl.value;
    var message = messageEl.value;
    var post = {
        name: name,
        message: message
    };

    if (!name) {
        alert('Name is required!');
        return;
    }

    if (!message) {
        alert('Message is required!');
        return;
    }

    // update posts
    updatePost(post);

    // clear textbox
    nameEl.value = '';
    messageEl.value = '';
});
