
import React, { useState, useMemo, useCallback } from 'react';
import { ServerConfiguration, Category, ServerOption } from './types';
import { CPU_OPTIONS, RAM_OPTIONS, STORAGE_OPTIONS, OS_OPTIONS, SOFTWARE_OPTIONS } from './constants';
import { generateConfigurationSummary } from './services/geminiService';
import OptionSelector from './components/OptionSelector';
import ServerVisualization from './components/ServerVisualization';
import Summary from './components/Summary';
import { CpuIcon, RamIcon, StorageIcon, OsIcon, SoftwareIcon } from './components/IconComponents';

const App: React.FC = () => {
  const [configuration, setConfiguration] = useState<ServerConfiguration>({
    [Category.CPU]: CPU_OPTIONS[0],
    [Category.RAM]: RAM_OPTIONS[0],
    [Category.STORAGE]: STORAGE_OPTIONS[0],
    [Category.OS]: OS_OPTIONS[0],
    [Category.SOFTWARE]: SOFTWARE_OPTIONS[0],
  });

  const [aiSummary, setAiSummary] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleOptionSelect = useCallback((category: Category, option: ServerOption) => {
    setConfiguration(prevConfig => ({
      ...prevConfig,
      [category]: option
    }));
    setAiSummary(''); // Clear summary on config change
  }, []);

  const totalCost = useMemo(() => {
    return (Object.values(configuration) as ServerOption[]).reduce((sum, option) => sum + option.price, 0);
  }, [configuration]);

  const handleGenerateSummary = async () => {
    setIsGenerating(true);
    setAiSummary('');
    try {
      const summary = await generateConfigurationSummary(configuration);
      setAiSummary(summary);
    } catch (error) {
      console.error(error);
      setAiSummary('Failed to generate summary.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Cloud Server Configurator
          </h1>
          <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
            Build your virtual server by selecting components below and get an AI-powered summary of your configuration.
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <OptionSelector
              title="Processor (CPU)"
              icon={<CpuIcon className="w-6 h-6" />}
              options={CPU_OPTIONS}
              selectedOption={configuration[Category.CPU]}
              onSelect={(option) => handleOptionSelect(Category.CPU, option)}
            />
            <OptionSelector
              title="Memory (RAM)"
              icon={<RamIcon className="w-6 h-6" />}
              options={RAM_OPTIONS}
              selectedOption={configuration[Category.RAM]}
              onSelect={(option) => handleOptionSelect(Category.RAM, option)}
            />
            <OptionSelector
              title="Storage"
              icon={<StorageIcon className="w-6 h-6" />}
              options={STORAGE_OPTIONS}
              selectedOption={configuration[Category.STORAGE]}
              onSelect={(option) => handleOptionSelect(Category.STORAGE, option)}
            />
            <OptionSelector
              title="Operating System"
              icon={<OsIcon className="w-6 h-6" />}
              options={OS_OPTIONS}
              selectedOption={configuration[Category.OS]}
              onSelect={(option) => handleOptionSelect(Category.OS, option)}
            />
            <OptionSelector
              title="Software & Apps"
              icon={<SoftwareIcon className="w-6 h-6" />}
              options={SOFTWARE_OPTIONS}
              selectedOption={configuration[Category.SOFTWARE]}
              onSelect={(option) => handleOptionSelect(Category.SOFTWARE, option)}
            />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServerVisualization configuration={configuration} />
              <Summary
                configuration={configuration}
                totalCost={totalCost}
                onGenerateSummary={handleGenerateSummary}
                aiSummary={aiSummary}
                isGenerating={isGenerating}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;