import React, { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

// Компонент для тестирования ErrorBoundary
const BugButton = () => {
    const [newError, setNewError] = useState(false);

    const onThrow = () => setNewError(true);

    useEffect(() => {
        if (newError) throw new Error();
    }, [newError]);

    return (
        <Button onClick={onThrow}>
            throw error
        </Button>
    );
};
export default BugButton;
