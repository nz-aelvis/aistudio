
import { ServerOption } from './types';

export const CPU_OPTIONS: ServerOption[] = [
  { id: 'cpu-2', label: '2 vCPU', description: 'Basic workloads, dev/test', price: 20 },
  { id: 'cpu-4', label: '4 vCPU', description: 'General purpose, web servers', price: 40 },
  { id: 'cpu-8', label: '8 vCPU', description: 'Production apps, small databases', price: 80 },
  { id: 'cpu-16', label: '16 vCPU', description: 'High-performance computing', price: 160 },
];

export const RAM_OPTIONS: ServerOption[] = [
  { id: 'ram-4', label: '4 GB', description: 'Light web hosting, microservices', price: 15 },
  { id: 'ram-8', label: '8 GB', description: 'Standard applications, caching', price: 30 },
  { id: 'ram-16', label: '16 GB', description: 'In-memory databases, analytics', price: 60 },
  { id: 'ram-32', label: '32 GB', description: 'Large databases, enterprise apps', price: 120 },
];

export const STORAGE_OPTIONS: ServerOption[] = [
  { id: 'storage-128', label: '128 GB SSD', description: 'Fast I/O for OS and apps', price: 10 },
  { id: 'storage-256', label: '256 GB SSD', description: 'More space for active data', price: 20 },
  { id: 'storage-512', label: '512 GB NVMe', description: 'Extreme performance for databases', price: 45 },
  { id: 'storage-1024', label: '1 TB NVMe', description: 'Large datasets, high-speed access', price: 90 },
];

export const OS_OPTIONS: ServerOption[] = [
  { id: 'os-ubuntu', label: 'Ubuntu 22.04', description: 'Popular, versatile Linux distro', price: 5 },
  { id: 'os-debian', label: 'Debian 12', description: 'Stable and reliable for servers', price: 5 },
  { id: 'os-centos', label: 'CentOS Stream 9', description: 'Community-driven enterprise OS', price: 5 },
  { id: 'os-windows', label: 'Windows Server', description: 'For Windows-specific applications', price: 25 },
];
