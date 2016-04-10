import {Component} from 'angular2/core';
// import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'article',
    templateUrl: 'app.article/app.component.html',
    styleUrls: ['style/style.css']
})

export class AppComponent{

    constructor() {}

    private values;
    private authors = [];
    private categories = [];
    private posts = [];
    private articles;
    private i = 0;
    private index = 0;

    private new_post = {
		author: '',
		categories: '',
		post: ''
	};

    ngOnInit() {
		this.getValues();
    }

	onSubmitTemplateBased() {
		this.getNewArticleObj(this.index);
		this.articles[this.index].author.fields.name = this.new_post.author;
		this.articles[this.index].categories.fields.title = this.new_post.categories;
		this.articles[this.index].post.fields.body = this.new_post.post;
		this.index++;
		this.initForm(this.new_post);
    }

    initForm(obj){
		this.new_post.author = '';
		this.new_post.categories = '';
		this.new_post.post = '';
    }

    getNewArticleObj(index){
		this.articles[index] = {};
		this.articles[index].author = [];
		this.articles[index].author.fields = [];
		this.articles[index].author.fields.name = '';
		this.articles[index].categories = [];
		this.articles[index].categories.fields = [];
		this.articles[index].categories.fields.title = '';
		this.articles[index].post = [];
		this.articles[index].post.fields = [];
		this.articles[index].post.fields.body = '';
    }

    getValues(){
		var contentful = require('contentful');
		var client = contentful.createClient({
			space: 'p29nxr949ru8',
			accessToken: 'b78824bc62fa64d2762849b04d9d710afefb407b7f39f2779382b0f08afb599a'
		})
		client.getEntries()
			.then(function(entries) {
				this.getTrucs(entries);
			}.bind(this))	
	}

	getTrucs(truc){
		this.values = truc;
		this.getAuthors();
		this.getCategories();
		this.getPosts();
		this.getArticles();
	}

	getAuthors() {
		var j = 0; 
		while (this.i < 2){
			this.authors[j] = this.values.items[this.i];
			this.i++;
			j++;
		}
	}

	getCategories() {
		var j = 0;
		while (this.i < 4) {
			this.categories[j] = this.values.items[this.i];
			this.i++;
			j++;
		}
	}

	getPosts() {
		var j = 0;
		while (this.i < 6){
			this.posts[j] = this.values.items[this.i];
			this.i++;
			j++;
		}
	}

	getArticles() {
		this.articles = [];
		while (this.index < 2) {
			this.posts[this.index].fields.body = this.ellipsify(this.posts[this.index].fields.body);
			this.articles[this.index] = {
				categories: this.categories[this.index],
				author: this.authors[this.index],
				post: this.posts[this.index]
			}
			this.index++;
		}
	}

	ellipsify(str) {
		if (str.length > 500) {
			return (str.substring(0, 500) + "...");
		}
		else {
			return str;
		}
	}
}
