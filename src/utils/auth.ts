import { supabase } from "./supabaseClient";

export const signUp = async (email: string, password: string) => {
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
};

export const login = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
};

export const logout = async () => {
  await supabase.auth.signOut();
};
