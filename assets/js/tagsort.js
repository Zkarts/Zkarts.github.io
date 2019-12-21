function ToggleVisibility(el) {
	if (el.classList.contains('collapse-box-shown')) {
		hide(el);
	}
	else {
		show(el);
	}
};

function Show(el, time) {
	el.style.display = 'block';
	var height = el.scrollHeight + 'px';
	el.style.display = '';
		
	el.classList.add('collapse-box-shown');
	el.style.height = height;

	window.setTimeout(function () {
		el.style.height = '';
	}, time);
};

function Hide(el, time) {
	el.style.height = el.scrollHeight + 'px';

	window.setTimeout(function () {
		el.style.height = '0';
	}, 1);

	window.setTimeout(function () {
		el.classList.remove('is-visible');
	}, time);
};

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