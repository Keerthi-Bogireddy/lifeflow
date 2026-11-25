# LifeFlow Personal Hub

LifeFlow is a mobile-friendly personal management app for budgets, period and activity tracking, goals, habits, tasks, notes, timers, and alarms.

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

LifeFlow stores data locally in the browser or installed app on each device. It does not automatically sync between devices. Use **Sync & Backup** to export or transfer data. Some interface resources load from CDNs, so an internet connection is needed.
