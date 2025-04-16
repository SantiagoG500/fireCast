import { NumberInput } from '@heroui/react'
import { ClimateData } from '~/types'

type ClimateEditTableProps = {
  data: ClimateData,
  handleClimateDataChange:  (data: ClimateData) => void
}

export function ClimateEdit({ data, handleClimateDataChange }: ClimateEditTableProps) {
  return (
    <>
      {
        data
        ? (
            <>
              <div className='flex justify-center flex-wrap gap-2'>
                <NumberInput
                  className='w-5/12'
                  label='k'
                  name='tasa_de_cambio_k'

                  placeholder={`${data.tasa_de_cambio_k}`}
                  value={data.tasa_de_cambio_k}
                  onValueChange={(val) => handleClimateDataChange({...data, tasa_de_cambio_k: val})}
                />
                <NumberInput
                  className='w-5/12'
                  label='CT'
                  name='CT'

                  placeholder={`${data.CT}`}
                  value={data.CT}
                  onValueChange={(val) => handleClimateDataChange({...data, CT: val})} 
                />
                <NumberInput
                  className='w-5/12'
                  label='CH'
                  name='CH'

                  placeholder={`${data.CH}`}
                  value={data.CH}
                  onValueChange={(val) => handleClimateDataChange({...data, CH: val})}
                />
                <NumberInput
                  className='w-5/12'
                  label='CV'
                  name='CV'

                  placeholder={`${data.CV}`}
                  value={data.CV}
                  onValueChange={(val) => handleClimateDataChange({...data, CV: val})}
                />
                <NumberInput
                  className='w-5/12'
                  label='CS'
                  name='CS'

                  placeholder={`${data.CS}`}
                  value={data.CS}
                  onValueChange={(val) => handleClimateDataChange({...data, CS: val})}
                />

                <NumberInput
                  className='w-5/12'
                  label='temp y sequedad' 
                  name='interaccion_temp_sequedad'

                  placeholder={`${data.interaccion_temp_sequedad}`}
                  value={data.interaccion_temp_sequedad}
                  onValueChange={(val) => handleClimateDataChange({...data, interaccion_temp_sequedad: val})}
              />
                <NumberInput
                  className='w-5/12'
                  name='coeficiente_total'
                  label='coeficiente total'

                  placeholder={`${data.coeficiente_total}`}
                  value={data.coeficiente_total}
                  onValueChange={(val) => handleClimateDataChange({...data, coeficiente_total: val})}
                />

                <NumberInput
                  className='w-5/12'
                  label='funcion logistica' 
                  name='funcion_logistica_aplicada'

                  placeholder={`${data.funcion_logistica_aplicada}`}
                  value={data.funcion_logistica_aplicada}
                  onValueChange={(val) => handleClimateDataChange({...data, funcion_logistica_aplicada: val})}
                />
              </div>

              {/* <div className='flex justify-center gap-4 w-full mt-4'>
                <Button variant='flat' color='default'>Reset</Button>
                <Button variant='flat' color='primary'>Apply</Button>
              </div> */}
            </>
          )
        : 'No Data...'
      }

    </>
  )
}