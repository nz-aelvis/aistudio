
import React from 'react';
import { ServerConfiguration } from '../types';

interface SummaryProps {
  configuration: ServerConfiguration;
  totalCost: number;
  onGenerateSummary: () => void;
  aiSummary: string;
  isGenerating: boolean;
}

const Summary: React.FC<SummaryProps> = ({ configuration, totalCost, onGenerateSummary, aiSummary, isGenerating }) => {
  const [name, ...summaryParts] = aiSummary.split('\n');
  const summaryText = summaryParts.join('\n').trim();
  
  return (
    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm mt-6">
      <h3 className="text-xl font-bold text-gray-100 mb-4">Configuration Summary</h3>
      
      <div className="flex justify-between items-center py-4 border-b-2 border-gray-700">
          <p className="text-2xl font-bold text-white">Total Monthly Cost</p>
          <p className="text-3xl font-bold text-cyan-400">${totalCost}</p>
      </div>

      <div className="mt-6">
        <button
          onClick={onGenerateSummary}
          disabled={isGenerating}
          className="w-full bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-cyan-600 transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            'Generate AI Summary'
          )}
        </button>
      </div>

      {aiSummary && !isGenerating && (
        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700 animate-fade-in">
            <h4 className="text-lg font-bold text-cyan-300">{name}</h4>
            <p className="text-gray-300 mt-2 text-sm">{summaryText}</p>
        </div>
      )}
    </div>
  );
};

export default Summary;
