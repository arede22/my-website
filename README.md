## Personal Website/Portfolio

1. Demonstrating HTML/CSS and JavaScript skills
2. Created using React.js application launched with Next for static website

<p align="center">
  <img src="./static/genImages/3-color-trace.png" aria-label="Profile Image" />
</p>

<b> Note for positioning: </b>
  flexbox: calhacks.org/flexbox
  position: relative; --> to make B move relative to A and C divs
  material design, bootstrap, css tricks, mdn web docs

<b> Recently changed: </b>
  Not using modals any more, not pretty to look at (still have infrastructure)
  Figured out navbar for mobile screens

  Style components compartmentally

<b> Yet to-do: </b>
  Dropdown menu for mobile screens
  Sketch out a good scheme for design, now that abstractions are done everything should go smoother

  Get color palette and apply (plus graphic design background Illustrator)
  Finalize design ideas, modify @styles, nav, welcome, intro, contactme, and footer toward that end
  Think of portfolio and info layouts + act on it
  Design for different media -- font-sizes, widths

  Add in a 'scroll to top' button
  Graphic design for background
  Animation gif for loading screen

<b> Main to-dos: </b>
  Make compatible with different media
  See if necessary to incorporate react-dom, react-router, react bootstrap, etc.
  Javascript and Ajax scripts
  Add in Github, Spotify, Youtube, and Instagram API calls
  Page loader
  Opt blog section

<b> Updating project: </b>
  1. Launch via CLI (build/ship):
     npm run build
     npm run export
     cd out
     serve -p 8080
  2. Launch dev:
     npm run dev
  3. Running into node module issues on build, if solving takes too long do:
     npm uninstall
     delete .next
     delete node_modules
     delete package_lock.json
     npm install
     launch the application
