import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { fadeVariants } from '../../motion/variants';
import { Card, CardContent } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Search, Filter, Plus, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const products = [
  { id: 'PRD-001', name: 'MacBook Pro 16"', category: 'Electronics', price: '$2,499.00', stock: 45, status: 'In Stock' },
  { id: 'PRD-002', name: 'AirPods Max', category: 'Audio', price: '$549.00', stock: 12, status: 'Low Stock' },
  { id: 'PRD-003', name: 'Herman Miller Aeron', category: 'Furniture', price: '$1,200.00', stock: 0, status: 'Out of Stock' },
  { id: 'PRD-004', name: 'LG UltraGear 27"', category: 'Electronics', price: '$399.00', stock: 89, status: 'In Stock' },
  { id: 'PRD-005', name: 'Keychron Q1 Pro', category: 'Accessories', price: '$199.00', stock: 23, status: 'In Stock' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'In Stock': return 'success';
    case 'Low Stock': return 'warning';
    case 'Out of Stock': return 'danger';
    default: return 'default';
  }
};

export const Inventory = () => {
  const [view, setView] = useState('list');

  return (
    <m.div
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-text-primary dark:text-white">Inventory</h1>
          <p className="text-text-secondary dark:text-slate-400">Manage your eCommerce products and stock.</p>
        </div>
        <Button variant="primary" className="shrink-0" type="button">
          <Plus size={16} className="mr-2" /> Add Product
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <label htmlFor="inventory-search" className="sr-only">Search products</label>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-slate-500" size={18} />
          <input 
            id="inventory-search"
            aria-label="Search products"
            type="text" 
            placeholder="Search products..." 
            className="w-full h-10 rounded-xl border border-warm-border bg-warm-bg pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/50 dark:text-white dark:placeholder:text-slate-500 dark:backdrop-blur-sm"
          />
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto" type="button">
            <Filter size={16} className="mr-2" /> Filters
          </Button>
          
          <div className="flex items-center p-1 bg-warm-hover rounded-xl border border-warm-border dark:bg-slate-900/80 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setView('list')}
              className={cn(
                "px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200",
                view === 'list' ? "bg-white text-text-primary shadow-sm dark:bg-slate-800 dark:text-white" : "text-text-secondary hover:text-text-primary dark:text-slate-400 dark:hover:text-slate-200"
              )}
            >
              List
            </button>
            <button
              type="button"
              onClick={() => setView('grid')}
              className={cn(
                "px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200",
                view === 'grid' ? "bg-white text-text-primary shadow-sm dark:bg-slate-800 dark:text-white" : "text-text-secondary hover:text-text-primary dark:text-slate-400 dark:hover:text-slate-200"
              )}
            >
              Grid
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {view === 'list' ? (
          <m.div
            key="list-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="overflow-x-auto">
              <table className="w-full text-sm text-left text-text-secondary dark:text-slate-400">
                <thead className="text-xs uppercase bg-warm-bg text-text-primary border-b border-warm-border dark:bg-slate-900/80 dark:text-slate-300 dark:border-slate-800">
                  <tr>
                    <th scope="col" className="px-6 py-4 rounded-tl-2xl">Product Name</th>
                    <th scope="col" className="px-6 py-4">Category</th>
                    <th scope="col" className="px-6 py-4">Price</th>
                    <th scope="col" className="px-6 py-4">Stock</th>
                    <th scope="col" className="px-6 py-4">Status</th>
                    <th scope="col" className="px-6 py-4 rounded-tr-2xl text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, idx) => (
                    <tr key={product.id} className={cn(
                      "border-b border-warm-border hover:bg-warm-bg transition-colors dark:border-slate-800 dark:hover:bg-slate-800/30",
                      idx === products.length - 1 && "border-0"
                    )}>
                      <td className="px-6 py-4 font-medium text-text-primary dark:text-white whitespace-nowrap">
                        <div className="flex flex-col">
                          <span>{product.name}</span>
                          <span className="text-xs text-text-secondary dark:text-slate-500">{product.id}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">{product.category}</td>
                      <td className="px-6 py-4">{product.price}</td>
                      <td className="px-6 py-4 font-medium">{product.stock}</td>
                      <td className="px-6 py-4">
                        <Badge variant={getStatusColor(product.status)}>{product.status}</Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="icon" type="button" className="h-8 w-8 text-text-muted hover:text-text-primary dark:text-slate-400 dark:hover:text-white">
                          <MoreHorizontal size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </m.div>
        ) : (
          <m.div
            key="grid-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {products.map((product) => (
              <Card key={product.id} className="group hover:border-accent-primary/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={getStatusColor(product.status)}>{product.status}</Badge>
                    <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                      <button type="button" aria-label="Edit product" className="p-1.5 text-text-muted hover:text-accent-primary dark:text-slate-400 dark:hover:text-blue-400"><Edit size={14}/></button>
                      <button type="button" aria-label="Delete product" className="p-1.5 text-text-muted hover:text-accent-danger dark:text-slate-400 dark:hover:text-red-400"><Trash2 size={14}/></button>
                    </div>
                  </div>
                  <div className="h-32 mb-4 rounded-xl bg-warm-hover border border-warm-border flex items-center justify-center text-text-muted dark:bg-slate-800 dark:border-slate-700 dark:text-slate-500">
                    [Image Placeholder]
                  </div>
                  <h3 className="font-semibold text-text-primary dark:text-white mb-1 truncate">{product.name}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-text-primary dark:text-white">{product.price}</span>
                    <span className="text-sm text-text-secondary dark:text-slate-400">Qty: {product.stock}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
};
