
-- Add league_visible column to profiles
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS league_visible boolean NOT NULL DEFAULT true;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS display_name text NOT NULL DEFAULT '';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS avatar_emoji text NOT NULL DEFAULT '🦩';

-- Create league_entries table to track weekly XP
CREATE TABLE public.league_entries (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  week_key text NOT NULL,
  xp integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(user_id, week_key)
);

ALTER TABLE public.league_entries ENABLE ROW LEVEL SECURITY;

-- Anyone can read league entries (for leaderboard)
CREATE POLICY "Anyone can read league entries"
  ON public.league_entries FOR SELECT
  TO public
  USING (true);

-- Users can insert their own entries
CREATE POLICY "Users can insert own league entry"
  ON public.league_entries FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own entries
CREATE POLICY "Users can update own league entry"
  ON public.league_entries FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Enable realtime for league_entries
ALTER PUBLICATION supabase_realtime ADD TABLE public.league_entries;

-- Update profiles select policy to allow reading league-visible profiles
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Anyone can view league profiles"
  ON public.profiles FOR SELECT
  TO public
  USING (true);
