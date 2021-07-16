const userName = document.getElementById('name')
const userLogin = document.getElementById('login')
const public_repos = document.getElementById('public_repos')
const followers = document.getElementById('followers')
const following = document.getElementById('following')
const avatar_url = document.getElementById('avatar')

function getUserData() {
	fetch('https://api.github.com/users/klayverxd')
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

getUserData()
