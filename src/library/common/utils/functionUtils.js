const handleDescargarCV = (pdfFile) => {
  // URL relativa del archivo PDF
  const pdfUrl = pdfFile;

  // Crea un enlace temporal
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'ChristopherPinedoCV.pdf'; // Puedes cambiar el nombre del archivo aquí
  document.body.appendChild(link);

  // Simula un clic en el enlace para iniciar la descarga
  link.click();

  // Elimina el enlace temporal
  document.body.removeChild(link);
};

export { handleDescargarCV };
