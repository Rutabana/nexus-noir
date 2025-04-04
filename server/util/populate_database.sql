-- 1. Set database context and user variable
USE nexus;
SET @userId = 1; -- Replace with your actual user ID

-- 2. Insert all weight records from Measurement-Summary
INSERT INTO HealthRecord (userId, weight, recordedAt, updatedAt)
VALUES 
  (@userId, 270.4, '2025-03-19 08:00:00', NOW()),
  (@userId, 269.4, '2025-03-20 08:00:00', NOW()),
  (@userId, 270.2, '2025-03-21 08:00:00', NOW()),
  (@userId, 269.0, '2025-03-22 08:00:00', NOW()),
  (@userId, 268.8, '2025-03-23 08:00:00', NOW()),
  (@userId, 268.2, '2025-03-24 08:00:00', NOW()),
  (@userId, 269.2, '2025-03-25 08:00:00', NOW()),
  (@userId, 269.2, '2025-03-26 08:00:00', NOW());

-- 3. Insert all exercise records from Exercise-Summary
INSERT INTO Activity (userId, date, type, description, intensity, createdAt, updatedAt)
VALUES
  (@userId, '2025-03-19', 'workout', 'MFP iOS calorie adjustment', 3, NOW(), NOW()),
  (@userId, '2025-03-20', 'workout', 'MFP iOS calorie adjustment', 3, NOW(), NOW()),
  (@userId, '2025-03-21', 'workout', 'MFP iOS calorie adjustment', 3, NOW(), NOW()),
  (@userId, '2025-03-22', 'workout', 'MFP iOS calorie adjustment', 3, NOW(), NOW()),
  (@userId, '2025-03-23', 'workout', 'MFP iOS calorie adjustment', 3, NOW(), NOW()),
  (@userId, '2025-03-24', 'workout', 'MFP iOS calorie adjustment', 3, NOW(), NOW()),
  (@userId, '2025-03-25', 'workout', 'MFP iOS calorie adjustment', 3, NOW(), NOW()),
  (@userId, '2025-03-26', 'workout', 'MFP iOS calorie adjustment', 3, NOW(), NOW());

-- 4. Insert all macro data from Nutrition-Summary (with daily totals)
INSERT INTO Macros (userId, date, protein, carbs, fat, caloriesIn, createdAt, updatedAt)
VALUES
  -- 2025-03-21 (sum of all meals)
  (@userId, '2025-03-21', 
   ROUND(36.6 + 9.3 + 36.6),      -- Protein
   ROUND(35.7 + 37.3 + 35.7),     -- Carbs
   ROUND(15.6 + 11.4 + 15.6),     -- Fat
   ROUND(422.4 + 286.7 + 422.4),  -- Calories
   NOW(), NOW());

-- 5. Update all exercise calories in Macros table
UPDATE Macros SET caloriesOut = 321.0, updatedAt = NOW() WHERE userId = @userId AND date = '2025-03-21';

-- For other days (example pattern - repeat for each date)
-- UPDATE Macros SET caloriesOut = 253.0, updatedAt = NOW() WHERE userId = @userId AND date = '2025-03-20';
-- UPDATE Macros SET caloriesOut = 12.0, updatedAt = NOW() WHERE userId = @userId AND date = '2025-03-19';
-- etc.

-- 6. Verify all data
SELECT * FROM HealthRecord WHERE userId = @userId ORDER BY recordedAt;
SELECT * FROM Activity WHERE userId = @userId ORDER BY date;
SELECT * FROM Macros WHERE userId = @userId ORDER BY date;