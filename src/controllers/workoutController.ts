import { PrismaClient } from "@prisma/client";
import { Workout } from "../types";

export class WorkoutController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllWorkouts(): Promise<Workout[]> {
    const workouts = (await this.prisma.workouts.findMany()) as Workout[];
    return workouts;
  }
}
