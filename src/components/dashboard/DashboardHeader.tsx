
import { Calendar, TrendingUp, Users, DollarSign } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Transaction Analytics
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Real-time insights into cross-border payment flows and profitability
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Live Data</span>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Last Updated</p>
            <p className="text-sm font-medium">{new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
