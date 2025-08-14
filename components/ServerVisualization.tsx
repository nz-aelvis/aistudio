
import React from 'react';
import { ServerConfiguration, Category } from '../types';
import { CpuIcon, RamIcon, StorageIcon, OsIcon } from './IconComponents';

interface ServerVisualizationProps {
  configuration: ServerConfiguration;
}

const VisualizationBar: React.FC<{ label: string; value: string; icon: React.ReactNode; color: string }> = ({ label, value, icon, color }) => (
  <div className="flex items-center space-x-4 bg-gray-700/50 p-3 rounded-lg border border-gray-600">
    <div className={`p-2 rounded-md ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm font-semibold text-white">{value}</p>
    </div>
  </div>
);

const ServerVisualization: React.FC<ServerVisualizationProps> = ({ configuration }) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm sticky top-6">
        <h3 className="text-xl font-bold text-gray-100 mb-4 text-center">Your Server Build</h3>
        <div className="space-y-3">
            <VisualizationBar 
                label="CPU"
                value={configuration[Category.CPU].label}
                icon={<CpuIcon className="w-5 h-5"/>}
                color="bg-green-500/20 text-green-300"
            />
             <VisualizationBar 
                label="Memory"
                value={configuration[Category.RAM].label}
                icon={<RamIcon className="w-5 h-5"/>}
                color="bg-blue-500/20 text-blue-300"
            />
             <VisualizationBar 
                label="Storage"
                value={configuration[Category.STORAGE].label}
                icon={<StorageIcon className="w-5 h-5"/>}
                color="bg-purple-500/20 text-purple-300"
            />
             <VisualizationBar 
                label="Operating System"
                value={configuration[Category.OS].label}
                icon={<OsIcon className="w-5 h-5"/>}
                color="bg-red-500/20 text-red-300"
            />
        </div>
    </div>
  );
};

export default ServerVisualization;
