
import React from 'react';
import { Dumbbell, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const WorkoutCalendar: React.FC = () => {
  const workoutPlan = [
    { 
      day: 'Monday', 
      type: 'Strength', 
      exercises: ['Squats 3×12', 'Bench Press 3×10', 'Rows 3×12', 'Shoulder Press 3×10'],
      icon: Dumbbell,
      color: 'bg-stepup-soft-pink'
    },
    { 
      day: 'Tuesday', 
      type: 'Cardio', 
      exercises: ['30 min Run', '10 min Cooldown', 'Stretching'],
      icon: Dumbbell, // Changed from Running to Dumbbell
      color: 'bg-stepup-soft-blue'
    },
    { 
      day: 'Wednesday', 
      type: 'Rest', 
      exercises: ['Active Recovery', 'Light Stretching', 'Mobility Work'],
      icon: Calendar,
      color: 'bg-stepup-soft-green'
    },
    { 
      day: 'Thursday', 
      type: 'Strength', 
      exercises: ['Deadlifts 3×10', 'Pull-ups 3×8', 'Lunges 3×12', 'Core Circuit'],
      icon: Dumbbell,
      color: 'bg-stepup-soft-pink'
    },
    { 
      day: 'Friday', 
      type: 'Cardio', 
      exercises: ['HIIT 20 min', 'Cooldown', 'Foam Rolling'],
      icon: Dumbbell, // Changed from Running to Dumbbell
      color: 'bg-stepup-soft-blue'
    },
    { 
      day: 'Saturday', 
      type: 'Active Recovery', 
      exercises: ['Yoga', 'Light Walk', 'Mobility Work'],
      icon: Calendar,
      color: 'bg-stepup-soft-green'
    },
    { 
      day: 'Sunday', 
      type: 'Rest', 
      exercises: ['Complete Rest', 'Recovery', 'Meal Prep'],
      icon: Calendar,
      color: 'bg-stepup-soft-yellow'
    }
  ];

  // Get current day index (0-6 for Monday-Sunday)
  const today = new Date().getDay();
  const currentDayIndex = today === 0 ? 6 : today - 1;
  
  const [expandedDay, setExpandedDay] = React.useState(currentDayIndex);
  
  return (
    <div className="space-y-4 animate-slide-in">
      <div className="bg-stepup-soft-blue rounded-2xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-3 text-center">Weekly Workout Plan</h2>
        <p className="text-sm text-center text-gray-600 mb-2">
          Tap a day to see details
        </p>
      </div>
      
      <div className="space-y-3">
        {workoutPlan.map((workout, index) => (
          <div 
            key={workout.day} 
            className={cn(
              "bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300",
              expandedDay === index ? "pb-3" : ""
            )}
          >
            <div 
              className={cn(
                "workout-day cursor-pointer",
                expandedDay === index ? "bg-gray-50" : "",
                index === currentDayIndex ? "border-l-4 border-stepup-purple" : ""
              )}
              onClick={() => setExpandedDay(expandedDay === index ? -1 : index)}
            >
              <div className={cn("p-3 rounded-lg w-12 h-12 flex items-center justify-center", workout.color)}>
                <workout.icon className="h-5 w-5 text-gray-700" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{workout.day}</span>
                  {index === currentDayIndex && (
                    <span className="text-xs bg-stepup-purple text-white px-2 py-0.5 rounded-full">
                      Today
                    </span>
                  )}
                </div>
                <span className="text-sm text-gray-600">{workout.type}</span>
              </div>
            </div>
            
            {expandedDay === index && (
              <div className="px-4 pt-2 space-y-2">
                <h4 className="text-sm font-medium text-gray-700">Exercises:</h4>
                <ul className="space-y-1">
                  {workout.exercises.map((exercise, i) => (
                    <li key={i} className="text-sm flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-stepup-purple"></span>
                      {exercise}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold mb-3">Progress Tracking</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="border rounded-lg p-3 text-center">
            <p className="text-sm text-gray-600">Workouts Completed</p>
            <p className="text-2xl font-bold text-stepup-purple">12/15</p>
          </div>
          <div className="border rounded-lg p-3 text-center">
            <p className="text-sm text-gray-600">Weekly Goal</p>
            <p className="text-2xl font-bold text-stepup-purple">80%</p>
          </div>
          <div className="border rounded-lg p-3 text-center col-span-2">
            <p className="text-sm text-gray-600">Current Streak</p>
            <p className="text-2xl font-bold text-stepup-purple">5 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCalendar;
