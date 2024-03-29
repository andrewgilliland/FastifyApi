import { PrismaClient } from "@prisma/client";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { Exercise } from "../types/Exercise";

export class ExerciseController {
  private prisma: PrismaClient;
  private supabase: SupabaseClient;

  constructor() {
    this.prisma = new PrismaClient();
    this.supabase = createClient(
      process.env.SUPABASE_PROJECT_URL as string,
      process.env.SUPABASE_API_KEY as string
    );
  }

  async getAllExercises(): Promise<Exercise[]> {
    const exercises = (await this.prisma.exercises.findMany()) as Exercise[];

    const exercisezzz = await this.supabase.from("exercises").select("*");
    console.log("exercisezzz: ", exercisezzz.data);
    const difficulty = await this.supabase.from("difficulty").select("*");
    console.log("difficulty: ", difficulty.data);

    return exercises;
  }

  async getExercisesBySearch(search: string): Promise<Exercise[]> {
    console.log("search: ", search);
    const exercises = (await this.prisma.exercises.findMany({
      where: {
        name: {
          contains: search,
        },
      },
    })) as Exercise[];
    console.log("exercises: ", exercises);
    return exercises;
  }

  async createExercise(exercise: Partial<Exercise>) {
    const newExercise = await this.prisma.exercises.create({
      data: exercise as Exercise,
    });
    return newExercise;
  }

  async getExerciseById(id: string): Promise<Exercise | null> {
    const exercise = await this.prisma.exercises.findUnique({
      where: { id },
    });

    return exercise as Exercise;
  }

  async updateExerciseById(id: string, exercise: Partial<Exercise>) {
    const updatedExercise = await this.prisma.exercises.update({
      where: { id },
      data: exercise as Exercise,
    });

    return updatedExercise as Exercise;
  }

  async deleteExerciseById(id: string) {
    const deletedExercise = await this.prisma.exercises.delete({
      where: { id },
    });

    return deletedExercise as Exercise;
  }
}
