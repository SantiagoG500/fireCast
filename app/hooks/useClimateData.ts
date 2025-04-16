import { useEffect, useState } from 'react';
import { ClimateData, ColumnClimateDataTable } from '../types/index'; 
import initialClimateState from "../../mocks/datos-climaticos.json";

/**
 * **Manages Climatic data**
 * 
 *  Returns:
 * - monthData: State of the selected month **(only the name in string).**
 * - climateData: State of the Climate data (in array) {@link ClimateData}.
 * - columns: Array with the keys of the data type {@link ClimateData}
 * 
 * - setCurrentMonth
 * - handleMonthData
 * - resetClimateData
 * - handleClimateDataChange
 * 
 */
export function useClimateData() {
  const [month, setMonth] = useState("Enero");
  const [monthData, setMonthData] = useState<ClimateData>(initialClimateState[0])

  const [climateData, setClimateData] = useState<ClimateData[]>(initialClimateState)
  
  const columns: ColumnClimateDataTable[] = Object.keys(initialClimateState[0]).map((key) => {
    return{
      key,
      label:key
    }
  })
  
  const handleClimateDataChange = (monthData: ClimateData) => {
    setClimateData((prev) => prev.map((val) =>
        val.mes === monthData.mes 
          ? monthData
          : val
      )
    )  
  }
  const handleMonthData = (data: ClimateData) => {
    setMonthData(data)
  }
  
  const resetClimateData = () => {
    setClimateData(initialClimateState)
    setMonthData(initialClimateState[0])
  }
  
  useEffect(() => {
    const newMonth = climateData.find(row => row.mes === month)  
    
    setMonthData(newMonth ?? initialClimateState[0])  
  }, [month, climateData])
  
  const setCurrentMonth = (month: string) => { setMonth(month) }

  return {
    monthData,
    climateData,
    columns,
    
    setCurrentMonth,
    handleMonthData,
    resetClimateData,
    handleClimateDataChange,
  }
}