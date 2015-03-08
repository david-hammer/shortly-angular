angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(links){
        $scope.data.links = links;
        $scope.makePie();
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  $scope.gotoLink = function(code){
    Links.gotoLink(code);
  };
  $scope.makePie = function() {
    var width = 960,
        height = 500,
        radius = Math.min(width, height) / 2 - 10;

    var data = $scope.data.links.map(function(obj){
      return obj.visits;
    });

    var color = d3.scale.category20();

    var arc = d3.svg.arc()
        .outerRadius(radius);

    var pie = d3.layout.pie();

    var svg = d3.select("body").append("svg")
        .datum(data)
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
        .text('test');

    var arcs = svg.selectAll("g.arc")
        .data(pie)
      .enter().append("g")
        .attr("class", "arc");

    arcs.append("path")
        .attr("fill", function(d, i) { return color(i); })
      .transition()
        .ease("bounce")
        .duration(2000)
        .attrTween("d", tweenPie)
      .transition()
        .ease("elastic")
        .delay(function(d, i) { return 2000 + i * 50; })
        .duration(750)
        .attrTween("d", tweenDonut);

    var tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
        console.log(d);
        return "<strong>Frequency:</strong> <span style='color:red'>" + 100 + "</span>";
      })

    function tweenPie(b) {
      b.innerRadius = 0;
      var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
      return function(t) { return arc(i(t)); };
    }

    function tweenDonut(b) {
      b.innerRadius = radius * .6;
      var i = d3.interpolate({innerRadius: 0}, b);
      return function(t) { return arc(i(t)); };
    }
  }
  $scope.getLinks();
});
