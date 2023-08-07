// Write your code here
import './index.css'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  return (
    <div className="vaccination-by-gender-background-container">
      <h1 className="vaccination-by-gender-heading">Vaccination By Gender</h1>
      <ResponsiveContainer width={1000} height={400}>
        <PieChart>
          <Pie
            data={vaccinationByGender}
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others 60" fill="#2cc6c6" />
          </Pie>
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
