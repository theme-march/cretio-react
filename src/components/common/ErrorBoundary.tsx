import React, { Component, type ReactNode } from "react";

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(): State {
        return { hasError: true };
    }
    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error("ErrorBoundary:", error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: "40px", textAlign: "center" }}>
                    <h2>Something went wrong.</h2>
                    <p>Please refresh the page.</p>
                </div>
            );
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
