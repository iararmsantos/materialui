import React from 'react';
import { GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from "@mui/x-data-grid"
import {Box} from "@mui/material"

const DataGridToolbar = () => {
  return (
    <Box display="flex" gap={4} sx={{mt:2, ml:2}}>
        <GridToolbarExport/>
        <GridToolbarFilterButton/>
        <GridToolbarQuickFilter/>
    </Box>
  )
}

export default DataGridToolbar