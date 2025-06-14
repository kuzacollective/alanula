
import React from "react";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error here if needed
    console.error("ErrorBoundary caught error:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-6 text-center">
            <div className="text-xl font-bold text-destructive mb-2">Something went wrong.</div>
            <div className="mb-4 text-muted-foreground text-sm">
              {this.state.error?.message || "An unexpected error occurred. Please try again."}
            </div>
            <button
              className="bg-primary text-primary-foreground rounded px-3 py-1 mt-2"
              onClick={this.handleRetry}
            >
              Retry
            </button>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
