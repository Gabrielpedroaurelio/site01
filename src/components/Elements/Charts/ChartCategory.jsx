import { useRef } from "react"




export default function ChartCategory(){
    const chartcategory=useRef()
    const chartCanvas=chartcategory.current
   
    
    /*
    new Chart(chartcategory.current, {
        type: "doughnut",
        data: {
            labels: ["jan", "Fev", "Mar", "Abril", 'Maio',"jan", "Fev", "Mar", "Abril", 'Maio',"jan", "Fev", "Mar", "Abril", 'Maio'], datasets: [{
                label: "Venda",
                data: [12, 19, 3, 32, 43,12, 19, 3, 32, 43,12, 19, 3, 32, 43],
                backgroundColor: ['#198754', '#0d6efd', '#d63384', '#fd7e14', '#00ffff']
            }]
        }
    }); 
    */
    return(
        <>
        <canvas ref={chartcategory}></canvas>
        </>
    )
}