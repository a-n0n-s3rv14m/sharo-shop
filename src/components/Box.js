import * as React from 'react';
import Box from '@mui/material/Box';
import { amber } from '@mui/material/colors';

export default function BoxSx() {
  return (
    <Box 
      sx={{
        width: 300,
        height: 450,
        backgroundColor: amber[500],
        '&:hover': {
          backgroundColor: amber[500],
          opacity: [0.9, 0.8, 0.7],
        },
        p: 2, 
        border: '1px dashed grey'
      }}
    >
        <button>Über Uns</button>
    </Box>
  );
}
