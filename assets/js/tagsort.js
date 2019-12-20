function OnClickTagButton(el) {
	ShowAllPosts();
	HidePostsWithoutTag(el.textContent);
}

function ShowAllPosts() {
	var posts = document.getElementsByClassName("post-hidden");
	for	(var i = 0; i < posts.length; i++) {
		posts[i].classList.remove("post-hidden");
	}
}

function HidePostsWithoutTag(tag) {
	var posts = document.getElementsByClassName("post");
	for	(var i = 0; i < posts.length; i++) {
		var taggedNode = posts[i].firstElementChild;
		if(taggedNode.getAttribute("data-tags").split(', ').indexOf(tag) == -1) {
			posts[i].classList.add("post-hidden");
		}
	}
}