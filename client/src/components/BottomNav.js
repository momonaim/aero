import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';

const BottomNav = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, []);

  return (
    <Box ref={ref}>
      <Paper
        elevation={3}
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2 }}
      >
        <Typography align="center" sx={{ padding: 1 }}>
          All rights reserved.
        </Typography>
      </Paper>
    </Box>
  );
};

export default BottomNav;
