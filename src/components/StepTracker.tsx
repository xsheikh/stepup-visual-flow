
import React from 'react';
import { Footprints, Award, TrendingUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const StepTracker: React.FC = () => {
  return (
    <div className="space-y-6 animate-slide-in">
      <div className="step-card space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Footprints className="text-stepup-purple h-5 w-5" />
            <h3 className="font-semibold">Today's Steps</h3>
          </div>
          <span className="text-lg font-bold">7,834</span>
        </div>
        <Progress value={78} className="h-2 w-full" />
        <div className="flex justify-between text-sm text-gray-500">
          <span>Daily Goal: 10,000</span>
          <span>78% Complete</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="step-card">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-stepup-blue h-5 w-5" />
            <h3 className="font-semibold">Weekly</h3>
          </div>
          <p className="text-2xl font-bold">52,468</p>
          <p className="text-xs text-gray-500">steps this week</p>
        </div>
        <div className="step-card">
          <div className="flex items-center gap-2 mb-2">
            <Award className="text-stepup-blue h-5 w-5" />
            <h3 className="font-semibold">Best</h3>
          </div>
          <p className="text-2xl font-bold">12,547</p>
          <p className="text-xs text-gray-500">your record</p>
        </div>
      </div>
      
      <div className="step-card">
        <h3 className="font-semibold mb-3">Weekly Progress</h3>
        <div className="space-y-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
            const values = [65, 45, 90, 30, 75, 60, 20];
            return (
              <div key={day} className="flex items-center gap-4">
                <span className="w-8 text-sm text-gray-500">{day}</span>
                <div className="progress-bar">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${values[i]}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{values[i]}%</span>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="step-card">
        <h3 className="font-semibold mb-3">Leaderboard</h3>
        <div className="space-y-3">
          {[
            { name: 'You', steps: 7834, rank: 3 },
            { name: 'Sarah K.', steps: 9012, rank: 1 },
            { name: 'John D.', steps: 8654, rank: 2 },
            { name: 'Emma W.', steps: 6932, rank: 4 },
            { name: 'Miguel A.', steps: 6344, rank: 5 },
          ].sort((a, b) => a.rank - b.rank).map((person, i) => (
            <div 
              key={person.name} 
              className={cn(
                "flex items-center justify-between p-3 rounded-lg border",
                person.name === 'You' ? "border-stepup-purple bg-stepup-light-purple" : "border-gray-100"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold w-6">{person.rank}</span>
                <span>{person.name}</span>
              </div>
              <span className="font-semibold">{person.steps.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepTracker;

// Helper function since cn isn't locally imported
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
