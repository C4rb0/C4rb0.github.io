import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './assets/components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Writeup from './assets/components/pages/Writeup';
import { writeupOrgs, OrgWriteups, WriteupDetail } from './assets/utils/writeupConfig';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="writeup" element={<Writeup />} />
          
          {writeupOrgs.map(org => (
            <Route key={org.id} path={`${org.path}`}>
              <Route index element={<OrgWriteups org={org.id} />} />
              <Route path=":slug" element={<WriteupDetail org={org.id} />} />
            </Route>
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;