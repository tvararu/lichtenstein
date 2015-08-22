/* global mui */

const {
  List,
  ListItem,
  ListDivider,
  Toggle
} = mui

LightList = React.createClass({ // eslint-disable-line
  propTypes: {
    lights: React.PropTypes.array.isRequired,
    onLightToggle: React.PropTypes.func
  },

  render () {
    return <List>{
      this.props.lights.map((light, index) => {
        console.log(light)
        const toggle = light.state.reachable ? <Toggle
          defaultToggled={ light.state.on }
          style={{ marginRight: '1em' }}
        /> : null
        return [
          <ListItem key={ light._id }
            primaryText={ light.name }
            secondaryText={ light.type }
            rightIcon={ toggle }
            onClick={ () => { this.props.onLightToggle(light._id, !light.state.on) } }
          />,
          <ListDivider />
        ]
      })
    }</List>
  }
})
