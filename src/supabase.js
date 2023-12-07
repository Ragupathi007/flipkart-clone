import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://qlrjglozxatzcefiftrs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFscmpnbG96eGF0emNlZmlmdHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4OTM5NzEsImV4cCI6MjAxNTQ2OTk3MX0.DyWS4leIWgNrIZE833keqa4S6GZ1rmfnFLpJ_4HvKI8"
);

export default supabase;
