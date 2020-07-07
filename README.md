## Personal Website/Portfolio

1. Demonstrating HTML/CSS and JavaScript skills
2. Created using React.js application launched with Next for static website

<p align="center">
  <img src="./static/genImages/3-color-trace.png" aria-label="Profile Image" />
</p>

<b> Note for positioning: </b>
<ul>
  <li> flexbox: calhacks.org/flexbox </li>
  <li> position: relative; --> to make B move relative to A and C divs </li>
  <li> material design, bootstrap, css tricks, mdn web docs </li>
</ul>

<b> Recently changed: </b>
<ul>
  <li> Not using modals any more, not pretty to look at (still have infrastructure) </li>
  <li> Figured out navbar for mobile screens </li>

  <li> Style components compartmentally </li>
</ul>

<b> Yet to-do: </b>
<ul style="list-style-type:none; line-height:1.5;">
  <li> Dropdown menu for mobile screens </li>
  <li> Sketch out a good scheme for design, now that abstractions are done everything should go smoother </li>

  <li> Get color palette and apply (plus graphic design background Illustrator) </li>
  <li> Finalize design ideas, modify @styles, nav, welcome, intro, contactme, and footer toward that end </li>
  <li> Think of portfolio and info layouts + act on it </li>
  <li> Design for different media -- font-sizes, widths </li>

  <li> Add in a 'scroll to top' button </li>
  <li> Graphic design for background </li>
  <li> Animation gif for loading screen </li>
</ul>

<b> Main to-dos: </b>
<ul style="list-style-type:none; line-height:1.5;">
  <li> Make compatible with different media </li>
  <li> See if necessary to incorporate react-dom, react-router, react bootstrap, etc. </li>
  <li> Javascript and Ajax scripts </li>
  <li> Add in Github, Spotify, Youtube, and Instagram API calls </li>
  <li> Page loader </li>
  <li> Opt blog section </li>
</ul>

<b> Updating project: </b>
  1. Launch via CLI (build/ship):
    <ul>
     <li> npm run build </li>
     <li> npm run export </li>
     <li> cd out </li>
     <li> serve -p 8080 </li>
  2. Launch dev:
     npm run dev
  3. Running into node module issues on build, if solving takes too long do:
    <ul>
     <li> npm uninstall </li>
     <li> delete .next </li>
     <li> delete node_modules </li>
     <li> delete package_lock.json </li>
     <li> npm install </li>
     <li> launch the application </li>
