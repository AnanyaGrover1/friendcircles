import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ngvvynhgaxnprgdixmfj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ndnZ5bmhnYXhucHJnZGl4bWZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5OTU5NjMsImV4cCI6MjAzNjU3MTk2M30.JTYnEwqeohxrU3P_5GjeBNfhPTLnk86xm7yVH3bl7ao';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  authUrl: 'https://your_supabase_url.com',
  providers: ['google'],
});
