import { pdf } from '@react-pdf/renderer';
import CVDocument from '../../../modules/CvGenerator/CVDocument';

const handleDescargarCV = async () => {
  // Generar el documento PDF como Blob
  const blob = await pdf(<CVDocument />).toBlob();
  const url = URL.createObjectURL(blob);

  // Crea un enlace temporal
  const link = document.createElement('a');
  link.href = url;
  link.download = 'ChristopherPinedoCV.pdf';
  document.body.appendChild(link);

  // Simula un clic
  link.click();

  // Limpiar
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export { handleDescargarCV };
