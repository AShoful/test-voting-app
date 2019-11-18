import React from 'react';
import { store } from './store';

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function(Component) {
    return class extends React.Component {
      componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleChange);
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      handleChange = () => {
        this.forceUpdate();
      };

      render() {
        return (
          <Component
            {...this.props}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />
        );
      }
    };
  };
}
