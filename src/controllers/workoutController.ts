import { PrismaClient } from "@prisma/client";
import { Workout } from "../types";

export class WorkoutController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllWorkouts(): Promise<Workout[]> {
    const workouts = (await this.prisma.workouts.findMany()) as Workout[]; // Todo: fix typing for this - schema.prisma should correspond to the workout type
    return workouts;
  }

  async getWorkoutById(id: string): Promise<Workout | null> {
    const workout = await this.prisma.workouts.findUnique({
      where: { id },
    });
    // @ts-ignore
    return workout as Workout;
  }
}
