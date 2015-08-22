/* global Lights */
Lights = new Mongo.Collection('lights') // eslint-disable-line

const BASE_URL = 'http://192.168.1.7/api/15b381be1c341607308641d2ca91e2b/lights'

const api = path => BASE_URL + path

Meteor.methods({
  getLights: function () {
    this.unblock()
    var result = HTTP.call('GET', api('/'))

    Lights.remove({})

    Object.keys(result.data).map((key) => {
      Lights.insert({ ...result.data[key] })
    })
  }
})
