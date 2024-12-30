// Get unique categories from tools
import { tools } from '../data/tools';
import { Category } from '../types';

export const getUniqueCategories = (): Category[] => {
  const categories = tools.map(tool => tool.category);
  return Array.from(new Set(categories)) as Category[];
};