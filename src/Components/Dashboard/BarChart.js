// src/components/BarChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            label: 'Data Set 1',
            data: [3, 7, 10],
            backgroundColor: '#4F46E5', // Tailwind color
          },
        ],
      },
    });
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8">hello
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChart;
