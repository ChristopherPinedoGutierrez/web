import React, { useEffect, useState } from 'react';
import { GridGroupProjects } from '../components/GridGroupProjects';
import { projectLevels, projectsInfo, projectStates } from '../../../../resources/data/projectsInfo';
import { areas } from '../../../../resources/data/baseFiles/areas';
import { ClippedDrawerContained } from '../../../../library/common/components/ClippedDrawerContained';

function SectionDashboardProjects() {
  const [filters, setFilters] = useState({
    Areas: {},
    Estados: {},
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

    const stateFilters = Object.values(projectStates).reduce((acc, state) => {
      acc[state.id] = { name: state.name, active: true };
      return acc;
    }, {});

    const levelFilters = Object.values(projectLevels).reduce((acc, level) => {
      acc[level.id] = { name: level.name, active: true };
      return acc;
    }, {});

    const techFilters = projectsInfo.reduce((acc, project) => {
      project.content.technologies.forEach((tech) => {
        if (!acc[tech.id]) {
          acc[tech.id] = { name: tech.name, active: true };
        }
      });
      return acc;
    }, {});

    setFilters({ Areas: areasFilters, Estados: stateFilters, Niveles: levelFilters, Tecnologías: techFilters });
  }, []);

  useEffect(() => {
    // console.log(filters);
    const filterProjects = () => {
      return projectsInfo.filter((project) => {
        const areaMatch = filters.Areas[project.config.area.id]?.active;
        const stateMatch = filters.Estados[project.config.status.id]?.active;
        const levelMatch = filters.Niveles[project.config.level.id]?.active;
        const techMatch = project.content.technologies.some((tech) => filters.Tecnologías[tech.id]?.active);

        return areaMatch && stateMatch && levelMatch && techMatch;
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
