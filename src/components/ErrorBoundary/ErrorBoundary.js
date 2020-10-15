import React from 'react';
import SeaMonster from '../../images/sea-monster.svg'
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
  }

  render() {
    if (this.state.hasError || this.props.error) {
      // You can render any custom fallback UI
      return (
        <section className="errorBoundary">
          <h1>Something went wrong, Captain.</h1>
          <p>The Kraken is attacked and broke the page</p>
          <p>Please refresh the page</p>
          <img src={SeaMonster} alt="Sea monster"></img>
        </section>
      )
    }

    return this.props.children;
  }
}