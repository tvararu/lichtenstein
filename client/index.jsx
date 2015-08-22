/* global injectTapEventPlugin */
/* global App */

Meteor.startup(() => {
  injectTapEventPlugin()
  React.render(<App />, document.getElementById('render-target'))
})
