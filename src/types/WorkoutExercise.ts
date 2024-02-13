import { z } from "zod";
import { exerciseSchema } from ".";
import { setSchema } from ".";

export const workoutExerciseSchema = exerciseSchema.extend({
  sets: setSchema.array(),
});

export type WorkoutExercise = z.infer<typeof workoutExerciseSchema>;
