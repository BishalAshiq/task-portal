import React from "react";
import Chart from "react-apexcharts";
const DonutChartOne = () => {
  return (
    <React.Fragment>
      <div>
        <Chart
          type="donut"
          width={400}
          height={150}
          series={[26]}
          options={{
            labels: ["26%"],
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    fontSize: 10,
                    color: "#f90000",
                  }
                }
              }
            },
            dataLabels:{
                enabled: false,
            }
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default DonutChartOne;

// import React from 'react';
// import { PieChart, Pie, ResponsiveContainer } from 'recharts';

//   const data02 = [
//     { name: 'A2', value: 600 }
//   ];

// const DonutChartOne = () => {
//   return (
//     <ResponsiveContainer width="100%" height="100%">
//     <PieChart width={200} height={200}>
//       <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
//     </PieChart>
//   </ResponsiveContainer>
//   )
// };

// export default DonutChartOne;
