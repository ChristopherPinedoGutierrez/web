/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import profileFace1 from '../../../resources/images/ProfileFace1.jpg';
import Image from 'mui-image';
import { personalInfo } from '../../../resources/data/personalInfo';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReactWhatsapp from 'react-whatsapp';
import { SectionKnowledge } from './sections/SectionKnowledge';
import { CardItemText } from './components/CardItemText';
import { SectionIntro } from './sections/SectionIntro';
import { BasePageLayout } from '../../layouts/BasePageLayout';

function ProfilePage() {
  return (
    <BasePageLayout>
      {/* Sección: Intro */}
      <Grid item xs={12}>
        <SectionIntro />
      </Grid>
      {/* Sección: Conocimiento */}
      <Grid item xs={12}>
        <SectionKnowledge />
      </Grid>
    </BasePageLayout>
  );
}

export { ProfilePage };
