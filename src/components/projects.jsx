import { Box, Heading, Stack } from '@chakra-ui/react';
import { ProjectCard } from './project-card';

export function Projects() {
  return (
    <Box as='section' py='12'>
      <Heading as='h2' size='lg' pb={{ base: '6', md: '12' }}>
        Projects
      </Heading>
      <Stack spacing='16'>
        <ProjectCard
          title='Casaz'
          description='Casaz is a UAE property classifieds website in Miami connecting buyers, investors, landlords, sellers, tenants and brokers to...'
          src='/assets/portfolio-1.png'
          tags={['NextJS', 'Chakra UI', 'Rapid API', 'NodeJS']}
          sitelink="https://cazas.vercel.app"
          repolink="https://github.com/Oxygeeeen/real-estate"
        />
        <ProjectCard
          title='Adminis'
          description='Adminis is a web-based enterprise dashboard designed to monitor various metrics such as Emails Sent, Revenue Generated, Recent Transa...'
          src='/assets/portfolio-2.png'
          tags={['HTML', 'CSS', 'React', 'Material UI']}
          sitelink="https://adminis.vercel.app"
          repolink="https://github.com/Oxygeeeen/react-admin-dashboard"
        />
        <ProjectCard
          title='e-Shopper'
          description='An online hub for shoppers to discover new arrivals, explore product listings, and make successful purchases.'
          src='/assets/portfolio-3.png'
          tags={['HTML', 'CSS', 'SwiperJS', 'Netlify']}
          sitelink="https://e-shoppar.netlify.app"
          repolink="https://github.com/Oxygeeeen/e-Shopper"
        />
      </Stack>
    </Box>
  );
}
