"use strict";(self.webpackChunkmodlib_docs=self.webpackChunkmodlib_docs||[]).push([[256],{7674:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Intro","href":"/docs/","docId":"index","unlisted":false},{"type":"link","label":"Motivation","href":"/docs/motivation","docId":"motivation","unlisted":false},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Hello world","href":"/docs/getting_started/hello_world","docId":"getting_started/hello_world","unlisted":false},{"type":"link","label":"Model zoo","href":"/docs/getting_started/model_zoo","docId":"getting_started/model_zoo","unlisted":false},{"type":"link","label":"Custom models","href":"/docs/getting_started/custom_models","docId":"getting_started/custom_models","unlisted":false},{"type":"link","label":"Devices","href":"/docs/getting_started/devices","docId":"getting_started/devices","unlisted":false}],"href":"/docs/category/getting-started"},{"type":"category","label":"Application Modules","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Tracker","href":"/docs/examples/tracker","docId":"examples/tracker","unlisted":false},{"type":"link","label":"Area","href":"/docs/examples/area","docId":"examples/area","unlisted":false},{"type":"link","label":"Counter","href":"/docs/examples/counter","docId":"examples/counter","unlisted":false},{"type":"link","label":"Matcher","href":"/docs/examples/matcher","docId":"examples/matcher","unlisted":false},{"type":"link","label":"Heatmap","href":"/docs/examples/heatmap","docId":"examples/heatmap","unlisted":false}],"href":"/docs/category/application-modules"}]},"docs":{"examples/area":{"id":"examples/area","title":"Area","description":"The Area component allows you to define a polygonal region within a frame by specifying a list of at least three points. Each point is defined as a pair of normalized coordinates [x, y], where x and y are in the range [0, 1], relative to the frame dimensions.","sidebar":"tutorialSidebar"},"examples/counter":{"id":"examples/counter","title":"Counter","description":"The ObjectCounter component is designed to work together with a tracker to keep a persistent count of detected objects over time. By using the tracklet information, it is able to distinguish between different bounding boxes across frames. When a new tracklet is detected, it increments the count for that tracklet\'s associated class.","sidebar":"tutorialSidebar"},"examples/heatmap":{"id":"examples/heatmap","title":"Heatmap","description":"The Heatmap component is used to visualize the density of detected objects across time by overlaying a heatmap onto the frame. The heatmap.update(frame, detections) method stores detections across multiple frames to track the frequency of object appearances in different regions of the frame.","sidebar":"tutorialSidebar"},"examples/matcher":{"id":"examples/matcher","title":"Matcher","description":"The Matcher component is designed to identify relationships between two sets of detections based on their spatial overlap. It takes two sets of detections and compares their bounding boxes to determine overlaping area. The matcher.match(set1, set2) method returns a boolean mask indicating which detections in the first set overlap with any detection in the second set.","sidebar":"tutorialSidebar"},"examples/tracker":{"id":"examples/tracker","title":"Tracker","description":"An implementation of ByteTrack (github) in the Application Module Library.","sidebar":"tutorialSidebar"},"getting_started/custom_models":{"id":"getting_started/custom_models","title":"Custom models","description":"The Application Module Library provides a method to deploy custom-trained models to devices using a similar API to deploying models from the Model Zoo. Due to its modular design, any custom model will work with the already available devices.","sidebar":"tutorialSidebar"},"getting_started/devices":{"id":"getting_started/devices","title":"Devices","description":"The Application Module Library provides an abstraction layer to work with different devices. In general all devices use a common API:","sidebar":"tutorialSidebar"},"getting_started/hello_world":{"id":"getting_started/hello_world","title":"Hello world","description":"Setup your device","sidebar":"tutorialSidebar"},"getting_started/model_zoo":{"id":"getting_started/model_zoo","title":"Model zoo","description":"The model zoo is currently only compatible with the AiCamera() device in the Application Module Library.","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Intro","description":"Welcome to the Application Module Library documentation!","sidebar":"tutorialSidebar"},"motivation":{"id":"motivation","title":"Motivation","description":"Purpose","sidebar":"tutorialSidebar"}}}}')}}]);