function plotSineWave() {
	var margin = {top: 20, right: 20, bottom: 30, left: 50};
    var width = 1024 - margin.left - margin.right;
    var height = 768 - margin.top - margin.bottom;

	
	var ctrl = d3.select(".sidebar").append("svg").attr("width", width).attr("height", height);
	d3.csv("https://tom6311tom6311.github.io/D3/sine_wave3_10Hz.csv", function(data) {
		console.log(data);
		var data_len = data.length;
		var y_max = 2;
		var y_min = -2;
		var zoom = height / (y_max - y_min);
		var y_bias = zoom * (y_max - y_min) / 2;
		var per_width = width / data_len;
		console.log(y_max);
		console.log(y_min);
		console.log(zoom);
		for (var i=0; i<data_len; ++i) {
			data[i].val = height - (zoom * data[i].val + y_bias);
		}
		console.log(data);
		var lines = d3.line()
			.x(function(d,j) 
				{
					return j * per_width + margin.left;
				})
			.y(function(d) 
				{
					return d.val + margin.top;
				});
		ctrl.append("path").data([data]).attr("d", lines).attr("stroke", "steelblue").attr("fill", "none");
	});
}