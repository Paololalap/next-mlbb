"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { FancyMultiSelect } from "@/components/ui/fancy-multi-select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

// Define the available weeks
const weeks = [
  { label: "Week 1", value: "week1" },
  { label: "Week 2", value: "week2" },
  { label: "Week 3", value: "week3" },
  { label: "Week 4", value: "week4" },
  { label: "Week 5", value: "week5" },
  { label: "Week 6", value: "week6" },
  { label: "Week 7", value: "week7" },
];

// Get the latest week's value
const latestWeek = weeks[weeks.length - 1].value;

const formSchema = z.object({
  week: z.string(),
  name: z.string().min(1).max(255),
});

type FormValues = z.infer<typeof formSchema>;

export default function AddMetaCharacter() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      week: latestWeek, // Set the default value to the latest week
      name: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch("/api/meta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create MetaCharacter");
      }

      toast({
        variant: "Success",
        description: "MetaCharacter created successfully",
      });
    } catch (error) {
      toast({
        variant: "Error",
        description: "Failed to create MetaCharacter",
      });
      console.error("Error:", error);
    }
  };

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-fit space-y-4"
      >
        <FormField
          control={form.control}
          name="week"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Week</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {weeks.map((week) => (
                      <SelectItem key={week.value} value={week.value}>
                        {week.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FancyMultiSelect />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
