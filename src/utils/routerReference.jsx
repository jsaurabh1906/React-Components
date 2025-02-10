const routerReference = [
  {
    id: 1,
    title: "BrowserRouter",
    description:
      "A router implementation that uses the HTML5 history API to keep UI in sync with the URL. The primary router component that wraps your app.",
    syntax: "<BrowserRouter><App /></BrowserRouter>",
    code: `import { BrowserRouter } from 'react-router-dom';
  
  const App = () => {
    return (
      <BrowserRouter>
        <div>
          {/* Your app components */}
        </div>
      </BrowserRouter>
    );
  }`,
  },
  {
    id: 2,
    title: "Routes and Route",
    description:
      "Routes is a container for multiple Route components. Route renders UI when its path matches the current URL.",
    syntax: "<Routes><Route path='/path' element={<Component/>} /></Routes>",
    code: `import { Routes, Route } from 'react-router-dom';
  
  const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }`,
  },
  {
    id: 3,
    title: "Link",
    description:
      "Provides declarative navigation around your application. Renders an accessible <a> element with a real href.",
    syntax: "<Link to='/path'>Link Text</Link>",
    code: `import { Link } from 'react-router-dom';
  
  const Navigation = () => {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/123" state={{ from: 'navigation' }}>
          User Profile
        </Link>
      </nav>
    );
  }`,
  },
  {
    id: 4,
    title: "useNavigate",
    description:
      "A hook that returns a function to programmatically navigate between routes.",
    syntax: "const navigate = useNavigate()",
    code: `import { useNavigate } from 'react-router-dom';
  
  const LoginButton = () => {
    const navigate = useNavigate();
    
    const handleLogin = () => {
      // After successful login
      navigate('/dashboard', { 
        replace: true,
        state: { isAuthenticated: true }
      });
    };
    
    return <button onClick={handleLogin}>Login</button>;
  }`,
  },
  {
    id: 5,
    title: "useParams",
    description:
      "A hook that returns an object containing the dynamic parameters from the current URL.",
    syntax: "const { paramName } = useParams()",
    code: `import { useParams } from 'react-router-dom';
  
  const UserProfile = () => {
    const { id } = useParams();
    return <div>User ID: {id}</div>;
  }`,
  },
  {
    id: 6,
    title: "useLocation",
    description:
      "A hook that returns the current location object containing information about the current URL.",
    syntax: "const location = useLocation()",
    code: `import { useLocation } from 'react-router-dom';
  
  const PageView = () => {
    const location = useLocation();
    
    return (
      <div>
        <p>Current Path: {location.pathname}</p>
        <p>Search Query: {location.search}</p>
        <p>State: {JSON.stringify(location.state)}</p>
      </div>
    );
  }`,
  },
  {
    id: 7,
    title: "Outlet",
    description:
      "Renders child routes inside parent route layouts. Used for nested routing.",
    syntax: "<Outlet />",
    code: `import { Outlet } from 'react-router-dom';
  
  const Layout = () => {
    return (
      <div>
        <nav>{/* Navigation components */}</nav>
        <main>
          <Outlet /> {/* Child routes render here */}
        </main>
        <footer>{/* Footer content */}</footer>
      </div>
    );
  }`,
  },
  {
    id: 8,
    title: "Navigate",
    description:
      "A component for declarative navigation, useful for redirects and authentication flows.",
    syntax: "<Navigate to='/path' replace={true} />",
    code: `import { Navigate } from 'react-router-dom';
  
  const PrivateRoute = ({ isAuthenticated }) => {
    return isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate 
        to="/login" 
        replace={true}
        state={{ from: location }}
      />
    );
  }`,
  },
  {
    id: 9,
    title: "useSearchParams",
    description:
      "A hook that helps manage URL search parameters, similar to URLSearchParams.",
    syntax: "const [searchParams, setSearchParams] = useSearchParams()",
    code: `import { useSearchParams } from 'react-router-dom';
  
  const SearchComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q');
    
    return (
      <input
        value={query || ''}
        onChange={(e) => {
          setSearchParams({ q: e.target.value });
        }}
      />
    );
  }`,
  },
];

export default routerReference;
