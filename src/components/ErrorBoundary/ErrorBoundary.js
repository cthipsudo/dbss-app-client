import React from 'react';

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
          <h1>Something went wrong. Please refresh the page</h1>
        </section>
      )
    }

    return this.props.children;
  }
}