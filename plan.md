### Plan

## What the app needs to do

- Send a GET request to the backend to get pollen and weather data
  - At regular intervals to refresh data
- Have a notification appear on phone saying which medication to take and what the pollen count/pressure is
- For migraine medication, send another notification after 72 hrs if the pressure is still aboove the trigger point
- Have a refresh button to allow the manual request of data

## Components required:

Find a component library - Native Base

- Main app page
- Button
- Notification
- Info display - data, time collected, and a comment

## Functions required:

- getPressureData
- getPollenData
- notifyMigraine
- notifyHayfever
- refreshData
- Maybe some AppNavigator to manage notifications? (https://blog.logrocket.com/how-to-create-and-send-push-notifications-in-react-native/)
