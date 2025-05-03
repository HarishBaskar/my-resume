export const REVALIDATE_INTERVALS = {
  home: 3600, // 1 hour
  about: 86400, // 24 hours
  projects: 86400, // 24 hours
  sitemap: 86400 // 24 hours
};

export const dynamicParams = false; // Disable dynamic params for static optimization

export const generateStaticParams = async () => {
  return [
    { slug: 'about' },
    { slug: 'projects' }
  ];
};

export const generateMetadata = {
  runtime: 'nodejs',
  regions: ['iad1'], // deploy to US East (N. Virginia)
  memory: 1024,
  maxDuration: 5
};