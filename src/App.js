import './App.css';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Dashboard from './components/admin/pages/Dashboard';
import UserManagementPage from './pages/UserManagementPage';
import RoleManagementPage from './pages/RoleManagementPage';
import WikiManagementPage from './pages/WikiManagementPage';
import SearchSummarizationPage from './pages/SearchSummarizationPage';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="user-management" element={<UserManagementPage />} />
            <Route path="role-management" element={<RoleManagementPage />} />
            <Route path="wiki-management" element={<WikiManagementPage />} />
            <Route path="search-summarization" element={<SearchSummarizationPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
