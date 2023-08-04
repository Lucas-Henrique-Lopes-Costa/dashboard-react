import { Routes, Route, Navigate } from "react-router-dom";
import { Button } from "@mui/material";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<p><Button variant="contained" color="primary">Teste</Button></p>} /> {/* se não encontra vai para a rota inicial */}
      <Route path="*" element={<Navigate to="pagina-inicial"/>} />
    </Routes>
  );
};
