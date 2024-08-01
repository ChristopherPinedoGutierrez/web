/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { GridGroupProjects } from '../components/GridGroupProjects';
import { projectLevels, projectsInfo } from '../../../../resources/data/projectsInfo';
import { areas } from '../../../../resources/data/baseFiles/areas';
import { technologies } from '../../../../resources/data/baseFiles/technologies';
import { ClippedDrawerContained } from '../../../../library/common/components/ClippedDrawerContained';

function SectionDashboardProjects() {
  const [filters, setFilters] = useState({
    Areas: {},
    Niveles: {},
    Tecnologías: {}
  });
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    function findKeyById(obj, targetValue) {
      for (const [key, value] of Object.entries(obj)) {
        if (value.id === targetValue) {
          return key;
        }
      }
      return null;
    }

    const areasFilters = Object.entries(areas)
      .filter(([, area]) => area.filterProjects)
      .reduce((acc, [key, value]) => {
        // console.log(key);
        acc[key] = { name: value.name, active: true };
        return acc;
      }, {});

    const levelFilters = Object.entries(projectLevels).reduce((acc, [key, value]) => {
      acc[key] = { name: value.name, active: true };
      return acc;
    }, {});

    const techFilters = projectsInfo.reduce((acc, project) => {
      project.technologies.forEach((tech) => {
        let currentKey = findKeyById(technologies, tech.id);
        if (currentKey !== null) {
          if (!acc[currentKey]) {
            acc[currentKey] = { name: tech.name, active: true };
          }
        }
      });
      return acc;
    }, {});

    setFilters({ Areas: areasFilters, Niveles: levelFilters, Tecnologías: techFilters });
  }, []);

  useEffect(() => {
    // console.log(filters);
    const filterProjects = () => {
      return projectsInfo.filter((project) => {
        const areaMatch = filters.Areas[project.area.name]?.active;
        const levelMatch = filters.Niveles[project.level.name]?.active;
        const techMatch = project.technologies.some((tech) => filters.Tecnologías[tech.name]?.active);

        console.log('area: ', filters.Areas);
        // console.log('areaMatch: ', project.area.name.active);

        return areaMatch && levelMatch && techMatch;
      });
    };
    console.log(filterProjects());
    setFilteredProjects(filterProjects());
  }, [filters]);

  const handleFilters = (section, element) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [section]: {
        ...prevFilters[section],
        [element]: {
          ...prevFilters[section][element],
          active: !prevFilters[section][element].active
        }
      }
    }));
  };

  const handleToggleAllFilters = (section, allChecked) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [section]: Object.fromEntries(
        Object.entries(prevFilters[section]).map(([key, value]) => [key, { ...value, active: !allChecked }])
      )
    }));
  };

  return (
    <ClippedDrawerContained
      title={'Proyectos'}
      filters={filters}
      handleFilters={handleFilters}
      handleToggleAllFilters={handleToggleAllFilters}
    >
      <GridGroupProjects projects={filteredProjects} />
    </ClippedDrawerContained>
  );
}

export { SectionDashboardProjects };
