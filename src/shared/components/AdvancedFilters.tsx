/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { cn } from "@/src/shared/lib/utils";
import { Button } from "@/src/shared/components/ui/button";
import { Input } from "@/src/shared/components/ui/input";
import { Label } from "@/src/shared/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/shared/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/shared/components/ui/card";
import { Badge } from "@/src/shared/components/ui/badge";
import { Calendar } from "@/src/shared/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/shared/components/ui/popover";
import { FilterIcon, XIcon, SearchIcon, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface FilterOption {
  key: string;
  label: string;
  type: "text" | "select" | "date" | "dateRange";
  options?: { value: string; label: string }[];
  placeholder?: string;
}

interface AdvancedFiltersProps {
  filters: FilterOption[];
  onFiltersChange: (filters: Record<string, any>) => void;
  className?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
}

export default function AdvancedFilters({
  filters,
  onFiltersChange,
  className,
  showSearch = true,
  searchPlaceholder = "Buscar...",
}: AdvancedFiltersProps) {
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...activeFilters, [key]: value };
    if (!value || value === "") {
      delete newFilters[key];
    }
    setActiveFilters(newFilters);
    onFiltersChange({ ...newFilters, search: searchTerm });
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onFiltersChange({ ...activeFilters, search: value });
  };

  const clearAllFilters = () => {
    setActiveFilters({});
    setSearchTerm("");
    onFiltersChange({});
  };

  const getActiveFilterCount = () => {
    return Object.keys(activeFilters).length + (searchTerm ? 1 : 0);
  };

  const renderFilterInput = (filter: FilterOption) => {
    const value = activeFilters[filter.key];

    switch (filter.type) {
      case "text":
        return (
          <Input
            placeholder={filter.placeholder}
            value={value || ""}
            onChange={(e) => handleFilterChange(filter.key, e.target.value)}
            className="w-full"
          />
        );

      case "select":
        return (
          <Select
            value={value || ""}
            onValueChange={(val) => handleFilterChange(filter.key, val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={filter.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {filter.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "date":
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !value && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {value
                  ? format(value, "PPP", { locale: ptBR })
                  : filter.placeholder}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={value}
                onSelect={(date) => handleFilterChange(filter.key, date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        );

      default:
        return null;
    }
  };

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <FilterIcon className="h-5 w-5" />
            Filtros e Ações
            {getActiveFilterCount() > 0 && (
              <Badge variant="secondary" className="ml-2">
                {getActiveFilterCount()}
              </Badge>
            )}
          </CardTitle>
          <div className="flex items-center gap-2">
            {getActiveFilterCount() > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-black"
              >
                <XIcon className="h-4 w-4 mr-1" />
                Limpar
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Menos filtros" : "Mais filtros"}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Barra de busca */}
        {showSearch && (
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        )}

        {/* Filtros principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filters.slice(0, 2).map((filter) => (
            <div key={filter.key} className="space-y-2">
              <Label htmlFor={filter.key} className="text-sm font-medium">
                {filter.label}
              </Label>
              {renderFilterInput(filter)}
            </div>
          ))}
        </div>

        {/* Filtros expandidos */}
        {isExpanded && filters.length > 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t">
            {filters.slice(2).map((filter) => (
              <div key={filter.key} className="space-y-2">
                <Label htmlFor={filter.key} className="text-sm font-medium">
                  {filter.label}
                </Label>
                {renderFilterInput(filter)}
              </div>
            ))}
          </div>
        )}

        {/* Filtros ativos */}
        {getActiveFilterCount() > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t">
            <span className="text-sm font-medium text-muted-foreground">
              Filtros ativos:
            </span>
            {searchTerm && (
              <Badge variant="outline" className="gap-1">
                Busca: {searchTerm}
                <XIcon
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => handleSearchChange("")}
                />
              </Badge>
            )}
            {Object.entries(activeFilters).map(([key, value]) => {
              const filter = filters.find((f) => f.key === key);
              if (!filter || !value) return null;

              const displayValue =
                filter.type === "select"
                  ? filter.options?.find((opt) => opt.value === value)?.label ||
                    value
                  : filter.type === "date"
                  ? format(value, "dd/MM/yyyy")
                  : value;

              return (
                <Badge key={key} variant="outline" className="gap-1">
                  {filter.label}: {displayValue}
                  <XIcon
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => handleFilterChange(key, null)}
                  />
                </Badge>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
