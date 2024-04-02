import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { AuthRequestBody } from "../routes/authRoutes";

export class AuthController {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_PROJECT_URL as string,
      process.env.SUPABASE_API_KEY as string
    );
  }

  async signUp({ email, password }: AuthRequestBody) {
    console.log("signUp");
    console.log("email: ", email);
    console.log("password: ", password);

    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });

    console.log("data: ", data);

    return data;
  }

  async login(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("data: ", data);
  }
}
