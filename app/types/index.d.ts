export enum ClimateVariables  {
  CT = "CT",
  CH = "CH",
  CV = "CV",
  CS = "CS",
  interaccion_temp_viento = "interaccion temp viento",
  interaccion_temp_sequedad =  "interaccion temp sequedad",
  coeficiente_total = "coeficiente total",
  tasa_de_cambio_k = "tasa de cambio K",
  funcion_logistica_aplicada = "función logistica aplicada"
}

export type ClimateData = {
  mes: string,
  CT: number
  CH: number
  CV: number
  CS: number
  interaccion_temp_viento: number
  interaccion_temp_sequedad: number
  coeficiente_total: number
  tasa_de_cambio_k: number
  funcion_logistica_aplicada: number
  
}
// export type ClimateData = {
//   mes: string
// } & Record<ClimateVariables, number>

export type ColumnClimateDataTable = {
  key: string,
  label: string
}

export type SimulatorLoader = {
  data: ClimateData[]
  columns: ColumnClimateDataTable[]
}
