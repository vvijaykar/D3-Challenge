// @TODO: YOUR CODE HERE!
var svgWidth = 900;
var svgHeight = 500;

var margin = { 
    top: 20, 
    right: 40, 
    bottom: 80, 
    left: 100};

var width = svgWidth - margin.left - margin.right; 
var height = svgHeight - margin.top - margin.bottom; 

var svg = d3
    .select(".chart")
    .append("svg")
    .attr("name","main-svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("id",  "scatter")
    .classed("col-xs-12 col-md-12", true);

var chartGroup = svg.append("g")
    .attr('name', 'scatter-chart')
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
d3.csv("data.csv", function(err,  data){
    if (err) throw err;

    data.forEach(function(d,i){

        d.age = +d.age
        d.smokes = +d.smokes

    });
    console.log(data)

    var age = data.map(d => d.age)
    var smokes = data.map(d => d.smokes)

        var xAgeScale = d3.scaleLinear()
            .domain([d3.min(age) * 0.85 , d3.max(age) * 1.25])
            .range([0,width])
    
    var bottomAxis = d3.axisBottom(xAgeScale)

    chartGroup.append("g")
        .attr("name", "bottom-axis")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    var ySmokeScale = d3.scaleLinear()
        .domain([d3.min(smokes) * 0.85 , d3.max(smokes) * 1.25])
        .range([height, 0])
    
    // Create axes
    var Yaxis = d3.axisLeft(ySmokeScale);
    
    chartGroup.append("g")
        .attr("name",  "left-axis")
        .call(leftAxix);
    
    var tool_tip = d3.tip()
        .attr("class", "d3-tip")
        .offset([-10, 10])
        .html
    


})