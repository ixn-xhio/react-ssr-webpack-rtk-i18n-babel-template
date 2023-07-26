import React, { Component, PropsWithChildren } from 'react';

class ErrorBoundary extends Component<PropsWithChildren<any>, { hasError: boolean }> {
  constructor(props: PropsWithChildren<any>) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
    // logErrorToMyService(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
  }
}
export default ErrorBoundary;