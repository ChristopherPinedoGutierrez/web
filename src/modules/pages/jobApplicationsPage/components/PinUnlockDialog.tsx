import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  TextField,
  Button,
  Alert,
  CircularProgress,
  useTheme,
  Fade,
  IconButton
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import KeyIcon from '@mui/icons-material/Key';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import { decryptJobApplications, EncryptedVaultPayload, JobApplication } from '../../../../library/common/utils/vaultCrypto';

interface PinUnlockDialogProps {
  encryptedPayload: EncryptedVaultPayload;
  onUnlock: (applications: JobApplication[], pin: string) => void;
}

export function PinUnlockDialog({ encryptedPayload, onUnlock }: PinUnlockDialogProps) {
  const [pin, setPin] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const theme = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleVerifyPin = async (pinToTest: string) => {
    if (pinToTest.length !== 6) {
      setError('El PIN debe tener 6 dígitos numéricos.');
      return;
    }

    setIsLoading(true);
    setError('');

    // Pequeño delay de UX para feedback
    await new Promise(resolve => setTimeout(resolve, 150));

    const result = await decryptJobApplications(encryptedPayload, pinToTest);
    setIsLoading(false);

    if (result && Array.isArray(result) && result.length > 0) {
      onUnlock(result, pinToTest);
    } else {
      setError('PIN incorrecto. Acceso denegado al Vault.');
      setPin('');
      if (inputRef.current) inputRef.current.focus();
    }
  };

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 6);
    setPin(val);
    setError('');
    if (val.length === 6) {
      handleVerifyPin(val);
    }
  };

  const handleDigitClick = (digit: string) => {
    if (pin.length < 6) {
      const nextPin = pin + digit;
      setPin(nextPin);
      setError('');
      if (nextPin.length === 6) {
        handleVerifyPin(nextPin);
      }
    }
  };

  const handleDeleteDigit = () => {
    setPin(prev => prev.slice(0, -1));
    setError('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '75vh',
        px: 2
      }}
    >
      <Fade in timeout={400}>
        <Card
          sx={{
            maxWidth: 420,
            width: '100%',
            p: { xs: 2, sm: 3 },
            borderRadius: 4,
            boxShadow: theme.palette.mode === 'dark' ? '0 12px 36px rgba(0,0,0,0.6)' : '0 12px 36px rgba(0,0,0,0.08)',
            border: '1px solid',
            borderColor: 'divider',
            textAlign: 'center'
          }}
        >
          <CardContent>
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 2,
                boxShadow: '0 4px 16px rgba(25, 118, 210, 0.4)'
              }}
            >
              <LockOutlinedIcon sx={{ fontSize: 32 }} />
            </Box>

            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Job Applications Vault
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Información de postulaciones cifrada con AES-256 (Zero-Knowledge). Ingresa tu PIN de 6 dígitos para desbloquear.
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>
                {error}
              </Alert>
            )}

            {/* Visualización de los 6 dígitos */}
            <Stack direction="row" spacing={1.5} justifyContent="center" sx={{ mb: 3 }}>
              {[0, 1, 2, 3, 4, 5].map((index) => {
                const hasDigit = pin.length > index;
                return (
                  <Box
                    key={index}
                    sx={{
                      width: 42,
                      height: 48,
                      borderRadius: 2,
                      border: '2px solid',
                      borderColor: hasDigit ? 'primary.main' : 'divider',
                      bgcolor: hasDigit ? (theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.light') : 'background.paper',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      transition: 'all 0.2s ease',
                      opacity: hasDigit ? 1 : 0.6
                    }}
                  >
                    {hasDigit ? '•' : ''}
                  </Box>
                );
              })}
            </Stack>

            {/* Input invisible para teclado físico en desktop / mobile */}
            <TextField
              inputRef={inputRef}
              type="password"
              inputMode="numeric"
              value={pin}
              onChange={handlePinChange}
              disabled={isLoading}
              autoFocus
              sx={{
                position: 'absolute',
                opacity: 0,
                pointerEvents: 'none',
                height: 0,
                width: 0
              }}
            />

            {/* Teclado numérico táctil optimizado para móvil */}
            <Box sx={{ maxWidth: 280, mx: 'auto', mb: 2 }}>
              <Stack spacing={1.5}>
                {[
                  ['1', '2', '3'],
                  ['4', '5', '6'],
                  ['7', '8', '9'],
                  ['C', '0', 'DEL']
                ].map((row, rIdx) => (
                  <Stack key={rIdx} direction="row" spacing={1.5} justifyContent="center">
                    {row.map((btn) => {
                      if (btn === 'C') {
                        return (
                          <Button
                            key={btn}
                            variant="outlined"
                            onClick={() => { setPin(''); setError(''); }}
                            disabled={isLoading || pin.length === 0}
                            sx={{ width: 72, height: 48, borderRadius: 2, fontWeight: 'bold' }}
                          >
                            C
                          </Button>
                        );
                      }
                      if (btn === 'DEL') {
                        return (
                          <IconButton
                            key={btn}
                            onClick={handleDeleteDigit}
                            disabled={isLoading || pin.length === 0}
                            sx={{ width: 72, height: 48, borderRadius: 2, border: '1px solid', borderColor: 'divider' }}
                          >
                            <BackspaceOutlinedIcon fontSize="small" />
                          </IconButton>
                        );
                      }
                      return (
                        <Button
                          key={btn}
                          variant="outlined"
                          onClick={() => handleDigitClick(btn)}
                          disabled={isLoading}
                          sx={{
                            width: 72,
                            height: 48,
                            borderRadius: 2,
                            fontSize: '1.1rem',
                            fontWeight: '600'
                          }}
                        >
                          {btn}
                        </Button>
                      );
                    })}
                  </Stack>
                ))}
              </Stack>
            </Box>

            {isLoading && (
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
                <CircularProgress size={20} />
                <Typography variant="caption" color="text.secondary">
                  Descifrando Vault en memoria...
                </Typography>
              </Stack>
            )}
          </CardContent>
        </Card>
      </Fade>
    </Box>
  );
}
