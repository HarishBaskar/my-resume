import React from 'react';
import { getPageMetadata } from '../../Constants/metadata';
import ProjectsComponent from '../../Pages/Projects/Projects';

export const metadata = getPageMetadata('projects');

export default function ProjectsPage() {
  return <ProjectsComponent />;
}