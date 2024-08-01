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
    const areasFilters = Object.values(areas).reduce((acc, area) => {
      if (area.filterProjects) {
        acc[area.id] = { name: area.name, active: true };
      }
      return acc;
    }, {});

    const levelFilters = Object.values(projectLevels).reduce((acc, level) => {
      acc[level.id] = { name: level.name, active: true };
      return acc;
    }, {});

    const techFilters = projectsInfo.reduce((acc, project) => {
      project.technologies.forEach((tech) => {
        if (!acc[tech.id]) {
          acc[tech.id] = { name: tech.name, active: true };
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
        const areaMatch = filters.Areas[project.area.id]?.active;
        const levelMatch = filters.Niveles[project.level.id]?.active;
        const techMatch = project.technologies.every((tech) => filters.Tecnologías[tech.id]?.active);

        return areaMatch && levelMatch && techMatch;
      });
    };
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
