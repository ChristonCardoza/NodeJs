import React, { useMemo } from 'react'
import { useTable} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS, GROUPED_COLUMNS } from './Colums'
import './table.css'
import { Checkbox } from './Checkbox'

export const ColumnHiding = () => {

    // ensuring that data is not re-created for every render: for this usage UseMemo helpful
    const columns = useMemo(() => COLUMNS,[])
    const data = useMemo(() => MOCK_DATA,[])

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups, 
        footerGroups,
        rows,
        prepareRow,
        allColumns,
        getToggleHideAllColumnsProps
    } = useTable(
        {
            columns: columns,
            data: data
        })

    return (
        <>
            <div>
                <div>
                    <Checkbox {...getToggleHideAllColumnsProps()}/> Toggle All
                </div>
                {
                    allColumns.map(column => (
                       <div key={column.id}>
                           <label>
                               <input type='checkbox' {...column.getToggleHiddenProps()} />
                               {column.Header}
                           </label>
                       </div> 
                    ))
                }
            </div>
            <table {...getTableProps}>
                <thead >
                    {
                        headerGroups.map( (headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>

                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))
                                }

                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return(
                                <tr {...row.getRowProps()}> 

                                {row.cells.map((cell) => {
                                    return <td {... cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}

                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    {
                        footerGroups.map(footerGroup => (
                            <tr {...footerGroup.getFooterGroupProps()}>
                                {
                                    footerGroup.headers.map(column => (
                                        <td {...column.getFooterProps()}>
                                            {
                                                column.render('Footer')
                                            }
                                        </td>
                                    ))
                                }

                            </tr>
                        ))
                    }
                </tfoot>
            </table>
        </>
    )
}


