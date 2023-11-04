//@ts-nocheck
import React from 'react';
import {logger} from '../services/logger';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    logger('getDerivedStateFromError() threw', error);
    return {hasError: true};
  }

  componentDidCatch(error, info) {
    logger(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export {ErrorBoundary};
