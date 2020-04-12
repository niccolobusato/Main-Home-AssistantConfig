
# alexa-remote2

Library to remote control an Alexa (Amazon Echo) device via LAN/WLAN.

Early code version.

<!--
[![NPM version](http://img.shields.io/npm/v/alexa-remote.svg)](https://www.npmjs.com/package/alexa-remote)
[![Tests](http://img.shields.io/travis/soef/alexa-remote/master.svg)](https://travis-ci.org/soef/alexa-remote)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/soef/alexa-remote/blob/master/LICENSE)
-->


## Example

see example folder


## Thanks:
Partly based on [Amazon Alexa Remote Control](http://blog.loetzimmer.de/2017/10/amazon-alexa-hort-auf-die-shell-echo.html) (PLAIN shell) and [alexa-remote-control](https://github.com/thorsten-gehrig/alexa-remote-control) and [OpenHab-Addon](https://github.com/openhab/openhab2-addons/blob/f54c9b85016758ff6d271b62d255bbe41a027928/addons/binding/org.openhab.binding.amazonechocontrol)
Thank you for that work.

## Known issues/Todos
* getNotification works, changeNotification not ... maybe change is DELETE +Create :-) (+ source for createNotification: https://github.com/noelportugal/alexa-reminders/blob/master/alexa-reminders.js#L75, and Delete/create: https://github.com/openhab/openhab2-addons/blob/f54c9b85016758ff6d271b62d255bbe41a027928/addons/binding/org.openhab.binding.amazonechocontrol/src/main/java/org/openhab/binding/amazonechocontrol/internal/Connection.java#L829)
* docu docu docu (sorry ... will come)

## Changelog:

### 3.0.3 (2019-12-28)
* (Apollon77) update cookie lib

### 3.0.2 (2019-12-26)
* (Apollon77) Prevent some errors

### 3.0.1 (2019-12-24)
* (Apollon77) Prevent some errors, dependency update

### 3.0.0 (2019-12-24)
* (Apollon77) dependency updates
* (Zefau) add functionality for handling of lists
* nodejs 8.x is minimum now!

### 2.5.5 (2019-08-09)
* (Apollon77) user different mqtt regex to hopefully support other countries better

### 2.5.4 (2019-08-08)
* (Apollon77) make sure amazon domains are used as configured instead of "amazon.de" sometimes

### 2.5.3 (2019-07-22)
* (Apollon77) also allow Reminders in Future >+1 day

### 2.5.0/1 (2019-07-21)
* (Apollon77) enhance announce/ssml to allow send to multiple devices using one command

### 2.4.0 (2019-07-21)
* (Apollon77) Finalize methods and logix to send and read and delete messages and what's needed for this 

### 2.3.7 (2019-07-06)
* (Apollon77) fix (finally) special case on authentication check

### 2.3.6 (2019-07-05)
* (Apollon77) fix (finally) special case on authentication check

### 2.3.5 (2019-07-01)
* (Apollon77) fix special case on authentication check

### 2.3.4 (2019-06-25)
* (Apollon77) fix potential error on PUSH_MEDIA_PROGRESS_CHANGE push infos

### 2.3.3 (2019-06-23)
* (Apollon77) change authentication check to hopefully better handle DNS or other "Network unavailable" errors

### 2.3.2 (2019-06-21)
* (Apollon77) fix ssml

### 2.3.1 (2019-06-21)
* (Apollon77) optimize handling for missing csrf cases

### 2.3.0 (2019-06-20)
* (Apollon77) use alexa-cookie lib 2.1 with latest adoptions to Amazon changes (Cookie CSRF was missing)
* (Apollon77) fixed default cookie refresh interval
* (Apollon77) When Speak via SSML is done this is not send as card value
* (Apollon77) add PUSH_MEDIA_PROGRESS_CHANGE to known WS-MQTT topics
* (Apollon77) change WS reconnection logic to try once per minute

### 2.2.0 (2019-01-xx)
* (Apollon77) add new sequenceCommands "calendarNext", "calendarToday", "calendarTomorrow"
* (Apollon77) fix wake word handling and history sanitizing

### 2.1.0 (2019-01-12)
* (Apollon77) add new sequenceCommands "deviceStop", "notification", "announcement" and finally "ssml"

### 2.0.0 (2018-12-02)
* (Apollon77) upgrade amazon-cookie lib to 2.0

### 1.0.3 (2018-11-17)
* (Apollon77) upgrade amazon-cookie lib
* (Apollon77) better handle ws errors and upgrade ws version to still support nodejs 6

### 1.0.2 (2018-11-17)
* (Apollon77) upgrade amazon-cookie lib

### 1.0.1 (2018-11-09)
* (Apollon77) upgrade amazon-cookie lib
* (Apollon77) small fix for strange history summary content

### 1.0.0 (2018-09-06)
* (Apollon77) polishing and finalization and make it 1.0.0

### 0.6.1 (2018-08-28)
* (Apollon77) rework scenes and add option  to send Parallel or Sequencial commands
* (Apollon77) enhance methods for smart home device and group handling

### 0.6.0 (2018-08-24)
* (Apollon77) several fixes and optimizations
* (Apollon77) enhance methods for smart home device and group handling

### 0.5.2 (2018-08-16)
* (Apollon77) also allow new reminder on next day :-)

### 0.5.0 (2018-08-16)
* (Apollon77) fix an error when getting new cookie
* (Apollon77) Add Reminder and Alarms support.
* (Apollon77) Enhance Push Connection
* (Apollon77) Added some more deviceTypes

### 0.3.0 (2018-08-13)
* (Apollon77) Added Websocket/MQTT connection class and also initialize it when requested via alexa-remote class.
* (Apollon77) Websocet/MQTT class and also Alexa-Remote are now event emitters to be able to notify on push changes
* (Apollon77) many fixes and optimizations, changed code to be an ES6 class
* (Apollon77) reworked the "prepare" step and only initialize what's really needed and allow extra "init" methods also to update Devices, Bluetooth and such. Docs will follow
* (Apollon77) API breaking: executeAutomationRoutine is not expecting a routineId anymore, but the complete routine definition.

### 0.2.x
* (Apollon77) 0.2.8: fixes, fix shuffle/repeat commands, make sure speak object is a string
* (Apollon77) 0.2.7: speak maximum are 250 characters, routines will now queried 2000 at once (instead of only 20 before)
* (Apollon77) 0.2.6: fixes
* (Apollon77) 0.2.5: new functions to read musicproviders and send searchphrases for them
* (Apollon77) 0.2.5: by default direct all calls to "alexa."+amazonPage to be more generic, overwritable
* (Apollon77) 0.2.4: several smaller bugfixes
* (Apollon77) 0.2.4: an speak call with empty string will return an error
* (Apollon77) 0.2.4: add infos if multiroom device or member
* (Apollon77) 0.2.3: in non .com replace numbers with points into numbers with comma
* (Apollon77) 0.2.0: several optimizations and publish as alexa-remote2 on npm
* (Apollon77) 0.2.0: use alexa-cookie@0.2.0 library to also offer proxy support
* (Apollon77) 0.2.0: retrieve automation routines in prepare
* (Apollon77) 0.2.0: enhanced sendCommand and added support for Routines and sequencial Commands

### 0.1.x
* (Apollon77) 0.1.3: Use specific User-Agents for Win32, MacOS and linux based platforms
* (Apollon77) 0.1.2: add logging for used Alexa-URL and user-Agent once at init
* (Apollon77) 0.1.1: rename "shuffle" to "ShuffleCommand" and repeat to RepeatCommand)

### 0.1.0
* (Apollon77) added automatic cookie renewal when email and password are provided
* (Apollon77) added authentication checks by bootstrap call (like [alexa-remote-control](https://github.com/thorsten-gehrig/alexa-remote-control))
* (Apollon77) several fixes
* (Apollon77) added logger option

### 0.0.x
* Versions by soef
