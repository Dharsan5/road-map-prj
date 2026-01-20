import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

// Import all pages
import CommandCenterDashboard from './pages/CommandCenterDashboard';
import RoadmapsManagement from './pages/RoadmapsManagement';
import CommunityHub from './pages/CommunityHub';
import EventsCalendar from './pages/EventsCalendar';
import ProfilePage from './pages/ProfilePage';
import AboutLobbora from './pages/AboutLobbora';
import CheckpointScreen from './pages/CheckpointScreen';
import CompareLearningPaths from './pages/CompareLearningPaths';
import DailyTechFeed from './pages/DailyTechFeed';
import DiscoverLearningSession from './pages/DiscoverLearningSession';
import EventDetails from './pages/EventDetails';
import JavaScriptModuleDetails from './pages/JavaScriptModuleDetails';
import LearningPathDashboard from './pages/LearningPathDashboard';
import ScheduleCollaborativeSession from './pages/ScheduleCollaborativeSession';
import TopicProjectIdeas from './pages/TopicProjectIdeas';
import VideoLessonScreen from './pages/VideoLessonScreen';
import RoadmapPathSelection from './pages/RoadmapPathSelection';
import ModuleDetails from './pages/ModuleDetails';
import SessionHome from './pages/SessionHome';
import CreateSession from './pages/CreateSession';
import SessionDetails from './pages/SessionDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CommandCenterDashboard />} />
          <Route path="dashboard" element={<CommandCenterDashboard />} />
          <Route path="roadmaps" element={<RoadmapsManagement />} />
          <Route path="roadmaps/:roadmapId" element={<RoadmapPathSelection />} />
          <Route path="learning-paths/:pathId" element={<LearningPathDashboard />} />
          <Route path="community" element={<CommunityHub />} />
          <Route path="events" element={<EventsCalendar />} />
          <Route path="events/:id" element={<EventDetails />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="about" element={<AboutLobbora />} />
          <Route path="checkpoint" element={<CheckpointScreen />} />
          <Route path="compare-paths" element={<CompareLearningPaths />} />
          <Route path="tech-feed" element={<DailyTechFeed />} />
          <Route path="discover-sessions" element={<DiscoverLearningSession />} />
          <Route path="sessions" element={<SessionHome />} />
          <Route path="sessions/create" element={<CreateSession />} />
          <Route path="sessions/:id" element={<SessionDetails />} />
          <Route path="modules/:id" element={<ModuleDetails />} />
          <Route path="schedule-session" element={<ScheduleCollaborativeSession />} />
          <Route path="project-ideas" element={<TopicProjectIdeas />} />
          <Route path="lessons/:id" element={<VideoLessonScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
