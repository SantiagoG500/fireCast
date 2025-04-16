import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react';
import { ClimateData, ColumnClimateDataTable } from '~/types';

type ClimateDataTableProps = {
  columns: ColumnClimateDataTable[],
  data: ClimateData[],
  handleMonth: (month: string) => void
}

export function ClimateDataTable({columns, data, handleMonth}: ClimateDataTableProps) {

  return (
    <>
      <Table
        aria-label="Example table with dynamic content"
        color='default'
        selectionMode='single'

        onSelectionChange={(keys) => {
          if (keys instanceof Set && keys.size > 0) {
            handleMonth(Array.from(keys)[0].toString()); // Convierte el primer valor a string
          }
        }}
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <TableRow key={item.mes}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}