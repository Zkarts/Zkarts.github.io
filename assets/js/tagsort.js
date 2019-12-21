function ToggleVisibility(self, target) {
	self.classList.toggle("active");
    if (target.style.maxHeight){
      target.style.maxHeight = null;
    } else {
      target.style.maxHeight = target.scrollHeight + "px";
    }
}

function OnClickTagButton(el) {
	ShowAllPosts();
	HidePostsWithoutTag(el.textContent);
}

function ShowAllPosts() {
	var posts = document.getElementsByClassName("post-hidden");
	while (posts.length > 0) {
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