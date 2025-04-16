// import { getKeyValue,
//  Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react'
import { Form, NumberInput } from '@heroui/react'
import { ClimateData } from '~/types'

type ClimateEditTableProps = {
  data: ClimateData | undefined,
}

export function ClimateEdit({ data }: ClimateEditTableProps) {
  return (
    <>
      {
        data
        ? (
            <Form>
              <div className='flex justify-center flex-wrap gap-2'>
                <NumberInput
                  className='w-5/12'
                  label='k'
                  value={data.tasa_de_cambio_k}
                />
                <NumberInput
                  className='w-5/12'
                  label='CT'
                  value={data.CT}
                  />
                <NumberInput
                  className='w-5/12'
                  label='CH'
                  value={data.CH}
                  />
                <NumberInput
                  className='w-5/12'
                  label='CV'
                  value={data.CV}
                  />
                <NumberInput
                  className='w-5/12'
                  label='CS'
                  value={data.CS}
                  />

                <NumberInput
                  className='w-5/12'
                  label='temp y sequedad' 
                  value={data.interaccion_temp_sequedad}
                />
                <NumberInput
                  className='w-5/12'
                  label='coeficiente total' value={data.coeficiente_total}
                />

                <NumberInput
                  className='w-5/12'
                  label='funcion logistica' 
                  value={data.funcion_logistica_aplicada}
                />
              </div>
            </Form>
          )
        : 'No Data...'
      }

    </>
  )
}