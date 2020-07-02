## Personal Website/Portfolio

<p align="center">
  <img src="./static/genImages/3-color-trace.png" alt="Profile Image" />
</p>

1. Demonstrating HTML/CSS and JavaScript skills
2. Created using React.js application launched with Next for static website

Recently changed:
  Added some React components for abstractions (look up state, props, and lifecycle if needed at that time)
  Updated jsx to wrappers/styles in styled-components to ready for abstractions
  Need to update jsx to wrappers/styles for modals so need to figure out modals

  Mostly modified @styles, nav, welcome, intro, contactme, and footer -- staged for finalizing design ideas
  Made media file properly, now can access from rest of files

Yet to-do:
  Sketch out a good scheme for design, now that abstractions are done everything should go smoother

  Finalize design ideas, modify @styles, nav, welcome, intro, contactme, and footer toward that end
  Think of portfolio ideas, forget about modals not nice to look at

  Design for different media

  Add in a 'scroll to top' button
  Graphic design for background
  Animation gif for loading screen

Main to-dos:
  Style components compartmentally
  Make compatible with different media
  See if necessary to incorporate react-dom, react-router, react bootstrap, etc.
  Javascript and Ajax scripts
  Add in API calls
  Page loader

Updating project:
  1. Launch via CLI:
    npm run build
    npm run export
    cd out
    serve -p 8080
  2. Running into node module issues on build, if solving takes too long do:
    npm uninstall
    delete .next
    delete node_modules
    delete package_lock.json
    npm install
    and launch the application
