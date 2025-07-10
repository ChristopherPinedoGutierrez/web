// Centralizador de tecnologías - Mantiene la API actual
import { frontendTechnologies } from './technologies/area-frontend';
import { backendTechnologies } from './technologies/area-backend';
import { testingTechnologies } from './technologies/area-testing';
import { designTechnologies } from './technologies/area-design';
import { managementTechnologies } from './technologies/area-management';
import { developmentTechnologies } from './technologies/area-development';

// Combinar todas las tecnologías en un solo objeto
export const technologies = {
  // Tecnologías Frontend (lenguajes, frameworks, librerías UI, build tools)
  ...frontendTechnologies,

  // Tecnologías Backend (lenguajes, runtime, frameworks, bases de datos, cloud)
  ...backendTechnologies,

  // Tecnologías de Testing
  ...testingTechnologies,

  // Tecnologías de Diseño
  ...designTechnologies,

  // Tecnologías de Gestión/Management
  ...managementTechnologies,

  // Tecnologías de Desarrollo
  ...developmentTechnologies
};
