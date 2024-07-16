import { useState } from "react";

export function useActionState(action, initialState = {}) {
  const [state, setState] = useState({
    loading: false,
    success: null,
    error: null,
    ...initialState,
  });

  const performAction = async (event) => {
    event.preventDefault();
    setState({ ...state, loading: true, success: null, error: null });

    try {
      const result = await action(new FormData(event.target));
      setState({ ...state, loading: false, success: true, ...result });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        success: false,
        error: error.message,
      });
    }
  };

  return [state, performAction];
}
