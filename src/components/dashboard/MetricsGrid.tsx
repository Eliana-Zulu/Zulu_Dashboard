
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, DollarSign, Activity, Percent } from "lucide-react";
import { DashboardFilters } from "@/pages/Index";

interface MetricsGridProps {
  filters: DashboardFilters;
}

export const MetricsGrid = ({ filters }: MetricsGridProps) => {
  // Mock data - in real app, this would come from API based on filters
  const metrics = [
    {
      title: "Total Transactions",
      value: "15,247",
      change: "+12.5%",
      trend: "up",
      icon: Activity,
      color: "text-blue-400"
    },
    {
      title: "Total Cash-In Volume",
      value: "$2.4M",
      change: "+8.2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      title: "Total Cash-Out Volume",
      value: "$2.2M",
      change: "+5.7%",
      trend: "up",
      icon: TrendingDown,
      color: "text-amber-400"
    },
    {
      title: "Unique Users",
      value: "3,892",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "text-purple-400"
    },
    {
      title: "Total Profit",
      value: "$184.5K",
      change: "+22.1%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-400"
    },
    {
      title: "Avg Profit Margin",
      value: "7.8%",
      change: "+1.2%",
      trend: "up",
      icon: Percent,
      color: "text-emerald-400"
    },
    {
      title: "USDC Volume In",
      value: "$1.8M",
      change: "+18.9%",
      trend: "up",
      icon: TrendingUp,
      color: "text-cyan-400"
    },
    {
      title: "USDC Volume Out",
      value: "$1.7M",
      change: "+16.4%",
      trend: "up",
      icon: TrendingDown,
      color: "text-indigo-400"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index} className="metric-card group">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">{metric.title}</p>
                <p className="text-2xl font-bold mb-2">{metric.value}</p>
                <div className={`flex items-center text-sm ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  {metric.change}
                </div>
              </div>
              <div className={`p-3 rounded-lg bg-background/50 group-hover:scale-110 transition-transform duration-200`}>
                <Icon className={`w-6 h-6 ${metric.color}`} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
