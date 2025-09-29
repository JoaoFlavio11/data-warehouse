import { cn } from "@/src/shared/lib/utils";
import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export default function PageHeader({
  title,
  subtitle,
  children,
  actions,
  className
}: PageHeaderProps){
  return(
    <div className={cn("mb-8", className)}>
      <div className="flex items-start justify-between">
        <div className="spacy-y-1">
          <h1 className="text-3xl font-bold text-slate-900">
            {title}
          </h1>
          {subtitle && (
            <p className="text-slate-600">
              {subtitle}
            </p>
          )}
        </div>

          {actions && (
            <div className="flex items-center gap-2">
              {actions}
            </div>
          )}
      </div>

        {children && (
          <div className="flex items-center gap-2">
            {children}
          </div>
        )}
    </div>
  );
}