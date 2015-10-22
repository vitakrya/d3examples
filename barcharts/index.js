$(function() {
	var data = [4, 8, 15, 16, 23, 42];
	colors = d3.scale.category10();
	d3.select(".chart")
  	.selectAll("div")
    	.data(data)
  	.enter().append("div")
    	.style("width", function(d) { return d * 10 + "px"; })
			.style("color", '#e36131')
			.style("background-color", function(d, i) { return colors(i); } )
    	.text(function(d) { return d; });
});
