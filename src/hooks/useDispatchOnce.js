import { useEffect, useRef } from 'react';

export const useDispatchOnce = (dispatch, action) => {
    const hasDispatched = useRef(false);

    useEffect(() => {
        if (!hasDispatched.current) {
            dispatch(action);
            hasDispatched.current = true;
        }
    }, [dispatch, action]);
};