import React from 'react';
import { ActionIcon, TextInput } from '@mantine/core';
import { BsThreeDotsVertical } from "react-icons/bs";
import AmeMenu from './AmeMenu';

interface AmeHoverMenuChatProps {
    placeholder: string;
    editable?: boolean;
}

const AmeHoverMenuChat: React.FC<AmeHoverMenuChatProps> = ({
                                                               placeholder,
                                                               editable = true
                                                           }) => {
    return (
        <AmeMenu>
            <AmeMenu.Target>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        transition: 'background-color 0.3s',
                        borderRadius: '8px',
                        padding: '4px'
                    }}
                >
                    <TextInput
                        placeholder={placeholder}
                        variant="filled"
                        radius="sm"
                        size="sm"
                        readOnly={!editable}
                    />
                    <ActionIcon size="sm">
                        <BsThreeDotsVertical/>
                    </ActionIcon>
                </div>
            </AmeMenu.Target>
        </AmeMenu>
    );
};

export default AmeHoverMenuChat;
