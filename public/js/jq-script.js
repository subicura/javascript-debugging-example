$(function() {
    $('#fetchGithubBtn').click(() => {
        var githubUserId = $('#githubUser').val();
        if (!githubUserId) {
            alert('ID is required!');
            $('#avatar').html('ID is required!');
            return;
        }

        /*
            {
                "login": "subicura",
                "id": 67347,
                "avatar_url": "https://avatars2.githubusercontent.com/u/67347?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/subicura",
                "html_url": "https://github.com/subicura",
                "followers_url": "https://api.github.com/users/subicura/followers",
                "following_url": "https://api.github.com/users/subicura/following{/other_user}",
                "gists_url": "https://api.github.com/users/subicura/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/subicura/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/subicura/subscriptions",
                "organizations_url": "https://api.github.com/users/subicura/orgs",
                "repos_url": "https://api.github.com/users/subicura/repos",
                "events_url": "https://api.github.com/users/subicura/events{/privacy}",
                "received_events_url": "https://api.github.com/users/subicura/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Chungsub Kim",
                "company": "purpleworks",
                "blog": "http://subicura.com",
                "location": "seoul",
                "email": null,
                "hireable": null,
                "bio": "developer",
                "public_repos": 73,
                "public_gists": 12,
                "followers": 82,
                "following": 14,
                "created_at": "2009-03-26T08:15:03Z",
                "updated_at": "2018-01-06T15:57:27Z"
            }
        */
        if (githubUserId) {
            var endpoint = 'https://api.github.com';
            var url = endpoint + '/users/' + githubUserId;
            fetch(url).then(res => res.json()).then(data => updateGithubUserInfo(data));
        }
    });

    function updateGithubUserInfo(data) {
        $('#result').html(`<div id="avatar"><p>${data.html_url}</p><p>${data.name} / ${data.company}</p><img src="${data.avatar_url}"></div>`);
    }
});
