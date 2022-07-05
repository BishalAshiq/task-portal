import React from "react";
import Chart from "react-apexcharts";
const DonutChartTwo = () => {
  return (
    <React.Fragment>
      <div>
        <Chart
          type="donut"
          width={400}
          height={150}
          series={[48]}
          options={{
            labels: ["48%"],
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

export default DonutChartTwo;