import React from 'react'
import LineCharts from './LineCharts'
import BarChart from './BarChart'
import PieCharts from './PieCharts'

function App() {
  return (
    <div className='bg-slate-200 flex flex-col justify-center gap-5 items-center'>
      <h1 className="w-full bg-slate-500 text-center font-bold text-white py-5 text-xl">React Chart.js</h1>

      <div className="w-[90%] xl:w-[500px] border border-slate-500 p-4">
        <h2 className="mb-2">Ganancias de Duality</h2>
        <LineCharts/>
      </div>

      <div className="w-[90%] xl:w-[500px] border border-slate-500 p-4">
        <h2 className="mb-2">Beneficios</h2>
        <BarChart/>
      </div>

    </div>
  )
}

export default App