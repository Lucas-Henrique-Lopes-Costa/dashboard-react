import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<p>Página Inicial</p>} /> 
      {/* se não encontra vai para a rota inicial */}
      <Route path="*" element={<Navigate to="pagina-inicial"/>} />
    </Routes>
  );
};
