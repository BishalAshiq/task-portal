import React from "react";
import Chart from "react-apexcharts";
const DonutChartThree = () => {
  return (
    <React.Fragment>
      <div>
        <Chart
          type="donut"
          width={400}
          height={150}
          series={[35]}
          options={{
            labels: ["35%"],
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

export default DonutChartThree;