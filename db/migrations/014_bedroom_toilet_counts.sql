ALTER TABLE houses
  ADD COLUMN IF NOT EXISTS bedroom_count INTEGER,
  ADD COLUMN IF NOT EXISTS toilet_count INTEGER;

COMMENT ON COLUMN houses.bedroom_count IS 'Bedrooms for studio/apartment/house; auto-set for single-room types';
COMMENT ON COLUMN houses.toilet_count IS 'Toilet / bathroom count';
