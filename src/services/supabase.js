import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cepcwrqtujmxzrgzoksp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlcGN3cnF0dWpteHpyZ3pva3NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MzI3NjEsImV4cCI6MjAxNTIwODc2MX0.kdigLjqg0keoCbTfDy8sEiLyGjvr5MV8yBVcUVYAeJA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
