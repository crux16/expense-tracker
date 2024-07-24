import { 
    PieChart, 
    Pie, Cell } from 'recharts';

export const Chart = ({data}) =>{
      const cx = 138;
      const cy = 138;
      const iR = 70;
      const oR = 138;   

    return (
        <div>
            <PieChart width={292} height={138}>
                <Pie
                dataKey='value'
                radius={15}
                startAngle={180}
                endAngle={0}
                data={data}
                cx={cx}
                cy={cy}
                innerRadius={iR}
                outerRadius={oR}
                fill="#8884d8"
                stroke="none">
                     {data.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color}  style={{borderRadius:'15px'}}/>))}
                </Pie>
            </PieChart>
        </div>
    )
}