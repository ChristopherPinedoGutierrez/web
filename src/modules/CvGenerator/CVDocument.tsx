import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Link, Image } from '@react-pdf/renderer';
import { personalInfo } from '../../resources/data/personalInfo';
import { workExperienceInfo } from '../../resources/data/workExperienceInfo';
import { technologies } from '../../resources/data/baseFiles/technologies';
import profilePic from '../../resources/images/ProfilePic-1-1.jpg';

// Definir estilos
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#333',
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
  },
  imageContainer: {
    marginVertical: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    objectFit: 'cover',
  },
  title: {
    fontSize: 12,
    marginBottom: 8,
    marginTop: 8,
  },
  contact: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    fontSize: 9,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 2,
    marginBottom: 8,
  },
  experienceItem: {
    marginBottom: 10,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  companyRole: {
    fontFamily: 'Helvetica-Bold',
  },
  dates: {
    color: '#666',
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingLeft: 10,
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
  text: {
    marginBottom: 4,
  },
  link: {
    color: '#0056b3',
    textDecoration: 'none',
  }
});

const CVDocument = () => {
  const { variable, fixed } = personalInfo;
  
  // Filtrar experiencia laboral
  const workExp = workExperienceInfo.filter(exp => exp.type === 'work');
  
  // Obtener educación y fusionar ISIL
  const eduExpRaw = workExperienceInfo.filter(exp => exp.type === 'education');
  const isilStart = eduExpRaw.find(e => e.id === 'isil-inicio-milestone');
  const isilEnd = eduExpRaw.find(e => e.id === 'education-milestone');
  
  const mergedEduExp = [];
  if (isilStart && isilEnd) {
    mergedEduExp.push({
      ...isilEnd,
      role: 'Ingeniería de Sistemas de Información (Egresado)',
      period: {
        startDate: isilStart.period.startDate,
        endDate: isilEnd.period.endDate,
      },
      jobFunctions: 'Carrera técnica culminada exitosamente, desarrollando bases sólidas en programación, análisis de sistemas y desarrollo backend.'
    });
  } else if (isilEnd) {
    mergedEduExp.push(isilEnd);
  }
  
  const platzi = eduExpRaw.find(e => e.id === 'platzi-milestone');
  if (platzi) mergedEduExp.push(platzi);

  // Agrupar tecnologías por área
  const allTechs = Object.values(technologies).filter(t => t.state?.name === 'conocidas' || t.state?.name === 'aprendiendo');
  
  // Extraer soft skills de la experiencia si no están en technologies
  const extractedSoftSkills = new Set<string>();
  workExperienceInfo.forEach(exp => {
    exp.coreCompetencies?.forEach((c: any) => {
      extractedSoftSkills.add(c.name);
    });
  });

  const techGroups: Record<string, string[]> = {};
  allTechs.forEach(t => {
    if (!techGroups[t.area]) techGroups[t.area] = [];
    techGroups[t.area].push(t.name);
  });
  
  // Añadir soft skills agrupadas
  if (extractedSoftSkills.size > 0) {
    techGroups['Soft Skills & Management'] = Array.from(extractedSoftSkills);
  }

  // Ordenar áreas para mostrarlas bien
  const sortedAreas = Object.keys(techGroups).sort((a, b) => b.length - a.length);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.name}>{`${fixed.names} ${fixed.surnames}`}</Text>
          <View style={styles.imageContainer}>
             <Image src={profilePic} style={styles.image} />
          </View>
          <Text style={styles.title}>{variable.mainRole}</Text>
          <View style={styles.contact}>
            <Text>Email: {variable.email}</Text>
            <Text>Teléfono: {variable.telephone.countryCode} {variable.telephone.number}</Text>
            <Link src={`https://${variable.socialMedia.linkedin}`} style={styles.link}>LinkedIn</Link>
            <Link src={`https://${variable.socialMedia.github}`} style={styles.link}>GitHub</Link>
            <Link src={`https://${variable.socialMedia.personalWeb}`} style={styles.link}>Web Portfolio</Link>
          </View>
        </View>

        {/* RESUMEN PROFESIONAL */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resumen Profesional</Text>
          <Text style={styles.text}>{variable.presentationMessage1}</Text>
          <Text style={styles.text}>{variable.presentationMessage2}</Text>
          <Text style={styles.text}>{variable.presentationMessage3}</Text>
        </View>

        {/* EXPERIENCIA LABORAL */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiencia Laboral</Text>
          {workExp.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader} wrap={false}>
                <Text style={styles.companyRole}>{exp.role} | {exp.company}</Text>
                <Text style={styles.dates}>{exp.period.startDate} - {exp.period.endDate}</Text>
              </View>
              {exp.cvHighlights && exp.cvHighlights.length > 0 ? (
                exp.cvHighlights.map((highlight: string, i: number) => (
                  <Text key={i} style={{ ...styles.text, marginLeft: 10 }} wrap={false}>• {highlight}</Text>
                ))
              ) : (
                <Text style={{ ...styles.text, marginLeft: 10 }} wrap={false}>• {exp.jobFunctions.replace(/^- /gm, '')}</Text>
              )}
            </View>
          ))}
        </View>

        {/* EDUCACIÓN Y CERTIFICACIONES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Educación y Certificaciones</Text>
          {mergedEduExp.map((exp: any, index: number) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader} wrap={false}>
                <Text style={styles.companyRole}>{exp.role} | {exp.company}</Text>
                <Text style={styles.dates}>{exp.period.startDate} - {exp.period.endDate}</Text>
              </View>
              <Text style={styles.text} wrap={false}>{exp.jobFunctions || 'Estudios cursados con éxito.'}</Text>
              {exp.links && exp.links.length > 0 && (
                <View style={{ marginBottom: 4 }} wrap={false}>
                  {exp.links.map((link: any, i: number) => (
                    <Link key={i} src={link.url} style={styles.link}>{link.title}</Link>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
        
        {/* ÁREAS DE CONOCIMIENTO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Áreas de Conocimiento</Text>
          {sortedAreas.map((area, index) => (
            <Text key={index} style={styles.text} wrap={false}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>{area}: </Text>
              {techGroups[area].join(', ')}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default CVDocument;
