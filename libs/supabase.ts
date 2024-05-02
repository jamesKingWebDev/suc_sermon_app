import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  //process.env.SUPABASE_URL || 
  'https://wlokbnedtrsgswjabxqg.supabase.co', 
  //process.env.SUPABASE_ANON_KEY || 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indsb2tibmVkdHJzZ3N3amFieHFnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTU5MjA2MywiZXhwIjoyMDI3MTY4MDYzfQ.-o1u_t-NES5jLHWFiZ_LN-RfSnrivr-7rAmc6GIeTCI');
