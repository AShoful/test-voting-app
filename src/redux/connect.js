/* eslint-disable func-names */
import React from 'react';
import { store } from './store';

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function(Component) {
    return class extends React.Component {
      componentDidMount() {
        store.subscribe(() => {
          this.forceUpdate();
        });
      }

      render() {
        return (
          <Component {...this.props} {...mapStateToProps(store.getState())} {...mapDispatchToProps(store.dispatch)} />
        );
      }
    };
  };
}
