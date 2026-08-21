import React from 'react';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa6';
import * as MdIcons from 'react-icons/md';

interface DynamicIconProps {
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
}

export function DynamicIcon({ name, size, color, className }: DynamicIconProps) {
  // Soporte para SVGs estáticos desde la carpeta public
  if (name.endsWith('.svg')) {
    const srcPath = import.meta.env.BASE_URL + name.replace(/^\//, '');
    const isLightColor = color === '#ffffff' || color === '#f5f5f5' || color === 'white';
    return (
      <img
        src={srcPath}
        alt="Tech Icon"
        className={className}
        style={{
          width: size || '1em',
          height: size || '1em',
          objectFit: 'contain',
          filter: isLightColor ? 'invert(1)' : 'none'
        }}
      />
    );
  }

  // Buscar en Simple Icons (si)
  let IconComponent = (SiIcons as any)[name];
  
  // Buscar en Font Awesome 6 (fa6)
  if (!IconComponent) {
    IconComponent = (FaIcons as any)[name];
  }
  
  // Buscar en Material Design Icons (md)
  if (!IconComponent) {
    IconComponent = (MdIcons as any)[name];
  }
  
  if (!IconComponent) {
    // Si no se encuentra, retornamos un elemento vacío o nulo
    return null;
  }
  
  return <IconComponent size={size} color={color} className={className} />;
}
