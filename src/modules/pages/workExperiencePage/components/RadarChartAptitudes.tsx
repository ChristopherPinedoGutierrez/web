/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useTheme } from '@mui/material/styles';

function RadarChartAptitudes({ skills, radarCount }) {
  const [processedData, setProcessedData] = useState([]);
  const theme = useTheme();
  
  // Use primary main color for the radar chart fill
  const radarColor = theme.palette.primary.main;
  // Use text primary color for the labels
  const textColor = theme.palette.text.primary;

  useEffect(() => {
    const processData = () => {
      const typeMap = {};

      skills.forEach((item) => {
        const typeName = item.type.name;
        if (!typeMap[typeName]) {
          typeMap[typeName] = 0;
        }
        typeMap[typeName] += item.type.value;
      });

      const formattedData = Object.keys(typeMap).map((type) => ({
        subject: type,
        A: typeMap[type]
      }));

      setProcessedData(formattedData);
    };

    processData();
  }, [skills]);

  return (
    <ResponsiveContainer width={'100%'} height={250}>
      <RadarChart data={processedData}>
        <PolarGrid stroke={theme.palette.divider} />
        <PolarAngleAxis dataKey="subject" tick={{ fill: textColor, fontSize: 12 }} />
        <PolarRadiusAxis angle={0} domain={[0, radarCount]} tick={false} axisLine={false} />
        <Radar name="Skills" dataKey="A" stroke={radarColor} fill={radarColor} fillOpacity={0.5} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export { RadarChartAptitudes };
