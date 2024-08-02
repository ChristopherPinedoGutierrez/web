/* eslint-disable no-unused-vars */
import { useMediaQuery, useTheme } from '@mui/material';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

/* eslint-disable react/prop-types */
const CustomizedLegend = ({ payload }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const textColor = theme.palette.text.primary; // O cualquier otro color que desees

  const legendStyle = {
    listStyleType: 'none',
    padding: 0,
    display: isMobile ? 'flex' : 'block',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
    gap: isMobile ? '8px' : '0',
    justifyContent: isMobile ? 'center' : 'flex-start',
    alignItems: 'center',
    margin: isMobile ? '0' : '0 auto'
  };

  return (
    <ul style={legendStyle}>
      {payload.map((entry, index) => (
        <li key={`item-${index}`} style={{ color: textColor, marginBottom: isMobile ? '0' : '4px' }}>
          <span style={{ color: entry.color, marginRight: '8px' }}>■</span>
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

const RADIAN = Math.PI / 180;
const RenderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const offsetX = -20;
  const offsetY = -5;

  return (
    <text
      x={x + offsetX * Math.cos(-midAngle * RADIAN)}
      y={y + offsetY * Math.cos(-midAngle * RADIAN)}
      fill="white"
      fontSize={isMobile ? 8 : 12}
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartTechnologies = ({ item }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Mapeo de los datos para incluir colores desde el tema de MUI
  const data = item.map((tech) => ({
    name: tech.name,
    value: tech.type.value,
    color: tech.color
  }));

  return (
    <ResponsiveContainer width={'100%'} height={200}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          labelLine={false}
          // label={<RenderCustomizedLabel />}
          // cy={isMobile ? '75%' : '50%'}
          // startAngle={isMobile ? 180 : 0}
          // endAngle={isMobile ? 0 : 360}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {/* <Tooltip /> */}
        <Legend
          layout={isMobile ? 'horizontal' : 'vertical'}
          verticalAlign={isMobile ? 'bottom' : 'middle'}
          align={isMobile ? 'center' : 'right'}
          content={<CustomizedLegend />}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export { PieChartTechnologies };
