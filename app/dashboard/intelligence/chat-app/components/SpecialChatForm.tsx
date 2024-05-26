// /chat-app/components/SpecialChatForm.tsx (placeholder)

import React from 'react';
import { useForm } from '../hooks/useForm';

const SpecialChatForm = () => {
    const { values, handleChange } = useForm({ field1: '', field2: '' }); // Example fields

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle submission to ChatContext
        console.log('Submit Special Form:', values);
        // You would typically call sendMessage from ChatContext here
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="field1" value={values.field1} onChange={(e) => handleChange(e.target.name, e.target.value)} />
            <input name="field2" value={values.field2} onChange={(e) => handleChange(e.target.name, e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default SpecialChatForm;
