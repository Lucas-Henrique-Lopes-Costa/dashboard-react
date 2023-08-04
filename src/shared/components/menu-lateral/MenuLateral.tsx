import { Avatar, Box, Drawer, useTheme } from '@mui/material';

interface IMenuLateralProps {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();
  
  return (
    <>
      <Drawer variant='permanent'>
        <Box width={theme.spacing(28)} display="flex">
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar 
              sx={{ width: theme.spacing(12), height: theme.spacing(12) }}
              alt="Lucas Henrique"
              src="https://github.com/Lucas-Henrique-Lopes-Costa.png" 
            />
          </Box>
        </Box>
      </Drawer>
      <Drawer variant='permanent'>
        <Box width={theme.spacing(28)} display="flex">
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar 
              sx={{ width: theme.spacing(12), height: theme.spacing(12) }}
              alt="Lucas Henrique"
              src="https://github.com/Lucas-Henrique-Lopes-Costa.png" 
            />
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};