# LifeFlow Personal Hub

LifeFlow is a mobile-friendly personal management app for budgets, period and activity tracking, entertainment lists, goals, habits, tasks, notes, timers, and alarms.

The Period Tracker records flow, symptoms, and notes separately for each day in a period, and existing period logs can be edited with daily details.

## Android app

The `android/` directory contains the Capacitor Android project. A debug APK is included at:

`android/app/build/outputs/apk/debug/app-debug.apk`

Install the APK on an Android device to use the app. It is a debug build for direct installation, not a Play Store release.

## Build from source

Requirements: Node.js, a Java Development Kit, and the Android SDK.

```sh
npm install
npm run android:debug
```

On Windows, the generated APK is written to `android\app\build\outputs\apk\debug\app-debug.apk`.

## Data and privacy

LifeFlow stores data locally in the browser or installed app on each device. It does not automatically sync between devices. The Android app does not request network access, and automatic Android backup is disabled; use **Sync & Backup** to export or transfer data manually. The interface libraries are bundled locally, so the app does not need a CDN connection to render.

Use **Manage Categories** in the navigation menu to add custom budget, payment, period flow and symptom, activity, goal, task, and note options. Remove custom options there when no longer needed; this affects future entries only, and built-in options cannot be removed. Period flow levels and symptoms are available in each day's period details. Custom options are saved with app data and included in manual backups.

The Budget Tracker includes separate financial profiles, transfers between profiles, a transaction calendar, and monthly, yearly, or custom-date reports. Currency selection changes the displayed symbol only; it does not convert transaction amounts. Profiles, transactions, and transfers are included in local backups.

The Entertainment section tracks movies, anime, manhwa, and comics by title, type, and status. Its list is stored locally and included in manual backups.

Bundled front-end libraries:

- Tailwind CSS 3.4.17 (MIT)
- Chart.js 4.4.1 (MIT)
- Lucide 0.460.0 (ISC)
