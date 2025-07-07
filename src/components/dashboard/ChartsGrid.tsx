
import { Card } from "@/components/ui/card";
import { VolumeChart } from "./charts/VolumeChart";
import { CountryFlowChart } from "./charts/CountryFlowChart";
import { ProfitabilityChart } from "./charts/ProfitabilityChart";
import { TransactionTypesChart } from "./charts/TransactionTypesChart";
import { OperationsChart } from "./charts/OperationsChart";
import { TrendsChart } from "./charts/TrendsChart";
import { DashboardFilters } from "@/pages/Index";

interface ChartsGridProps {
  filters: DashboardFilters;
}

export const ChartsGrid = ({ filters }: ChartsGridProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2">
        <Card className="chart-container">
          <h3 className="text-lg font-semibold mb-4">Transaction Volume Trends</h3>
          <VolumeChart />
        </Card>
      </div>
      
      <Card className="chart-container">
        <h3 className="text-lg font-semibold mb-4">Transaction Types</h3>
        <TransactionTypesChart />
      </Card>
      
      <Card className="chart-container">
        <h3 className="text-lg font-semibold mb-4">Country Flow Analysis</h3>
        <CountryFlowChart />
      </Card>
      
      <Card className="chart-container">
        <h3 className="text-lg font-semibold mb-4">Profitability Analysis</h3>
        <ProfitabilityChart />
      </Card>
      
      <Card className="chart-container">
        <h3 className="text-lg font-semibold mb-4">Operations Quality</h3>
        <OperationsChart />
      </Card>
      
      <div className="xl:col-span-3">
        <Card className="chart-container">
          <h3 className="text-lg font-semibold mb-4">Monthly Growth Trends</h3>
          <TrendsChart />
        </Card>
      </div>
    </div>
  );
};
