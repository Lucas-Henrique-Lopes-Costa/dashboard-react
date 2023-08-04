import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <>
            <IconButton
              sx={{ position: 'absolute', top: '10px', left: '10px' }}
              onClick={toggleDrawerOpen}
            >
              <Menu />
            </IconButton>
          </>
        }
      />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
