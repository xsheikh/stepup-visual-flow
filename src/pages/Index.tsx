
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import HomeScreen from '@/components/HomeScreen';
import StepTracker from '@/components/StepTracker';
import MealPlanner from '@/components/MealPlanner';
import WorkoutCalendar from '@/components/WorkoutCalendar';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'steps', label: 'Step Tracker' },
  { id: 'meal', label: 'Meal Planner' },
  { id: 'workout', label: 'Workout Calendar' },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar 
        items={navItems}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <main className="flex-1 container pb-16 pt-4">
        {activeTab === 'home' && <HomeScreen onTabChange={setActiveTab} />}
        {activeTab === 'steps' && <StepTracker />}
        {activeTab === 'meal' && <MealPlanner />}
        {activeTab === 'workout' && <WorkoutCalendar />}
      </main>
    </div>
  );
};

export default Index;
