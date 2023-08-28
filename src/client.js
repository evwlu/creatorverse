import { createClient } from "@supabase/supabase-js";

const url = 'https://crxotjxsuhocdkerkdzk.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyeG90anhzdWhvY2RrZXJrZHprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxMDU1MzMsImV4cCI6MjAwODY4MTUzM30.K-nSaLzCluPpoOzPV0_BeLQ-nYHbs5KyzEZElrx-hq8'
export const supabase = createClient(url, API_KEY)
