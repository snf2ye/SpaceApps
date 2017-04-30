Project Link: http://belowthewings.herokuapp.com/
Apps Users:
- Select Flights
- Explore near-flight features in overview
- In overview, select your current location flight-icon to view perspective-integrated data. Extra-fun on mobile.

![Alt text](https://api-2017.spaceappschallenge.org/team-photos/VoO10ffGUv28TscthzQdKWsGaX0=/3818/width-800/)

Features:

Information about sample flight between Boston and Los Angeles:

- 3D Map of flight route and points of interest along the flight plan

- Selecting airplane on route shows a perspective view from the plane, where the user can explore the terrain below and data of interest overlaid--in this case, population density

Tools and Data Utilized:

- Cesium

- 2012 Population Density Dataset

- Points of interest from NASA's Images of Change

Dev-Use:

1. See CESIUM Readme on installing & running Cesium packages.
2. Place CSVs of local data under resources/data/-, or see the following /js/ files to modify or add data sources:
  - add_flight_path.js
  - place_state_parks.js
  - layer_maps.js
