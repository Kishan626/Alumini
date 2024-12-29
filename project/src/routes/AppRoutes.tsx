import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { SignupPage } from '../pages/auth/SignupPage';
import { AlumniDashboardPage } from '../pages/Alumni/Dashboard';
import { AlumniJobsPage } from '../pages/Alumni/Jobs';
import { AlumniEventsPage } from '../pages/Alumni/Events';
import { AlumniDonationsPage } from '../pages/Alumni/Donations';
import { PostJobPage } from '../pages/Alumni/PostJob';
import { MakeDonationPage } from '../pages/Alumni/MakeDonation';
import { StudentDashboardPage } from '../pages/student/Dashboard';
import { AdminDashboardPage } from '../pages/admin/Dashboard';
import { ManageJobsPage } from '../pages/admin/ManageJobs';
import { ManageUsersPage } from '../pages/admin/ManageUsers';

export function AppRoutes() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      
      {/* Alumni Routes */}
      <Route path="/alumni/dashboard" element={<AlumniDashboardPage />} />
      <Route path="/alumni/jobs" element={<AlumniJobsPage />} />
      <Route path="/alumni/jobs/post" element={<PostJobPage />} />
      <Route path="/alumni/events" element={<AlumniEventsPage />} />
      <Route path="/alumni/donations" element={<AlumniDonationsPage />} />
      <Route path="/alumni/donations/make" element={<MakeDonationPage />} />
      
      {/* Student Routes */}
      <Route path="/student/dashboard" element={<StudentDashboardPage />} />
      
      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      <Route path="/admin/jobs" element={<ManageJobsPage />} />
      <Route path="/admin/users" element={<ManageUsersPage />} />
      
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}