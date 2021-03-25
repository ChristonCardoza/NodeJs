import { Divider } from 'antd';
import 'antd/dist/antd.css'

import { BasicTable } from './components/BasicTable';

import { SortingTable } from './components/SortingTable';

import { FilteringTable } from './components/FilteringTable';

import { PaginationTable } from './components/PaginationTable';

import { RowSelection } from './components/RowSelection';

import { ColumnOrder } from './components/ColumnOrder';

import { ColumnHiding } from './components/ColumnHiding';

import { StickyTable } from './components/SttickyTable';

function App() {
  return (
    <div className="App">

      <Divider orientation="left"> Basic Table </Divider>
      <BasicTable />

      <Divider orientation="left"> Sorting Table </Divider>
      <SortingTable />     

      <Divider orientation="left"> Filtering Table </Divider>
      <FilteringTable /> 

      <Divider orientation="left"> Pagination Table </Divider>
      <PaginationTable />    

      <Divider orientation="left"> Row Selection </Divider>
      <RowSelection />  

      <Divider orientation="left"> Column Order </Divider>
      <ColumnOrder />  

      <Divider orientation="left"> Column Hiding </Divider>
      <ColumnHiding /> 

      <Divider orientation="left"> Sticky Table </Divider>
      <StickyTable />

    </div>
  );
}

export default App;
