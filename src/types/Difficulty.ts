import { z } from "zod";

export const difficulty = ["beginner", "intermediate", "advanced"] as const;

export const difficultySchema = z.enum(difficulty);

export type Difficulty = z.infer<typeof difficultySchema>;
