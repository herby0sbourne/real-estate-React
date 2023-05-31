import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Offers from './pages/Offers.jsx';
import ForgotPassword from './pages/forgotPassword';
import CreateListing from './pages/CreateListing.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Layout from './components/Layout.jsx';
import EditListing from './pages/EditListing.jsx';

// import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/create-listing" element={<CreateListing />} /> */}
        </Route>
        <Route path="/edit-listing/:id" element={<EditListing />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
