// 'use client';
// import Particles from '@/components/Particles';
import { projectsData } from '@/data/projectsData';

interface ProjectData {
  alt: string;
  brief: string;
  challenge: string;
  colors: string[];
  conclusion: string;
  contribution: string[];
  coverimg: string;
  description: string;
  design: string;
  features: string[];
  label: string;
  newKey: string;
  objectives: string[];
  path: string;
  roles: string[];
  target: string;
  title: string;
  tools: string[];
  ux: string;

  // ... other properties
}

interface ProjectsProps {
  projectsData: ProjectData[] | null; // Define the type of projectsData
}

export default function Home() {
  return (
    <div className='flex flex-col gap-8'>
      {/* <Particles
        className='absolute inset-0 -z-10 animate-fade-in'
        quantity={100}
      /> */}
      <Header />
      <About />

      <Projects projectsData={projectsData} />
    </div>
  );
}

function Header() {
  return (
    <div className='flex flex-col items-start gap-4'>
      <div className='text-secondary'>
        <h1 className='text-xl'>Miikka Kärkkäinen</h1>
        <p className='text-quaternary pointer-events-none'>
          Developer & Designer
        </p>
      </div>
      <Contact />
    </div>
  );
}

function About() {
  return (
    <div className='flex flex-col'>
      <h1 className='text-quaternary'>about</h1>
      <p className='pointer-events-none text-secondary'>
        Hey, my name is Miikka. I&apos;m a design minded developer. I&apos;m
        interested in the intersection between design and technology and always
        curious to learn. I&apos;m a big fan of React and Next.js. I&apos;m
        currently looking for new opportunities to learn and grow as a
        developer.
      </p>
    </div>
  );
}

function ProjectCard({
  description,
  title,
  tools,
  roles,
}: {
  description: string;
  roles: string[];
  title: string;
  tools: string[];
}) {
  return (
    <div className='border border-gray-600 hover:border-gray-400 rounded-xl p-4 flex flex-col gap-4'>
      <h1>{title}</h1>
      <div className='flex flex-row flex-wrap gap-2'>
        <h3 className='text-quaternary'>Role:</h3>
        {roles.map((role, i) => (
          <p key={role + i}>{`${role}${i !== roles.length - 1 ? ',' : ''}`}</p>
        ))}
      </div>
      <div className='flex flex-row flex-wrap gap-2'>
        <h3 className='text-quaternary'>Tools:</h3>
        {tools.map((tool, i) => (
          <p key={tool + i}>{`${tool}${i !== tools.length - 1 ? ',' : ''}`}</p>
        ))}
      </div>
      <p>{description}</p>
    </div>
  );
}

function Projects({ projectsData }: ProjectsProps) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='text-secondary flex flex-col gap-2'>
        <h1 className='text-quaternary'>projects</h1>
        <ul className='flex flex-col gap-4'>
          {projectsData &&
            projectsData.map((project, index) => (
              <li className='cursor-pointer' key={project.title + index}>
                <ProjectCard
                  description={project.description}
                  roles={project.roles}
                  title={project.title}
                  tools={project.tools}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

function ContactLink({
  href,
  title,
  website,
}: {
  href?: string;
  title: string;
  website?: string;
}) {
  return (
    <span className='block items-center mr-8'>
      {title && <p className='text-quaternary'>{title}</p>}
      {href && (
        <a
          className='text-secondary hover:text-primary transition-opacity duration-150'
          href={href}
          rel='noopener noreferrer'
          target='_blank'
        >
          {website}{' '}
          <svg
            className='inline-block h-3 w-3 text-[#FC5200]'
            fill='none'
            stroke='currentColor'
            strokeWidth={1.5}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </a>
      )}
    </span>
  );
}

function Contact() {
  return (
    <div className='flex flex-col gap-2 md:flex-row justify-between'>
      <ContactLink
        href='mailto:miikkaaa@gmail.com'
        title='email'
        website='miikkaaa[ät]gmail[dot]com'
      />
      <ContactLink
        href='https://github.com/mkarkkainen'
        title='github'
        website='mkarkkainen'
      />
      <ContactLink
        href='https://shorturl.at/vBEGS'
        title='resume'
        website='click'
      />
    </div>
  );
}
