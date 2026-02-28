/* ============================================================
   200 Mates — config/constants.js
   ============================================================ */

const SUPABASE_URL  = "https://qpwwexlxiksmaaehqsev.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwd3dleGx4aWtzbWFhZWhxc2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5ODk5MjEsImV4cCI6MjA4NzU2NTkyMX0.zfrepatjz41WDVIbxp61FblT8lKPyNpU-HB0RElIpgc";
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

const DEFAULT_ALTITUDE = 2.5;
const ZOOM_THRESHOLD   = 1.8;