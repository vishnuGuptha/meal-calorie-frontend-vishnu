import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type ResultCardProps = {
  dish_name: string;
  servings: number;
  calories_per_serving: number;
  totalCalories: number;
  source?: string;
};

export function ResultCard({ dish_name, servings, calories_per_serving, totalCalories, source }: ResultCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{dish_name}</span>
          <span className="text-sm font-normal text-muted-foreground">{source ?? "API"}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
        <div>
          <div className="text-muted-foreground">Servings</div>
          <div className="font-medium">{servings}</div>
        </div>
        <div>
          <div className="text-muted-foreground">Calories/Serving</div>
          <div className="font-medium">{calories_per_serving}</div>
        </div>
        <div>
          <div className="text-muted-foreground">Total Calories</div>
          <div className="font-medium">{totalCalories}</div>
        </div>
      </CardContent>
    </Card>
  );
}


