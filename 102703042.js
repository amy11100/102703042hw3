function goTop()
{
	window.scrollTo(0,0);
}

var paragraph = document.getElementsByTagName("p");
for (var i in paragraph){
		if (paragraph[i].id=="date" || paragraph[i].id=="author" ||paragraph[i].id=="ad" ||paragraph[i].id=="b"){
			continue;
		}
    paragraph[i].onmouseover = function(){
        this.style.background = 'lightblue';
    }
    paragraph[i].onmouseout = function(){
        this.style.background = 'white';
    }
}

var a = document.body;
a.className += "medium"
function smallFont(){
	var a = document.body;
	if (a.className == "medium"){
		a.classList.remove("medium");
		a.className += "small"
	}
	else if (a.className == "large"){
		a.classList.remove("large");
		a.className += "small"
	}
}
function mediumFont(){
	var a = document.body;
	if (a.className == "small"){
		a.classList.remove("small");
		a.className += "medium"
	}
	else if (a.className == "large"){
		a.classList.remove("large");
		a.className += "medium"
	}
}
function largeFont(){
	var a = document.body;
	if (a.className == "small"){
		a.classList.remove("small");
		a.className += "large"
	}
	else if (a.className == "medium"){
		a.classList.remove("medium");
		a.className += "large"
	}
}

//Firebase
var config = {
	apiKey: "AIzaSyDGvTC7Pk8rjaJfQNzV57bxRUkxvGMi4og",
	authDomain: "amyy-65111.firebaseapp.com",
	databaseURL: "https://amyy-65111.firebaseio.com",
	projectId: "amyy-65111",
	storageBucket: "amyy-65111.appspot.com",
	messagingSenderId: "421501176029"
};
firebase.initializeApp(config);

var storageRef = firebase.storage().ref();
var photo1 = "photo1.jpg"
var photo2 = "photo2.jpg"
var photo3 = "photo3.jpg"

$(document).ready(function(){
	photo();
})

function photo() {
	var publicRef1 = storageRef.child(photo1);
  var publicRef2 = storageRef.child(photo2);
  var publicRef3 = storageRef.child(photo3);

  publicRef1.getDownloadURL().then(function(url1){
		$('#photo1').attr('src',url1);
  });
  publicRef2.getDownloadURL().then(function(url2){
		$('#photo2').attr('src',url2);
  });
  publicRef3.getDownloadURL().then(function(url3){
		$('#photo3').attr('src',url3);
  });
}
