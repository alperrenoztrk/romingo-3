import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { applyDarkMode, getStoredPreferences } from "@/lib/preferences";
import BottomNav from "./components/BottomNav";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import ShopPage from "./pages/ShopPage";
import LeaguePage from "./pages/LeaguePage";
import ProfilePage from "./pages/ProfilePage";
import LessonPage from "./pages/LessonPage";
import NotFound from "./pages/NotFound";
import TranslationPage from "./pages/TranslationPage";
import SettingsPage from "./pages/SettingsPage";
import ProfileSettingsPage from "./pages/ProfileSettingsPage";
import SecuritySettingsPage from "./pages/SecuritySettingsPage";
import DailyGoalsSettingsPage from "./pages/DailyGoalsSettingsPage";
import VideosPage from "./pages/VideosPage";
import KahootPage from "./pages/KahootPage";
import GrammarPage from "./pages/GrammarPage";
import ExamListPage from "./pages/ExamListPage";
import ExamPage from "./pages/ExamPage";
import VerbConjugationsPage from "./pages/VerbConjugationsPage";

const queryClient = new QueryClient();

function AppContent() {
  const location = useLocation();
  const hideNav = location.pathname.startsWith("/lesson/");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const { darkMode } = getStoredPreferences();
    applyDarkMode(darkMode);

    const splashTimer = window.setTimeout(() => {
      setShowSplash(false);
    }, 2800);

    return () => window.clearTimeout(splashTimer);
  }, []);

  if (showSplash) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="bg-white text-center">
          <img
            src="https://www.romingoakademi.com/static/images/logo.png"
            alt="Romingo logo"
            className="mx-auto w-60 max-w-[70vw]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/league" element={<LeaguePage />} />
        <Route path="/profile" element={<ProfilePage onLogout={() => {}} />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/settings/profile" element={<ProfileSettingsPage />} />
        <Route path="/settings/security" element={<SecuritySettingsPage />} />
        <Route path="/settings/daily-goals" element={<DailyGoalsSettingsPage />} />
        <Route path="/translate" element={<TranslationPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/kahoot" element={<KahootPage />} />
        <Route path="/grammar" element={<GrammarPage />} />
        <Route path="/exams" element={<ExamListPage />} />
        <Route path="/exams/:examId" element={<ExamPage />} />
        <Route path="/verbs" element={<VerbConjugationsPage />} />
        <Route path="/lesson/:id" element={<LessonPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideNav && <BottomNav />}
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
