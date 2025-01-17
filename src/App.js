import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultPage from './common/DefaultPage';
import Login from './auth/Login';
import Register from './auth/Register';
import ForgotPassword from './auth/ForgotPassword';
import Dashboard from './Dashboard';
import Visitors from './components/Visitors';
import Chats from './components/Chats';
import Messages from './components/Messages';
import Online from './components/Online';
import Likes from './components/Likes';
import Profile from './profiles/Profile';
import ProfileView from './profiles/ProfileView';
import PageNotFound from './common/PageNotFound';
import UserProfile from './profiles/UserProfile';
import UserProfileView from './components/UserProfileView';
import EditProfile from './profiles/EditProfile';
import Setting from './Setting';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/matches" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/setting" element={<Setting />} />

        {/* Public Routes */}
        {/* <Route path="/visitors" element={<Visitors />} /> */}
        <Route path="/chats" element={<Chats />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/online" element={<Online />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/profile" element={<UserProfileView />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/user-profile/:userId" element={<UserProfile />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
