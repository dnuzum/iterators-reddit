var reddit = require("./data.json")

// Write your solutions below

var children = reddit.data.children;
// var childTitles = children[0].data.title;
// var childLinks = children[0].data.permalink;
// var childText = children[0].data.selftext;
// var points = children[0].data.score;

// console.log(childTitles);


// QUESTION 1
children.forEach(function(titles) {
	console.log('Title: ' + titles.data.title);
});

// QUESTION 2
var links = children.map(function(link) {
	return link.data.permalink;
});

links.forEach(function(url) {
	console.log('http://reddit.com' + url);
});

// QUESTION 3
var hasText = function(item) {
	return item.data.selftext.length > 0;
};

var hasSelfText = children.filter(hasText);

console.log(hasSelfText);

// QUESTION 4

scoreArray = [];
 
 function count(a, b){
 	return a + b;
 }
 
 reddit.data.children.forEach(function (child){
 	scoreArray.push(child.data.score);
 });
 
 var sum = scoreArray.reduce(count);
 console.log(sum);