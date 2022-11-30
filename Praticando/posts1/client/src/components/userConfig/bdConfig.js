import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const PROJECT_URL = "https://xdcauufxptlfaznnkmlt.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkY2F1dWZ4cHRsZmF6bm5rbWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk2NjE0MzEsImV4cCI6MTk4NTIzNzQzMX0.oNNSlXb4jU_ZPGTHJa0lHy_IwYnRwp4s_jBauTFl5LQ"
export const supabase = createClient(PROJECT_URL, PUBLIC_KEY)