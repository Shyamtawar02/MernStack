// App.jsx
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Signup from './component/SignUp';
import Login from './component/Login';

function App() {
  return (
    <div className="container mt-4">
      <nav className="d-flex justify-content-center mb-4">
        <Link to="/signup" className="btn btn-primary me-2">Signup</Link>
        <Link to="/login" className="btn btn-success">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
