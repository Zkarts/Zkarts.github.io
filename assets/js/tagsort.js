function HideAllPosts() {
	var posts = document.getElementsByClassName("post");
	for	(var i = 0; i < posts.length; i++) {
		if (i % 2 == 0) {
			posts[i].classList.add("post-hidden");
		}
	}
}