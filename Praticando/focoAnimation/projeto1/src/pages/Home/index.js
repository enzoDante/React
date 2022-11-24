import { StyledHome } from './StyledHome'
import {Chart} from 'react-google-charts'

export default function Home(){    

    const chartEvents = [
        {
          eventName: "select",
          callback({ chartWrapper }) {
            console.log("Selected ", chartWrapper.getChart().getSelection());
          }
        }
      ];
      
      const data = [
        ["age", "weight"],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7]
      ];
      
      const options = {
        title: "Age vs. Weight comparison",
        hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
        vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
        legend: "none"
      };

    return(
        <StyledHome>
            <h1>Projetos</h1>
            <Chart
                chartType="ScatterChart"
                data={data}
                options={options}
                graphID="ScatterChart"
                width="100%"
                height="400px"
                chartEvents={chartEvents}
            />

        </StyledHome>
    )
}