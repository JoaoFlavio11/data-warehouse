import { cn } from "../lib/utils";
import { Badge } from "@/src/shared/components/ui/badge";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  trendValue?: string | number;
  className?: string;
  variant?: "default" | "success" | "warning" | "info";
}

export default function MetricCard({ 
  title,
  value,
  subtitle,
  icon,
  trend,
  trendValue,
  className,
  variant = "default"
}: MetricCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-green-600 bg-green-50";
      case 'down':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  }

  const getVariantStyles = () => {
    switch (variant){
      case 'success':
        return 'border-green-200 bg-green-50/30';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50/30';
      case 'info':
        return 'border-blue-200 bg-blue-50/30';
      default:
        return 'border-gray-200 bg-white';
    }
  };

  return(
    <div className={cn("p-6 rounded-xl shadow-sm border transition-all duration-200 hover:shadow-md", 
      getVariantStyles(),
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {icon && (
              <div className="p-2 rounded-lg bg-slate-100 text-slate-600">
                {icon}
              </div>
            )}
            <h3 className="text-sm font-medium text-slate-600">{title}</h3>
          </div>

          <div className="spacy-y-1">
            <p className="text-2xl font-bold text-slate-900">
              {value}
            </p>
            {subtitle && (
              <p className="text-xs text-slate-500">{subtitle}</p>
            )}
          </div>
        </div>
        {trend && trendValue && (
          <Badge 
            variant="secondary"
            className={cn("text-xs font-medium", getTrendColor())}
          >
            {trend === "up" && "↗"}
            {trend === 'down' && '↘'} 
            {trend === 'neutral' && '→'} 
            {trendValue}
          </Badge>
        )}
      </div>
    </div>
  );
}