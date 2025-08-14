
import React from 'react';
import { ServerOption } from '../types';

interface OptionSelectorProps {
  title: string;
  icon: React.ReactNode;
  options: ServerOption[];
  selectedOption: ServerOption;
  onSelect: (option: ServerOption) => void;
}

const OptionSelector: React.FC<OptionSelectorProps> = ({ title, icon, options, selectedOption, onSelect }) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm">
      <div className="flex items-center mb-4">
        <div className="text-cyan-400 mr-3">{icon}</div>
        <h3 className="text-xl font-bold text-gray-100">{title}</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option)}
            className={`p-4 rounded-lg text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
              selectedOption.id === option.id
                ? 'bg-cyan-500/20 border-cyan-400 border-2 shadow-lg shadow-cyan-500/10'
                : 'bg-gray-700/50 border-gray-600 border hover:bg-gray-700 hover:border-gray-500'
            }`}
          >
            <p className="font-semibold text-white text-sm">{option.label}</p>
            <p className="text-xs text-gray-400 mt-1">{`$${option.price}/mo`}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionSelector;
