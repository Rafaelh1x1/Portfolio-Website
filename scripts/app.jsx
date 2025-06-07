const {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} = ReactRouterDOM;

const projects = [
  {
    slug: 'zysc',
    name: 'ZYSC LLC',
    image: 'images/work-zysc.png',
    alt: 'ZYSC LLC LOGO',
    href: 'https://zyscsoftware.com/',
    description:
      "Apart of a medical/financial software startup, developing a web application that will revolutionize the healthcare industry's insurance and billing process."
  },
  {
    slug: 'drone',
    name: 'Autonomous Drone Simulation',
    image: 'images/project-x500.png',
    alt: 'X500 Drone in Gazebo',
    href: 'https://youtu.be/v6SbDXBtIYU',
    description:
      'Autonomous drone simulation that can land mid-mission using ADS-B to detect nearby drones.'
  },
  {
    slug: 'clock',
    name: 'LCD Clock',
    image: 'images/micro.jpg',
    alt: 'image of microcontroller',
    href: 'https://www.youtube.com/shorts/1nZ15_lz04I',
    description:
      'Embedded systems project where I learned firmware and hardware debugging using microcontrollers.'
  },
  {
    slug: 'half-moon',
    name: 'HALF MOON SEAFOOD CO.',
    image: 'images/project-hmsw.png',
    alt: 'Half Moon Seafood Logo',
    href: 'https://half-moon-website-development.netlify.app/',
    description:
      'Business website for the Half Moon Seafood Company built to improve their digital presence.'
  },
  {
    slug: 'portfolio-site',
    name: 'PORTFOLIO WEBSITE',
    image: 'images/project-portfolio.jpg',
    alt: 'image of this website as project',
    href: '#',
    description:
      "Portfolio Website... you're looking at it! Originally built with HTML, CSS and JavaScript."
  },
  {
    slug: 'github',
    name: 'CHECK MY GITHUB',
    image: 'images/github-img.jpg',
    alt: 'Github preview image',
    href: 'https://github.com/Rafaelh1x1',
    description: 'I have many more projects on my Github to check out!'
  }
];

function Home() {
  return (
    <div className="border-container">
      <h1 className="main-heading">Projects &amp; Experience</h1>
      <p>Select an item to read more.</p>
      <ul>
        {projects.map(p => (
          <li key={p.slug}>
            <Link to={`/${p.slug}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) return <p>Not found</p>;
  return (
    <div className="border-container">
      <h1 className="main-heading">{project.name}</h1>
      <img src={project.image} alt={project.alt} className="project-2-img" />
      <p className="section">{project.description}</p>
      {project.href && (
        <p className="section">
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
        </p>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
