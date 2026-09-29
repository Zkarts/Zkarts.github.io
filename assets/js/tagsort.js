var Active = { Tag: "", Category: "" }

function ToggleVisibility(self, target) {
	self.classList.toggle("active");
	if (target.style.maxHeight){
	  target.style.maxHeight = null;
	} else {
	  target.style.maxHeight = target.scrollHeight + "px";
	}
}

function FilterPostsByCat(cat) {
	window.Active.Category = cat;
	console.log("catting: " + window.Active.Category);
	FilterPosts();
}
function FilterPostsByTag(tag) {
	window.Active.Tag = tag;
	console.log("tagging: " + window.Active.Tag);
	FilterPosts();
}
function FilterPosts() {
	ShowAllPosts();
	console.log("filtering");
	if (Active.Category != "") {
		HidePostsWithoutCat(window.Active.Category);
	}
	if (Active.Tag != "") {
		HidePostsWithoutTag(window.Active.Tag);
	}
}

function ShowAllPosts() {
	Active.Tag = "";
	Active.Category = "";

	var posts = document.getElementsByClassName("post-hidden");
	while (posts.length > 0) {
		posts[0].classList.remove("post-hidden");
	}
}

function HidePostsWithoutTag(tag) {
	var posts = document.getElementsByClassName("post");
	for	(var i = 0; i < posts.length; i++) {
		if (posts[i].classList.contains("post-featured")) {
			continue;
		}
		
		var taggedNode = posts[i].firstElementChild;
		if(taggedNode.getAttribute("data-tags").split(', ').indexOf(tag) == -1) {
			posts[i].classList.add("post-hidden");
		}
	}
}

function HidePostsWithoutCat(cat) {
	var posts = document.getElementsByClassName("post");
	for	(var i = 0; i < posts.length; i++) {
		if (posts[i].classList.contains("post-featured")) {
			continue;
		}
		
		var catNode = posts[i].firstElementChild;
		if(catNode.getAttribute("data-cats").split(', ').indexOf(cat) == -1) {
			posts[i].classList.add("post-hidden");
		}
	}
}