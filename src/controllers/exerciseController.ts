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

    const { data, error } = await this.supabase.from("exercises").select(`
      id,
      name,
      difficulty,
      equipment,
      exercise_type,
      force_type,
      mechanics,
      target_muscle_group,
      secondary_muscles
    `);

    return data as any;
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

    console.log("exercise: ", exercise);
    const { data, error } = await this.supabase
      .from("exercises")
      .insert(exercise as Exercise);

    console.log("data: ", data);

    return newExercise;
  }

  async getExerciseById(id: string): Promise<Exercise | null> {
    const { data, error } = await this.supabase
      .from("exercises")
      .select(`*`)
      .eq("id", id)
      .limit(1)
      .single();

    console.log("data: ", data);

    return data as any;
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
