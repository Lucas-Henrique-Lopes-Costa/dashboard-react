import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider, AuthProvider } from './shared/contexts';
import { Login, MenuLateral } from './shared/components';
// import { AppRoutes } from './routes';

export const App = () => {
  return (
    <AuthProvider>
      <AppThemeProvider>
        <Login>
          
          <BrowserRouter>

            <MenuLateral>
              {/* <AppRoutes /> */}
            </MenuLateral>

          </BrowserRouter>

        </Login>
      </AppThemeProvider>
    </AuthProvider>
    
  );
};
