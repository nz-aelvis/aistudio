
export interface ServerOption {
  id: string;
  label: string;
  description: string;
  price: number;
}

export enum Category {
  CPU = "CPU",
  RAM = "RAM",
  STORAGE = "Storage",
  OS = "OS",
}

export interface ServerConfiguration {
  [Category.CPU]: ServerOption;
  [Category.RAM]: ServerOption;
  [Category.STORAGE]: ServerOption;
  [Category.OS]: ServerOption;
}
