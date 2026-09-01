export interface JobTechnology {
  id: string;
  name: string;
  area: string;
  iconName: string;
  brandColor: string;
  invertColors: boolean;
  description: string;
}

export interface JobLinkedProject {
  id: string;
  name: string;
  shortDescription: string;
  repository: string;
  url: string;
}

export interface JobApplication {
  id: string;
  company: string;
  role: string;
  area: string;
  location: string;
  status: 'draft' | 'applied' | 'review' | 'interview' | 'offer' | 'rejected' | string;
  date: string;
  salaryRange: string;
  lastSalaryRef: string;
  jobUrl: string;
  technologies: JobTechnology[];
  linkedProjects: JobLinkedProject[];
  markdownContent: string;
}

export interface EncryptedVaultPayload {
  saltHex: string;
  ivHex: string;
  authTagHex: string;
  ciphertextHex: string;
  count: number;
}

function hexToUint8Array(hex: string): Uint8Array {
  const match = hex.match(/.{1,2}/g);
  if (!match) return new Uint8Array(0);
  return new Uint8Array(match.map(byte => parseInt(byte, 16)));
}

/**
 * Descifra el payload de postulaciones laborales utilizando la API nativa Web Crypto
 * @param payload Datos cifrados con AES-256-GCM y PBKDF2
 * @param pin PIN de 6 dígitos ingresado por el usuario
 * @returns Array de postulaciones o null si el PIN es incorrecto
 */
export async function decryptJobApplications(
  payload: EncryptedVaultPayload,
  pin: string
): Promise<JobApplication[] | null> {
  try {
    if (!payload || !payload.ciphertextHex || !pin) return null;

    const salt = hexToUint8Array(payload.saltHex);
    const iv = hexToUint8Array(payload.ivHex);
    const authTag = hexToUint8Array(payload.authTagHex);
    const ciphertext = hexToUint8Array(payload.ciphertextHex);

    // En Web Crypto API, AES-GCM espera el ciphertext concatenado con el authTag
    const combined = new Uint8Array(ciphertext.length + authTag.length);
    combined.set(ciphertext);
    combined.set(authTag, ciphertext.length);

    const encoder = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey(
      'raw',
      encoder.encode(pin),
      { name: 'PBKDF2' },
      false,
      ['deriveKey']
    );

    const key = await window.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: salt as unknown as BufferSource,
        iterations: 100000,
        hash: 'SHA-256'
      },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt']
    );

    const decrypted = await window.crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: iv as unknown as BufferSource
      },
      key,
      combined as unknown as BufferSource
    );

    const decoder = new TextDecoder();
    const jsonString = decoder.decode(decrypted);
    return JSON.parse(jsonString) as JobApplication[];
  } catch (error) {
    // Si el PIN es incorrecto o la autenticación GCM falla
    console.warn('Fallo de descifrado del Vault: PIN incorrecto o payload inválido.');
    return null;
  }
}
