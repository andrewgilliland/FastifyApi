import { PrismaClient } from "@prisma/client";
import { Workout } from "../types";

export class WorkoutController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllWorkouts(): Promise<Workout[]> {
    // @ts-ignore
    const workouts = (await this.prisma.workouts.findMany()) as Workout[]; // Todo: fix typing for this
    console.log("workouts: ", workouts);
    return workouts;
  }
}
