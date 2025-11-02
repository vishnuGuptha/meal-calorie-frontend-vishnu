"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { apiPost } from "@/lib/api";
import { useMealsStore } from "@/store/meals";
import { useAuthStore } from "@/store/auth";
import { toast } from "sonner";

const schema = z.object({
  dish_name: z.string().min(1, "Dish name is required"),
  servings: z.coerce.number().int().positive().max(100),
});

type FormValues = z.input<typeof schema>;

export function CalorieForm() {
  const token = useAuthStore((s) => s.token);
  const addResult = useMealsStore((s) => s.addResult);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { dish_name: "", servings: 1 },
  });

  async function onSubmit(values: FormValues) {
    const { data, error } = await apiPost<{
      dish_name: string;
      servings: number;
      calories_per_serving: number;
      total_calories: number;
      source?: string;
    }>("/get-calories", values, token ?? undefined);
    if (error || !data) return toast.error(error ?? "Not found");
    addResult({ ...data, raw: data });
    toast.success("Calorie data loaded");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        <FormField
          control={form.control}
          name="dish_name"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>Dish Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Chicken Caesar Salad" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="servings"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Servings</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  max={100}
                  value={
                    typeof field.value === "number"
                      ? field.value
                      : Number(field.value ?? 1)
                  }
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="sm:col-span-3">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Fetching..." : "Get Calories"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
