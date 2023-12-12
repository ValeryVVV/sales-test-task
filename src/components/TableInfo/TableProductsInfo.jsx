import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { mkConfig, generateCsv, download } from 'export-to-csv';
import { data } from '../../data/tableInfoData';

const columnHelper = createMRTColumnHelper();

const columns = [
    columnHelper.accessor('id', {
        header: 'ID',
        size: 40,
    }),
    columnHelper.accessor('date', {
        header: 'Date',
        size: 40,
    }),
    
    columnHelper.accessor('productCategory', {
        header: 'Product Category',
        size: 100,
    }),
        columnHelper.accessor('profit', {
        header: 'Profit',
        size: 120,
    }),
    columnHelper.accessor('unitSold', {
        header: 'Unit Sold',
        size: 120,
    }),
    columnHelper.accessor('monthlyRevenue', {
        header: 'Monthly Revenue',
        size: 120,
    }),
];

const csvConfig = mkConfig({
  fieldSeparator: ',',
  decimalSeparator: '.',
  useKeysAsHeaders: true,
});


export const TableProducts = () => {

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
  };
  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: false,
    enableFullScreenToggle: false,
    columnFilterDisplayMode: 'popover',
    enablePagination: false,

    renderTopToolbarCustomActions: ({ table }) => (
      <Box>
        <Button
          onClick={handleExportData}
          startIcon={<FileDownloadIcon />}
        >
          Export csv format
        </Button>
      </Box>
    ),
  });

  return <MaterialReactTable table={table} />;
};

