import climateData from "../../mocks/datos-climaticos.json";

import { CLIMATE_VARIABLES, LOGISTIC_FUNCTION_VARIABLES } from '~/lib/constants';
import { useLoaderData } from '@remix-run/react';
import { SimulatorLoader } from '../types';
import { ClimateDataTable } from '~/components/ClimateDataTable';
import { ClimateCharts } from '~/components/ClimateCharts';
import { LogisticFunction } from '~/components/LogisticFunction';
import { Card, CardBody, CardHeader} from '@heroui/react';
import { useClimateData } from '~/hooks/useClimateData';
import { ClimateEdit } from '~/components/ClimateEdit';


export async function loader() {
  const columns = Object.keys(climateData[0]).map((key) => {
    return{
      key,
      label:key
    }
  })

  return Response.json({
    data: climateData,
    columns,
  })
}

export default function Simulator() {
  const response = useLoaderData<SimulatorLoader>()
  const { handleMonth, monthData } = useClimateData({data: response.data})
  
  return (
    <>
      <div>
        <h1 className='text-4xl font-bold text-center'>Simulador</h1>

        <main className='flex justify-center gap-5 flex-wrap mt-9'>

          <div className='flex flex-col gap-4 w-11/12 md:w-10/12 max-w-lg lg:max-w-96'>
            <Card>
              <CardHeader className='p-4'>
                <p className='text-xl font-bold'>Charts</p>
              </CardHeader>
              <CardBody>
                <ClimateCharts
                  data={response.data}
                  climateCategories={CLIMATE_VARIABLES}
                  functionCategories={LOGISTIC_FUNCTION_VARIABLES}
                />
              </CardBody>
            </Card>

            <Card>
              <CardHeader className='p-4'>
                <p className='text-xl font-bold'>Función logística</p>
              </CardHeader>
              <CardBody className='flex justify-center'>
                <LogisticFunction/>
              </CardBody>
            </Card>

          </div>

          <div className='flex flex-col gap-4 w-11/12 md:w-10/12 max-w-lg'>
            <Card>
              <CardHeader className='p-4'>
                <p className='text-xl font-bold'>Edit data</p>
              </CardHeader>
              <CardBody>
                <ClimateEdit data={monthData} />
              </CardBody>
            </Card>
            <Card>
              <CardHeader className='p-4'>
                <p className='text-xl font-bold'>Table</p>
              </CardHeader>
              <CardBody>
                <ClimateDataTable
                  data={response.data}
                  columns={response.columns}
                  handleMonth={handleMonth}
                />
              </CardBody>
            </Card>
          </div>
{/* 
          <div className='w-11/12 md:w-9/12'>
          </div> */}

        </main>
      </div>
    </>
  )
}