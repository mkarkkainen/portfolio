import Particles from '@/components/Particles';
import { projectsData } from '@/data/projectsData';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  SiCss3,
  SiHtml5,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiNextdotjs,
} from '@icons-pack/react-simple-icons';

interface ProjectData {
  description: string;
  roles: string[];
  title: string;
  tools: string[];
}

interface ProjectsProps {
  projectsData: ProjectData[] | null; // Define the type of projectsData
}

export default function Home() {
  return (
    <div className='flex flex-col gap-8'>
      <Particles
        className='absolute inset-0 -z-10 animate-fade-in'
        quantity={100}
      />
      <Header />
      <About />
      <Tools />
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
        Hey, my name is Miikka. I’m a UX/UI designer & Front-end web developer
        based in Costa Rica. I’m interested in the intersection between design
        and technology and always curious to learn.. and also big into surfing.
      </p>
    </div>
  );
}

function Tools() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='text-secondary flex flex-col gap-2'>
        <h1 className='text-quaternary'>tools</h1>
        <div className='flex flex-row  gap-3'>
          <a href='https://react.dev/' target='_blank'>
            <SiReact color='default' size={24} />
          </a>
          <a href='https://nextjs.org/' target='_blank'>
            <SiNextdotjs color='default' size={24} />
          </a>
          <a href='https://www.typescriptlang.org/' target='_blank'>
            <SiTypescript color='default' size={24} />
          </a>
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/CSS'
            target='_blank'
          >
            <SiCss3 color='default' size={24} />
          </a>
          <a
            href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
            target='_blank'
          >
            <SiHtml5 color='default' size={24} />
          </a>
          <a href='https://tailwindcss.com/' target='_blank'>
            <SiTailwindcss color='default' size={24} />
          </a>
          <a href='https://nodejs.org/en/about' target='_blank'>
            <SiNodedotjs color='default' size={24} />
          </a>
          <a href='https://git-scm.com/' target='_blank'>
            <SiGit color='default' size={24} />
          </a>
        </div>
      </div>
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
      <div className='flex flex-row gap-2'>
        <h3 className='text-quaternary'>Role:</h3>
        {roles.map((role, i) => (
          <p key={role + i}>{`${role}${i !== roles.length - 1 ? ',' : ''}`}</p>
        ))}
      </div>
      <div className='flex flex-row gap-2'>
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
              <li key={project.title + index}>
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
        href='https://shorturl.at/nKMP9'
        title='resume'
        website='click'
      />
    </div>
  );
}
