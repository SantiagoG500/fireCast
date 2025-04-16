import { useEffect, useState } from 'react';
import { ClimateData } from '../types/index'; 


export function useClimateData({ data }: {data: ClimateData[]}) {
  const [month, setMonth] = useState("Enero");
  const [monthData, setMonthData] = useState<ClimateData | undefined>(undefined)

  const handleMonth = (month: string) => {
    setMonth(month)
  }

  useEffect(() => {
    const currentMonth = data.find(row => row.mes === month)  
    setMonthData(currentMonth)  
  }, [month, data])
  
  return {
    monthData,
    handleMonth
  }
}