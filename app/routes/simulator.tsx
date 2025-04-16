import { CLIMATE_VARIABLES, LOGISTIC_FUNCTION_VARIABLES } from '~/lib/constants';
import { ClimateDataTable } from '~/components/ClimateDataTable';
import { ClimateCharts } from '~/components/ClimateCharts';
import { LogisticFunction } from '~/components/LogisticFunction';
import { Card, CardBody, CardHeader} from '@heroui/react';
import { useClimateData } from '~/hooks/useClimateData';
import { ClimateEdit } from '~/components/ClimateEdit';
// import { ActionFunctionArgs } from '@remix-run/node';

export default function Simulator() {
  const {
    setCurrentMonth,
    handleClimateDataChange,

    monthData,
    climateData,
    columns
  } = useClimateData()

  
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
                  data={climateData}
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
                <p className='text-xl font-bold'>Edit data ({monthData?.mes})</p>
              </CardHeader>
              <CardBody>
                <ClimateEdit
                  data={monthData}
                  handleClimateDataChange={handleClimateDataChange}
                />
              </CardBody>
            </Card>

            <Card>
              <CardHeader className='p-4'>
                <p className='text-xl font-bold'>Table</p>
              </CardHeader>
              <CardBody>
                <ClimateDataTable
                  data={climateData}
                  columns={columns}
                  handleMonth={setCurrentMonth}
                />
              </CardBody>
            </Card>
          </div>
        </main>
      </div>
    </>
  )
}