import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  //process.env.SUPABASE_URL || 
  'https://wlokbnedtrsgswjabxqg.supabase.co', 
  //process.env.SUPABASE_ANON_KEY || 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indsb2tibmVkdHJzZ3N3amFieHFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1OTIwNjMsImV4cCI6MjAyNzE2ODA2M30.10hLsyOMCrbLFdDoMUSGs63kgBdp070nUV0meOYbtI4');
