var reddit = require("./data.json")
// Don't touch the above
reddit.data.children.forEach(function(child) {
	console.log(child.data.title);	
});

var permalinks = reddit.data.children.map(function (child) {
	return "http://reddit.com"+child.data.permalink;
});
console.log("Permalinks equals:", permalinks);

var filtered = reddit.data.children.filter(function (child) {
	return child.data.selftext.length > 0;
});

console.log(filtered);

var reduced = reddit.data.children.reduce(function(previousValue, currentValue) {
	return previousValue + currentValue.data.score
}, 0);

console.log(reduced);