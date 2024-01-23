import { z } from "zod";

const muscleGroup = [
  "lats",
  "chest",
  "shoulders",
  "traps",
  "glutes",
  "quads",
  "hamstrings",
  "hipFlexors",
  "adductors",
  "calves",
  "abs",
  "biceps",
  "triceps",
  "forearms",
  "upperBack",
  "lowerBack",
] as const;
const difficulty = ["beginner", "intermediate", "advanced"] as const;
const equipment = [
  "bodyweight",
  "dumbbell",
  "barbell",
  "cables",
  "machine",
  "ezBar",
  "kettlebell",
  "trx",
  "other",
] as const;
const exerciseType = ["strength"] as const;
const forceType = ["push", "pull", "hinge", "static"] as const;
const mechanics = ["compound", "isolation", "isometric"] as const;

const Exercise = z.object({
  id: z.string(),
  difficulty: z.enum(difficulty),
  equipment: z.enum(equipment),
  exerciseType: z.enum(exerciseType),
  forceType: z.enum(forceType),
  mechanics: z.enum(mechanics),
  name: z.string(),
  secondaryMuscles: z.enum(muscleGroup).array(),
  targetMuscleGroup: z.enum(muscleGroup),
});

export type Exercise = z.infer<typeof Exercise>;
