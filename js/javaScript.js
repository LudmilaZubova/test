var link = document.querySelector(".button-modal");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storage) {
		login.value = storage;
		email.focus();
	}else{
		login.focus();
	}
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
	login.focus();
});
form.addEventListener("submit" ,function (evt) {
	evt.preventDefault();
});

form.addEventListener("submit", function (evt){
	if (!login.value || !email.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport){
		localStorage.setItem("login", login.value);
		}
	}
	});

window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
	});


var mapLink = document.querySelector(".map-js");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt){
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
	});

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
	});


window.addEventListener("keydown", function(evt){
	evt.preventDefault();
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
		}
	}
});

// var blockHover = document.querySelector(".catalog-hover");


// blockHover.addEventListener("mouseover", function(evt){
// 	evt.preventDefault()
// 	blockHover.classList.add("catalog-hover-open")
	
// })
