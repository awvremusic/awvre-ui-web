import React from 'react';

export const useBodyScroll = (enabled = true) => {
    React.useEffect(() => {
        if (!enabled) return;
        document.body.style.overflowX = 'auto';
        document.body.style.overflowY = 'auto';
        document.body.style.height = 'auto';
        return () => {
            document.body.style.overflowX = 'hidden';
            document.body.style.overflowY = 'hidden';
            document.body.style.height = '100vh';
        };
    }, [enabled]);
}