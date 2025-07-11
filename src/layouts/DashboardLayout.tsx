// src/layouts/DashboardLayout.tsx
import React, {useState} from 'react';
import Header from '../components/Header/Header';
import DashboardContent from '../components/Dashboard/DashboardContent';
import ActionsBar from '../components/ActionBar/ActionBar';
import ModalProcesar from '../components/ModalProcesar/ModalProcesar';

const DashboardLayout: React.FC = () => {

    const [mostrarModalProcesar, setMostrarModalProcesar] = useState(false)

    const abrirModalProcesarDatos = () => setMostrarModalProcesar(true);

    const cerrarModalProcesarDatos = () => setMostrarModalProcesar(false);

    const continuarProcesamiento = () => {
    // lógica para procesar los datos
    cerrarModalProcesarDatos();
  };
    
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header onProcesarClick={abrirModalProcesarDatos} />
      <ActionsBar />
      <DashboardContent />
      {
        mostrarModalProcesar && (
            <ModalProcesar onClose={cerrarModalProcesarDatos}
            onContinue={continuarProcesamiento}/>
        )
      }
    </div>
  );
};

export default DashboardLayout;
