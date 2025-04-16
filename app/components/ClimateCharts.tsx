import { ClimateData } from '~/types';
import { AreaChart } from './AreaChart';
import { Tab, Tabs } from '@heroui/react';


type ClimateChartsProps = {
  data: ClimateData[],
  climateCategories: string[],
  functionCategories: string[],
}
export function ClimateCharts({data, climateCategories, functionCategories}: ClimateChartsProps) {
  
  return (
    <>
      <Tabs aria-label="Charts">
        <Tab key='climate-categories' title='Datos Climáticos'>
          <AreaChart
            categories={climateCategories}
            data={data}
            
            className='mt-4 h-72'
            index='mes'
            yAxisWidth={30}
            onValueChange={() => null}
          />
        </Tab>
        <Tab key='logistic-function' title='Función aplicada'>
          <AreaChart
            categories={functionCategories}
            data={data}
            
            className='mt-4 h-72'
            index='mes'
            yAxisWidth={30}
            onValueChange={() => null}
          />
        </Tab>
      </Tabs>
    </>
  )
}