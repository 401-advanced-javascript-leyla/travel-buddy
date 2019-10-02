import React from 'react';
import PropTypes from 'prop-types';
import { LoginContext } from './context';


const If = (props) => {
  return props.condition ? props.children : null;
};

class Auth extends React.Component {
  static contextType = LoginContext;

  render() {
    let okToRender = false;
    const { capability } = this.props.capability;
    const capabilityCheck = capability ? this.context.user.capabilities.includes(capability) : true;
    try {
      okToRender = this.context.loggedIn && capabilityCheck;
    } catch (error) {
      console.warn('Not Authorized');
    }

    return (
      <If condition={ okToRender }>
        { this.props.children }
      </If>
    );
  }
}

Auth.propTypes = {
  material: PropTypes.object,
  createNewAuth: PropTypes.func,
  auths: PropTypes.object,
  children: PropTypes.node,
  capability: PropTypes.string,
};

export default Auth;
