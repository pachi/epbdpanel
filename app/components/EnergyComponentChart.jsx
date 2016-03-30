import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import 'd3';
import dimple from 'dimple-js/dist/dimple.latest.js';

export default class EnergyComponentChart extends React.Component {

  chart = null
  yaxis = null

  static propTypes = {
    type: React.PropTypes.string,
    data: React.PropTypes.array.isRequired
  }

  static defaultProps =  {width: "200px",
                          height: "20px"}

  drawChart() {
    const { data, maxvalue, type } = this.props;

    var svg = d3.select(ReactDOM.findDOMNode(this)).append('svg')
                .attr("width", "100%")
                .attr("height", "100%")
                .style("overflow", "visible");
    const c = new dimple.chart(svg, data)
                        .setMargins("1", "1", "1", "1");
    const xaxis = c.addCategoryAxis("x", "Mes");
    const yaxis = c.addMeasureAxis("y", "Valor");
    const csum = new dimple.color("red");
    const cprod = new dimple.color("green");

    xaxis.hidden = true;
    yaxis.hidden = true;
    yaxis.overrideMax = maxvalue;

    c.addSeries(null, dimple.plot.bar).barGap = 0;
    c.defaultColors = [type === 'SUMINISTRO' ?  csum : cprod];

    this.chart = c;
    this.yaxis = yaxis;

    this.chart.draw();
  }

  componentDidMount() {
    this.drawChart();
  }

  ShouldComponentUpdate(nextProps) {
    return (nextProps.data != this.props.data |
            nextProps.maxvalue != this.props.maxvalue)
  }

  render() {
    return <div style={ {width: this.props.width,
                         height: this.props.height} }></div>;
  }

}
