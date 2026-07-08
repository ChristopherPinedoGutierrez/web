import React, { useEffect, useState } from 'react';
import { GridGroupProjects } from '../components/GridGroupProjects';
import { projectLevels, projectsInfo, projectStates } from '../../../../resources/data/projectsInfo';
import { areas } from '../../../../resources/data/baseFiles/areas';
import { ClippedDrawerContained } from '../../../../library/common/components/ClippedDrawerContained';

interface SectionDashboardProjectsProps {
  selectedId?: string;
}

interface FilterItem {
  name: string;
  active: boolean;
}

interface Filters {
  Areas: Record<string, FilterItem>;
  Estados: Record<string, FilterItem>;
  Niveles: Record<string, FilterItem>;
  Tecnologías: Record<string, FilterItem>;
}

function SectionDashboardProjects({ selectedId }: SectionDashboardProjectsProps) {
  const [filters, setFilters] = useState<Filters>({
    Areas: {},
    Estados: {},
    Niveles: {},
    Tecnologías: {}
  });
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);

  useEffect(() => {
    const areasFilters = Object.values(areas).reduce((acc: Record<string, FilterItem>, area: any) => {
      if (area.filterProjects) {
        acc[area.id] = { name: area.name, active: true };
      }
      return acc;
    }, {});

    const stateFilters = Object.values(projectStates).reduce((acc: Record<string, FilterItem>, state: any) => {
      acc[state.id] = { name: state.name, active: true };
      return acc;
    }, {});

    const levelFilters = Object.values(projectLevels).reduce((acc: Record<string, FilterItem>, level: any) => {
      acc[level.id] = { name: level.name, active: true };
      return acc;
    }, {});

    const cleanSelectedId = selectedId ? selectedId.replace(/^:/, '') : '';
    const hasValidSelection = selectedId !== undefined && selectedId !== ':id';

    const techFilters = projectsInfo.reduce((acc: Record<string, FilterItem>, project: any) => {
      project.content.technologies.forEach((tech: any) => {
        if (!acc[tech.id]) {
          acc[tech.id] = { 
            name: tech.name, 
            active: hasValidSelection ? tech.id === cleanSelectedId : true 
          };
        }
      });
      return acc;
    }, {});

    setFilters({
      Areas: areasFilters as Record<string, FilterItem>,
      Estados: stateFilters as Record<string, FilterItem>,
      Niveles: levelFilters as Record<string, FilterItem>,
      Tecnologías: techFilters as Record<string, FilterItem>
    });
  }, [selectedId]);

  useEffect(() => {
    const filterProjects = () => {
      return projectsInfo.filter((project: any) => {
        const areaMatch = filters.Areas[project.config.area.id]?.active;
        const stateMatch = filters.Estados[project.config.status.id]?.active;
        const levelMatch = filters.Niveles[project.config.level.id]?.active;
        const techMatch = project.content.technologies.some((tech: any) => filters.Tecnologías[tech.id]?.active);

        return areaMatch && stateMatch && levelMatch && techMatch;
      });
    };
    if (Object.keys(filters.Areas).length > 0) {
      setFilteredProjects(filterProjects());
    }
  }, [filters]);

  const handleFilters = (section: keyof Filters, element: string) => {
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

  const handleToggleAllFilters = (section: keyof Filters, allChecked: boolean) => {
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
