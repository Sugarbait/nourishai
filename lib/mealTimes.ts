/**
 * Web-safe meal-reminder time config.
 *
 * The Android app schedules native local notifications via `lib/mealReminders.ts`
 * (Capacitor). The web app has no native notification runtime, so it only needs
 * the shared time type + defaults to render the settings UI and persist the
 * preference through Convex — without pulling in any Capacitor dependency.
 */

export type MealReminderTimes = {
  breakfast: string;
  lunch: string;
  dinner: string;
};

export const DEFAULT_MEAL_TIMES: MealReminderTimes = {
  breakfast: '08:00',
  lunch: '12:00',
  dinner: '18:00',
};
