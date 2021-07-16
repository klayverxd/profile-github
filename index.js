const userName = document.getElementById('name')
const userLogin = document.getElementById('login')
const public_repos = document.getElementById('public_repos')
const followers = document.getElementById('followers')
const following = document.getElementById('following')
const avatar_url = document.getElementById('avatar')

function getUserData(login = 'klayverxd') {
	fetch('https://api.github.com/users/' + login)
		.then(response => response.json())
		.then(data => {
			avatar_url.src = data.avatar_url
			userName.innerHTML = data.name
			userLogin.innerHTML = '@' + data.login
			public_repos.innerHTML = data.public_repos
			followers.innerHTML = data.followers
			following.innerHTML = data.following
		})
		.catch(error => console.error(error))
}

function changeUser() {
	login = prompt('Please enter your @ on GitHub:')

	if (login == null || login == '') {
		text = 'User cancelled the prompt.'
	} else {
		getUserData(login)
	}
}

getUserData()
