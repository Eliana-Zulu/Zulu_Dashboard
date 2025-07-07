
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { ChartsGrid } from "@/components/dashboard/ChartsGrid";
import { FiltersPanel } from "@/components/dashboard/FiltersPanel";
import { useState } from "react";

export interface DashboardFilters {
  dateRange: { start: string; end: string };
  userType: string[];
  transactionType: string[];
  originCountry: string[];
  destinyCountry: string[];
  kam: string[];
}

const Index = () => {
  const [filters, setFilters] = useState<DashboardFilters>({
    dateRange: { start: "", end: "" },
    userType: [],
    transactionType: [],
    originCountry: [],
    destinyCountry: [],
    kam: []
  });

  const updateFilters = (newFilters: Partial<DashboardFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="dashboard-gradient min-h-screen">
        <div className="container mx-auto px-6 py-8">
          <DashboardHeader />
          
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-8">
            <div className="xl:col-span-1">
              <FiltersPanel filters={filters} onFiltersChange={updateFilters} />
            </div>
            <div className="xl:col-span-3">
              <MetricsGrid filters={filters} />
            </div>
          </div>
          
          <ChartsGrid filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default Index;
