(function(){
	var app = angular.module("eatrip", []);

	var user = {
		login:"zemaze",
		name:"Martinez",
		firstName:"Julien",
		birthDate:Date.parse("1986-29-06"),
		creationDae:Date.parse("2015-01-01"),
		email:"jm.julien.martinez@gmail.com"
	}
	
	standardArticle = {
		title:'Manger des moules',
		subtitle:'...à la pêche aux moules'
		price:35,
		body:'Il en faut ... vraiment! Blablablabla Lorem Ipsum.',
		image:'',
		thumbnail:'',
		keywords:'',
		ingredients:'',
		blogUrl:'',
	}
	
	app.controller('ArticleController', function(){
		this.product = standardArticle;
	});
});