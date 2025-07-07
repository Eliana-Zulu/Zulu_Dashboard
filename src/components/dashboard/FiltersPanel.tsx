
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import { DashboardFilters } from "@/pages/Index";

interface FiltersPanelProps {
  filters: DashboardFilters;
  onFiltersChange: (filters: Partial<DashboardFilters>) => void;
}

export const FiltersPanel = ({ filters, onFiltersChange }: FiltersPanelProps) => {
  const userTypes = ["Individual", "Business", "Institution"];
  const transactionTypes = ["P2P", "B2B", "Remittance", "Trade"];
  const countries = ["USA", "UK", "Canada", "Germany", "France", "Brazil", "Mexico", "India"];
  const kams = ["John Smith", "Sarah Johnson", "Mike Chen", "Ana Rodriguez"];

  const clearFilters = () => {
    onFiltersChange({
      dateRange: { start: "", end: "" },
      userType: [],
      transactionType: [],
      originCountry: [],
      destinyCountry: [],
      kam: []
    });
  };

  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          <X className="w-4 h-4 mr-2" />
          Clear
        </Button>
      </div>

      <div className="space-y-6">
        {/* Date Range */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Date Range</Label>
          <div className="grid grid-cols-1 gap-2">
            <Input
              type="date"
              placeholder="Start Date"
              value={filters.dateRange.start}
              onChange={(e) => onFiltersChange({
                dateRange: { ...filters.dateRange, start: e.target.value }
              })}
              className="bg-input/50"
            />
            <Input
              type="date"
              placeholder="End Date"
              value={filters.dateRange.end}
              onChange={(e) => onFiltersChange({
                dateRange: { ...filters.dateRange, end: e.target.value }
              })}
              className="bg-input/50"
            />
          </div>
        </div>

        {/* User Type */}
        <div>
          <Label className="text-sm font-medium mb-3 block">User Type</Label>
          <div className="space-y-2">
            {userTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={type}
                  checked={filters.userType.includes(type)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      onFiltersChange({ userType: [...filters.userType, type] });
                    } else {
                      onFiltersChange({ userType: filters.userType.filter(t => t !== type) });
                    }
                  }}
                />
                <Label htmlFor={type} className="text-sm">{type}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction Type */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Transaction Type</Label>
          <div className="space-y-2">
            {transactionTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={`trx-${type}`}
                  checked={filters.transactionType.includes(type)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      onFiltersChange({ transactionType: [...filters.transactionType, type] });
                    } else {
                      onFiltersChange({ transactionType: filters.transactionType.filter(t => t !== type) });
                    }
                  }}
                />
                <Label htmlFor={`trx-${type}`} className="text-sm">{type}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Countries */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Origin Country</Label>
          <Select>
            <SelectTrigger className="bg-input/50">
              <SelectValue placeholder="Select countries..." />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>{country}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium mb-3 block">Destination Country</Label>
          <Select>
            <SelectTrigger className="bg-input/50">
              <SelectValue placeholder="Select countries..." />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>{country}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* KAM */}
        <div>
          <Label className="text-sm font-medium mb-3 block">KAM</Label>
          <Select>
            <SelectTrigger className="bg-input/50">
              <SelectValue placeholder="Select KAM..." />
            </SelectTrigger>
            <SelectContent>
              {kams.map((kam) => (
                <SelectItem key={kam} value={kam}>{kam}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
};
