'use client';

import { format } from 'date-fns';

interface LastUpdatedProps {
  date: Date
}

export function LastUpdated({ date }: LastUpdatedProps) {
  return (
    <div className="text-sm text-muted-foreground flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      Last updated: {format(date, 'HH:mm:ss')}
    </div>
  );
}
