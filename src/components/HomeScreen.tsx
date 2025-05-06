
import React from 'react';
import { Award, Calendar, Footprints, Salad } from 'lucide-react';
import { cn } from '@/lib/utils';

const HomeScreen: React.FC<{ onTabChange: (tab: string) => void }> = ({ onTabChange }) => {
  return (
    <div className="space-y-6 animate-slide-in">
      <div className="bg-stepup-purple text-white p-5 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Hi, Sarah!</h2>
        <p className="opacity-90">You're doing great this week. Keep it up!</p>
        
        <div className="mt-4 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
          <div className="flex justify-between items-center">
            <span className="text-sm">Weekly Goal Progress</span>
            <span className="text-sm font-medium">75%</span>
          </div>
          <div className="mt-2 h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="bg-white h-full rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div 
          className="bg-stepup-soft-blue p-4 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => onTabChange('steps')}
        >
          <Footprints className="h-6 w-6 text-stepup-purple mb-2" />
          <h3 className="font-semibold">Steps</h3>
          <p className="text-2xl font-bold mt-1">7,834</p>
          <p className="text-xs text-gray-600">of 10,000 daily goal</p>
        </div>
        
        <div 
          className="bg-stepup-soft-pink p-4 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => onTabChange('meal')}
        >
          <Salad className="h-6 w-6 text-stepup-purple mb-2" />
          <h3 className="font-semibold">Meals</h3>
          <p className="text-sm mt-1">Next: Lunch</p>
          <p className="text-xs text-gray-600">Greek Salad</p>
        </div>
        
        <div 
          className="bg-stepup-soft-green p-4 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => onTabChange('workout')}
        >
          <Calendar className="h-6 w-6 text-stepup-purple mb-2" />
          <h3 className="font-semibold">Workout</h3>
          <p className="text-sm mt-1">Today: Strength</p>
          <p className="text-xs text-gray-600">4 exercises</p>
        </div>
        
        <div 
          className="bg-stepup-soft-yellow p-4 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
        >
          <Award className="h-6 w-6 text-stepup-purple mb-2" />
          <h3 className="font-semibold">Stats</h3>
          <p className="text-sm mt-1">5 day streak</p>
          <p className="text-xs text-gray-600">Personal best!</p>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <h3 className="font-semibold mb-3">Today's Plan</h3>
        
        <div className="space-y-3">
          {[
            { time: '7:30 AM', task: 'Morning Walk', completed: true },
            { time: '8:15 AM', task: 'Breakfast', completed: true },
            { time: '12:30 PM', task: 'Lunch', completed: false },
            { time: '5:00 PM', task: 'Strength Workout', completed: false },
            { time: '7:00 PM', task: 'Dinner', completed: false },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-2 border-b last:border-b-0">
              <div className={cn(
                "h-5 w-5 rounded-full border flex items-center justify-center",
                item.completed ? "bg-stepup-purple border-stepup-purple" : "border-gray-300"
              )}>
                {item.completed && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className={cn(
                    "font-medium",
                    item.completed ? "text-gray-400 line-through" : ""
                  )}>
                    {item.task}
                  </span>
                  <span className="text-xs text-gray-500">{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
