/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function RadarChartAptitudes({ aptitudes, aptitudesCount }) {
  const [processedData, setProcessedData] = useState([]);

  useEffect(() => {
    const processData = () => {
      const typeMap = {};

      aptitudes.forEach((item) => {
        const typeName = item.type.name;
        if (!typeMap[typeName]) {
          typeMap[typeName] = 0;
        }
        typeMap[typeName] += item.type.value;
      });
      console.log(typeMap);
      const formattedData = Object.keys(typeMap).map((type) => ({
        subject: type,
        A: typeMap[type]
      }));

      setProcessedData(formattedData);
    };

    processData();
  }, [aptitudes]);

  useEffect(() => {
    // console.log('aptitudes :', aptitudes);
    console.log('processedData :', processedData);
  }, [processedData]);

  return (
    <ResponsiveContainer width={'100%'} height={300}>
      <RadarChart data={processedData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={0} domain={[0, aptitudesCount]} />
        <Radar name="Aptitudes" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export { RadarChartAptitudes };
