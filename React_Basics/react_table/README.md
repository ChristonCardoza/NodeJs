# React Table

## Why table component?
 1. Having to build some sort of a table to visualize the data is inevitable
 2. Building your own table component can be challenging and time consuming
   
## React Table
 React-Table is a collection of hooks for building powerful tables and data grid experiences: These hooks are lightweight, composable, and ultra-extensible; They do not render any markup or styles for you

## Basic Table
 1. Import necessity file
   
   ```javascript

    import React, { useMemo } from 'react'
    import { useTable } from 'react-table' // table dependency
    import MOCK_DATA from './MOCK_DATA.json' // json input
    import { COLUMNS, GROUPED_COLUMNS } from './Colums' // column structure
    import './table.css' // css

   ``` 
 2. Create table instance and extract required method from it
   1. Ensuring that data is not re-created for every render: for this usage UseMemo helpful
   2. Sructure of input data which mainly contains Header, Footer and accessor
   3. Input data value read from json
   4. Create  table instance
   5. Extract required methods from table instance
   
   ```javascript
   
    // Ensuring that data is not re-created for every render: for this usage UseMemo helpful

    // Sructure of input data which mainly contains Header, Footer and accessor
    // const columns = useMemo(() => COLUMNS,[])
    // Grouping header togather
    const columns = useMemo(() => GROUPED_COLUMNS,[])

    // Input data value read from json
    const data = useMemo(() => MOCK_DATA,[])

    // Create  table instance
    const tableInstance = useTable({
        columns: columns,
        data: data
    })

    // extract required methods from table instance
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups, 
        footerGroups,
        rows,
        prepareRow
    } = tableInstance

   ``` 
 3. Define methods in table body
    1. getTableProps: Apply at table level `<table {...getTableProps}>`
    2. getTableBodyProps:  Apply at table body level `<tbody {...getTableBodyProps}>`
    3. headerGroups: Apply inside table head which contains all the headergroups where we can get the access for individual headergroup which contain individual headers. From header will get the access for getHeaderProps, which can apply at table header level ` <th {...column.getHeaderProps()}>{column.render('Header')}</th>` here it displays header
    4. footerGroups: It act exactly like headerGroups
    5. rows: Apply at inside table body. rows has individual access for row. these individual row conatins getRowProps which applied at table row `<tr {...row.getRowProps()}> ` row contains cells individual cell contains the getCellProps, which is applied at table data `<td {... cell.getCellProps()}>{cell.render('Cell')}</td>` here it display data
   
   ```javascript

    return (
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
    )

   ```   
## Further Reading
1. Grouping
2. In-line row editing
3. Row drag and drop
4. Column re-sizing
5. React Table + Material UI