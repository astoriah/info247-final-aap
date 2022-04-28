function bounceIcon () {
    d3.select("#scrollArrow").transition()
        .duration(1000)
        .attr("y", 100)
        .on("end", bounceIconEnd);
}
function bounceIconEnd() {
    d3.select("#scrollArrow").transition()
        .attr("y", -100)
        .duration(1000)
        .on("end", bounceIcon);

}
