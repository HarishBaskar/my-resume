import React from 'react';
import { getPageMetadata } from '../../Constants/metadata';
import AboutComponent from '../../Pages/About/About';

export const metadata = getPageMetadata('about');

export default function AboutPage() {
  return <AboutComponent />;
}