'use client';

import React, { useState } from 'react';
import { JsonInput, JsonInputProps } from '@mantine/core';

interface AmeJsonInputProps extends Omit<JsonInputProps, 'size' | 'radius' | 'label' | 'placeholder'> {
    enabled?: boolean;
    errorMessage?: string;
}

const AmeJsonInput: React.FC<AmeJsonInputProps> = ({
                                                       enabled = true,
                                                       errorMessage,
                                                       ...props
                                                   }) => {
    const [value, setValue] = useState<string>('');

    return (
        <JsonInput
            label="Input label"
            placeholder="Input placeholder"
            size="sm"
            radius="sm"
            disabled={!enabled}
            error={errorMessage}
            value={value}
            onChange={setValue}
            {...props}
        />
    );
};

export default AmeJsonInput;
