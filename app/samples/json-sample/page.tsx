'use client';

import React, { useState } from 'react';
import AmeJsonInput from './AmeJsonInput';

const Page: React.FC = () => {
    const [jsonValue, setJsonValue] = useState<string>('');
    const [isEnabled, setIsEnabled] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>(undefined);

    const handleJsonChange = (value: string) => {
        setJsonValue(value);

        try {
            JSON.parse(value);
            setError(undefined);
        } catch {
            setError('Invalid JSON');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <AmeJsonInput
                enabled={isEnabled}
                errorMessage={error}
                value={jsonValue}
                onChange={handleJsonChange}
            />
            <button onClick={() => setIsEnabled(!isEnabled)}>
                {isEnabled ? 'Disable' : 'Enable'} Input
            </button>
        </div>
    );
};

export default Page;
