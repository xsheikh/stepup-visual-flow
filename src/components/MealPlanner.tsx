
import React from 'react';
import { Calendar, Egg, Salad, Utensils } from 'lucide-react';

const MealPlanner: React.FC = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentDayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
  
  // Sample meal plan data
  const mealPlan = [
    {
      breakfast: 'Avocado Toast & Eggs',
      lunch: 'Greek Salad',
      dinner: 'Grilled Salmon & Vegetables'
    },
    {
      breakfast: 'Fruit Smoothie Bowl',
      lunch: 'Quinoa Veggie Bowl',
      dinner: 'Lentil Soup & Bread'
    },
    {
      breakfast: 'Yogurt & Granola',
      lunch: 'Chickpea Wrap',
      dinner: 'Tofu Stir Fry'
    },
    {
      breakfast: 'Oatmeal with Berries',
      lunch: 'Chicken Caesar Salad',
      dinner: 'Veggie Pasta'
    },
    {
      breakfast: 'Protein Pancakes',
      lunch: 'Tuna Sandwich',
      dinner: 'Bean Burrito Bowl'
    },
    {
      breakfast: 'Scrambled Eggs & Toast',
      lunch: 'Pesto Pasta Salad',
      dinner: 'Grilled Chicken & Rice'
    },
    {
      breakfast: 'French Toast',
      lunch: 'Mediterranean Plate',
      dinner: 'Veggie Pizza'
    }
  ];
  
  const [activeDay, setActiveDay] = React.useState(currentDayIndex);
  
  return (
    <div className="space-y-5 animate-slide-in">
      <div className="bg-stepup-soft-blue rounded-2xl p-4 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="text-stepup-purple h-5 w-5" />
            <h3 className="font-semibold">Weekly Meal Plan</h3>
          </div>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2">
          {days.map((day, index) => (
            <button
              key={day}
              onClick={() => setActiveDay(index)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                ${activeDay === index 
                  ? 'bg-white text-stepup-purple' 
                  : 'text-gray-600 hover:bg-white/50'}
              `}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="meal-card border-l-4 border-l-stepup-soft-green">
          <div className="flex items-center gap-2 mb-2">
            <Egg className="text-stepup-purple h-5 w-5" />
            <h3 className="font-semibold">Breakfast</h3>
          </div>
          <p className="text-gray-700">{mealPlan[activeDay].breakfast}</p>
          <div className="mt-2 flex items-center gap-1">
            <span className="text-xs bg-stepup-soft-green px-2 py-0.5 rounded">Protein</span>
            <span className="text-xs bg-stepup-soft-green px-2 py-0.5 rounded">Fiber</span>
          </div>
        </div>
        
        <div className="meal-card border-l-4 border-l-stepup-soft-blue">
          <div className="flex items-center gap-2 mb-2">
            <Salad className="text-stepup-purple h-5 w-5" />
            <h3 className="font-semibold">Lunch</h3>
          </div>
          <p className="text-gray-700">{mealPlan[activeDay].lunch}</p>
          <div className="mt-2 flex items-center gap-1">
            <span className="text-xs bg-stepup-soft-blue px-2 py-0.5 rounded">Lean Protein</span>
            <span className="text-xs bg-stepup-soft-blue px-2 py-0.5 rounded">Greens</span>
          </div>
        </div>
        
        <div className="meal-card border-l-4 border-l-stepup-soft-orange">
          <div className="flex items-center gap-2 mb-2">
            <Utensils className="text-stepup-purple h-5 w-5" />
            <h3 className="font-semibold">Dinner</h3>
          </div>
          <p className="text-gray-700">{mealPlan[activeDay].dinner}</p>
          <div className="mt-2 flex items-center gap-1">
            <span className="text-xs bg-stepup-soft-orange px-2 py-0.5 rounded">Complete Meal</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-4 shadow-md space-y-3">
        <h3 className="font-semibold">Nutritional Goals</h3>
        
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Calories</span>
            <span>1,850 / 2,000</span>
          </div>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: '92.5%' }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Protein</span>
            <span>95g / 120g</span>
          </div>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: '79%' }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Water</span>
            <span>1.6L / 2.5L</span>
          </div>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: '64%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlanner;
