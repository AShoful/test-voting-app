import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { shape, arrayOf, string } from 'prop-types';

export default class Diagram extends PureComponent {
  static propTypes = {
    data: arrayOf(shape({})),
    COLORS: arrayOf(string)
  };

  static defaultProps = {
    data: [{}, {}],
    COLORS: ['blue', 'yellow']
  };

  render() {
    const { data, COLORS } = this.props;
    return (
      <PieChart width={400} height={400} margin={{ top: 50 }}>
        <Pie
          data={data}
          cx={200}
          cy={150}
          labelLine={false}
          outerRadius={140}
          innerRadius={100}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
