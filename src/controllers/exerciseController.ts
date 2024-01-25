import { PrismaClient } from "@prisma/client";
import { Exercise } from "../types/Exercise";

export class ExerciseController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllExercises(): Promise<Exercise[]> {
    const exercises = (await this.prisma.exercises.findMany()) as Exercise[];
    return exercises;
  }

  async createExercise(exercise: Partial<Exercise>) {
    const newExercise = await this.prisma.exercises.create({
      data: exercise as Exercise,
    });
    return newExercise;
  }
}
