//----- Part 2

var MHCIday = [
  { item: 'UCRE',  hours: 6 },
  { item: 'PUI',  hours: 3 },
  { item: 'Classes for Fun', hours: 2 },
  { item: 'Bond with Other Students', hours: 4 },
  { item: 'sleep', hours: 8},
  { item: 'misc', hours: 1}
];

var pie = d3.pie()
  .value(function(d) { return d.hours });

var slices = pie(MHCIday);

var arc = d3.arc()
  .innerRadius(0)
  .outerRadius(50);

// helper that returns a color based on an ID
var color = d3.scaleOrdinal(d3.schemeCategory10);

var svg = d3.select("#myChart").append("svg");

var g = svg.append("g").attr("transform", "translate(50, 50)");

g.selectAll("path")
    .data(slices)
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", function(s) {return color(s.data.item);})
    .on("mousemove", mousemove);

function mousemove(d) {
    console.log(this)
    console.log(d);

    tooltip.text(d.data.item + ": " + d.data.hours)
        .style("visibility", "visible")
        .style("top", event.pageY+"px")
        .style("left", event.pageX+"px");
}

var tooltip = d3.select("#myChart")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden");

