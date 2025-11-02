"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMealsStore } from "@/store/meals";
import { Drumstick, Flame, Percent, Scale } from "lucide-react";

export function ResultsList() {
  const history = useMealsStore((s) => s.history);
  if (history.length === 0) return null;

  return (
    <div className="space-y-4">
      {history.map((r, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{r.dish_name}</span>
              <span className="text-sm font-normal text-muted-foreground">{r.source ?? "API"}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
            <div className="flex flex-col items-center justify-center p-3 rounded-xl">
              <Drumstick className="w-5 h-5 text-amber-300 mb-1" />
              <div className="text-xs text-zinc-400">Servings</div>
              <div className="font-medium text-base">{r.servings}</div>
            </div>

           <div className="flex flex-col items-center justify-center p-3 rounded-xl">
              <Scale className="w-5 h-5 text-blue-300 mb-1" />
              <div className="text-xs text-zinc-400">Calories/Serving</div>
              <div className="font-medium text-base">
                {r.calories_per_serving}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-3 rounded-xl">
              <Flame className="w-5 h-5 text-red-400 mb-1" />
              <div className="text-xs text-zinc-400">Total Calories</div>
              <div className="font-medium text-base">{r.total_calories}</div>
            </div>

            <div className="flex flex-col items-center justify-center p-3 rounded-xl">
              <Percent className="w-5 h-5 text-emerald-400 mb-1" />
              <div className="text-xs text-zinc-400">% Daily Cal</div>
              <div className="font-medium text-base">
                {((r.total_calories / 2000) * 100).toFixed(1)}%
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


