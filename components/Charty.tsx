
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Charty = ({accounts}: DoughnutChartProps) => {
    const balances = accounts.map((a)=> a.currentBalance);
    const accountNames = accounts.map((a)=> a.name);
    
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: ['15785', '15004', '15994'],
                backgroundColor: ['#e31515','#c12525','#ca1111']
            }
        ],
        labels: ['Bank 1', 'Bank 2']
    }
    return <Doughnut
        data={data}
        /*options={{
            cutout: '50%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }}*/
     />       
}

export default Charty;
