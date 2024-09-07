"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7870],{9633:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Step One Assist Pipeline installation","href":"/View-Assist/docs/assist-pipeline/","docId":"assist-pipeline/index","unlisted":false},{"type":"link","label":"Welcome to View Assist","href":"/View-Assist/docs/intro","docId":"intro","unlisted":false},{"type":"category","label":"Satellite Setup","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Android Configuration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Microphone Streaming Software","href":"/View-Assist/docs/tablet-satellite/android/microphone","docId":"tablet-satellite/android/microphone","unlisted":false},{"type":"link","label":"Browser Display Software","href":"/View-Assist/docs/tablet-satellite/android/browser","docId":"tablet-satellite/android/browser","unlisted":false}],"href":"/View-Assist/docs/tablet-satellite/android/"},{"type":"link","label":"ESPHome Configuration","href":"/View-Assist/docs/tablet-satellite/esphome/","docId":"tablet-satellite/esphome/index","unlisted":false},{"type":"category","label":"Configuring Home Assistant","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Assist Pipeline","href":"/View-Assist/docs/tablet-satellite/ha-requirements/assist-pipeline","docId":"tablet-satellite/ha-requirements/assist-pipeline","unlisted":false},{"type":"category","label":"Custom Integrations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Browser Mod","href":"/View-Assist/docs/tablet-satellite/ha-requirements/custom-integrations/browsermod","docId":"tablet-satellite/ha-requirements/custom-integrations/browsermod","unlisted":false},{"type":"link","label":"Stream Assist","href":"/View-Assist/docs/tablet-satellite/ha-requirements/custom-integrations/streamassist","docId":"tablet-satellite/ha-requirements/custom-integrations/streamassist","unlisted":false},{"type":"link","label":"Chime TTS","href":"/View-Assist/docs/tablet-satellite/ha-requirements/custom-integrations/chimetts","docId":"tablet-satellite/ha-requirements/custom-integrations/chimetts","unlisted":false}],"href":"/View-Assist/docs/tablet-satellite/ha-requirements/custom-integrations/"}],"href":"/View-Assist/docs/tablet-satellite/ha-requirements/"}],"href":"/View-Assist/docs/tablet-satellite/"},{"type":"category","label":"View Assist Installation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Device Configuration","href":"/View-Assist/docs/view-assist/device-configuration","docId":"view-assist/device-configuration","unlisted":false},{"type":"category","label":"Dashboard & Views","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Lovelace Prerequisites","href":"/View-Assist/docs/view-assist/dashboard-views/lovelace-prereqs","docId":"view-assist/dashboard-views/lovelace-prereqs","unlisted":false},{"type":"link","label":"Dashboard Installation","href":"/View-Assist/docs/view-assist/dashboard-views/dashboard","docId":"view-assist/dashboard-views/dashboard","unlisted":false},{"type":"link","label":"View Installation","href":"/View-Assist/docs/view-assist/dashboard-views/views","docId":"view-assist/dashboard-views/views","unlisted":false},{"type":"link","label":"Browsermod Settings","href":"/View-Assist/docs/view-assist/dashboard-views/browsermod-settings","docId":"view-assist/dashboard-views/browsermod-settings","unlisted":false}],"href":"/View-Assist/docs/view-assist/dashboard-views/"},{"type":"link","label":"Control Automations","href":"/View-Assist/docs/view-assist/control-automations","docId":"view-assist/control-automations","unlisted":false}],"href":"/View-Assist/docs/view-assist/"},{"type":"category","label":"Showcase Gallery","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Sentence Gallery","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Ask AI","href":"/View-Assist/docs/gallery/sentences/ask-ai","docId":"gallery/sentences/ask-ai","unlisted":false},{"type":"link","label":"Broadcast","href":"/View-Assist/docs/gallery/sentences/broadcast","docId":"gallery/sentences/broadcast","unlisted":false}],"href":"/View-Assist/docs/gallery/sentences/"},{"type":"link","label":"Views Gallery","href":"/View-Assist/docs/gallery/views/","docId":"gallery/views/index","unlisted":false}],"href":"/View-Assist/docs/gallery/"}]},"docs":{"assist-pipeline/index":{"id":"assist-pipeline/index","title":"Step One Assist Pipeline installation","description":"The Assist Pipeline provides the wake word detection, speech-to-text and text-to-speech for using voice control in Home Assistant.  Below are the instructions for installing and configuring.  These services are available as HASSOS Addons and Docker containers.  You must have the assist pipeline in place to use View Assist.","sidebar":"tutorialSidebar"},"gallery/index":{"id":"gallery/index","title":"Showcase Gallery","description":"","sidebar":"tutorialSidebar"},"gallery/sentences/ask-ai":{"id":"gallery/sentences/ask-ai","title":"Ask AI","description":"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.","sidebar":"tutorialSidebar"},"gallery/sentences/broadcast":{"id":"gallery/sentences/broadcast","title":"Broadcast","description":"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.","sidebar":"tutorialSidebar"},"gallery/sentences/index":{"id":"gallery/sentences/index","title":"Sentence Gallery","description":"View Assist is easily extendable by adding custom sentences which provide data to different custom views. On this page you will find a gallery of premade custom sentences. You will find links to the requirements and installation instructions. Blueprints have been made available for easy installation. All custom sentence blueprint require that Stream Assist user have version 2.1.0 or greater.","sidebar":"tutorialSidebar"},"gallery/views/index":{"id":"gallery/views/index","title":"Views Gallery","description":"","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Welcome to View Assist","description":"View Assist provides visual feedback for the Home Assistant Assist voice assistant using a collection of different automations, custom sentences, scripts, and extensions with the view being displayed on any Android device.  Multiple devices can join the View Assist satellite network and interact.  This is not limited to Android devices as ESPHome satellites are also supported.  The project is still a work in progress but is fully functional.","sidebar":"tutorialSidebar"},"tablet-satellite/android/browser":{"id":"tablet-satellite/android/browser","title":"Browser Display Software","description":"In order to render your Home Assistant dashboards in full screen on your Android tablet, you\'ll need an application that will render in a full screen fashion and provides additional functionality to make interacting with the dashboards easier.","sidebar":"tutorialSidebar"},"tablet-satellite/android/index":{"id":"tablet-satellite/android/index","title":"Android Configuration","description":"An Android device is the most common example of a View Assist Satellite. The various components outline through this guide have been tested on several different Android tablets running several various versions of the Android operating system. The initial device used for the proof of concept was a 2016 Amazon Fire 7HD tablet running Android 5. It\'s because of this we are confident to say that this method should work on any device that is that old or newer. Wake Word detection is done on your Home Assistant instance as audio is constantly being streamed from your tablet to your HA server.","sidebar":"tutorialSidebar"},"tablet-satellite/android/microphone":{"id":"tablet-satellite/android/microphone","title":"Microphone Streaming Software","description":"In order to leverage your tablet as a voice assistant satellite, you\'ll need to have an application installed that will be responsible for streaming the audio from your microphone on your local network. We\'ll leverage Stream Assist running on your Home Assistant instance to access those streams and pass the audio into the voice pipeline. We\'ll cover setting up Stream Assist in a future section.","sidebar":"tutorialSidebar"},"tablet-satellite/esphome/index":{"id":"tablet-satellite/esphome/index","title":"ESPHome Configuration","description":"ESPHome is an open source platform which allows users to incorporate ESP powered devices into Home Assistant.  Recently great work was done to allow for these devices to be used as voice satellites.  These devices have wake word built in so they do not require additional helpers like Stream Assist to process wake word.","sidebar":"tutorialSidebar"},"tablet-satellite/ha-requirements/assist-pipeline":{"id":"tablet-satellite/ha-requirements/assist-pipeline","title":"Assist Pipeline","description":"The Assist Pipeline provides the wake word detection, speech-to-text and text-to-speech for using voice control in Home Assistant.  Below are the instructions for installing and configuring.  These services are available as HASSOS Addons and Docker containers","sidebar":"tutorialSidebar"},"tablet-satellite/ha-requirements/custom-integrations/browsermod":{"id":"tablet-satellite/ha-requirements/custom-integrations/browsermod","title":"Browser Mod","description":"Browser Mod 2 custom integration provides several key pieces of functionality for an Android Tablet Satellite:","sidebar":"tutorialSidebar"},"tablet-satellite/ha-requirements/custom-integrations/chimetts":{"id":"tablet-satellite/ha-requirements/custom-integrations/chimetts","title":"Chime TTS","description":"Chime TTS is a custom Home Assistant integration that locally combines TTS audio and sound effects into seamless audio for playback in a single service call, eliminating the lag.","sidebar":"tutorialSidebar"},"tablet-satellite/ha-requirements/custom-integrations/index":{"id":"tablet-satellite/ha-requirements/custom-integrations/index","title":"Custom Integrations","description":"Several Home Assistant custom integrations (or custom_components as they are often referred to) are used for several pieces of the View Assist flow.  These can all be installed using the Home Assistant Community Store (HACS).  If you do not have HACS installed, visit the official documentation for instructions and then return here to proceed.","sidebar":"tutorialSidebar"},"tablet-satellite/ha-requirements/custom-integrations/streamassist":{"id":"tablet-satellite/ha-requirements/custom-integrations/streamassist","title":"Stream Assist","description":"Repo//github.com/AlexxIT/StreamAssist","sidebar":"tutorialSidebar"},"tablet-satellite/ha-requirements/index":{"id":"tablet-satellite/ha-requirements/index","title":"Configuring Home Assistant","description":"","sidebar":"tutorialSidebar"},"tablet-satellite/index":{"id":"tablet-satellite/index","title":"Satellite Setup","description":"View Assist is made up of satellite devices.  These devices may have a display but that is not required.  In this section you will be presented with the different device types and the detailed setup for each.  Know that you can set up different satellites with different device types and use them together.","sidebar":"tutorialSidebar"},"view-assist/control-automations":{"id":"view-assist/control-automations","title":"Control Automations","description":"View Assist is controlled using core control automations per view device.  Other automations control things like alarms and reminders.  This page details the installation and configuration of some of these automations","sidebar":"tutorialSidebar"},"view-assist/dashboard-views/browsermod-settings":{"id":"view-assist/dashboard-views/browsermod-settings","title":"Browsermod Settings","description":"Additional settings need to be made in Browsermod to remove the side and header bars as well as set the default dashboard","sidebar":"tutorialSidebar"},"view-assist/dashboard-views/dashboard":{"id":"view-assist/dashboard-views/dashboard","title":"Dashboard Installation","description":"Image","sidebar":"tutorialSidebar"},"view-assist/dashboard-views/index":{"id":"view-assist/dashboard-views/index","title":"Dashboard & Views","description":"The core View Assist dashboard is configured to use a base custom button card templates.  This dashboard is the framework for the views.  The template also sets common default variables like time and temperature which are used on different views.  This allows for code reduction and consistency.  Data display views are then created.  These are much smaller than the dashboard template views as they leverage this framework.  The simplicity in these views should make it less intimidating for others to create and share their custom views.","sidebar":"tutorialSidebar"},"view-assist/dashboard-views/lovelace-prereqs":{"id":"view-assist/dashboard-views/lovelace-prereqs","title":"Lovelace Prerequisites","description":"The VA dashboard and views are built using several great frontend Lovelace cards and utilities.  These are easily installed via HACS.  These must be installed prior to configuring the dashboard and views for use with VA.","sidebar":"tutorialSidebar"},"view-assist/dashboard-views/views":{"id":"view-assist/dashboard-views/views","title":"View Installation","description":"View Assist uses custom views as the display mechanism for various data presentations.  Create a new view per unique display.  Pay special attention to how these are named and configured.","sidebar":"tutorialSidebar"},"view-assist/device-configuration":{"id":"view-assist/device-configuration","title":"Device Configuration","description":"View Assist devices are created using custom template sensors. These devices contain important information like browser mod ID, media_player device, microphone device, and timer device.  Additionally this configuration sets the attributes needed for different modes, data to displayed and more. These attributes are consumed by control automations and display views.","sidebar":"tutorialSidebar"},"view-assist/index":{"id":"view-assist/index","title":"View Assist Installation","description":"The View Assist system is made up of several different components. These include:","sidebar":"tutorialSidebar"}}}}')}}]);