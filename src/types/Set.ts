import { z } from "zod";

const baseSetSchema = z.object({
  weight: z.number().optional(),
  rest: z.number().optional(),
});

const repetitionsSetSchema = baseSetSchema.extend({
  repetitions: z.number(),
  duration: z
    .number()
    .optional()
    .refine((value) => value === undefined, {
      message: "Cannot have both repetitions and duration.",
    }),
});

const durationSetSchema = baseSetSchema.extend({
  duration: z.number(),
  repetitions: z
    .number()
    .optional()
    .refine((value) => value === undefined, {
      message: "Cannot have both duration and repetitions.",
    }),
});

export const setSchema = z.union([repetitionsSetSchema, durationSetSchema]);

export type Set = z.infer<typeof setSchema>;

const setTypeSchema = z.enum(["repetitions", "duration"]);

export type SetType = z.infer<typeof setTypeSchema>;
