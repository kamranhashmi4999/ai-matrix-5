// Unfortunately, I haven't been able to get this one to work yet, but I'm not sure we need to make it work right now.

// ui/split/DualSplitter.tsx
import React, { CSSProperties, ReactNode, useState, useRef } from 'react';
import Split from 'react-split';

interface DualSplitterProps {
    children: ReactNode[]; // Expecting a 2x2 grid of children
}

const DualSplitter: React.FC<DualSplitterProps> = ({ children }) => {
    const verticalRef = useRef<HTMLDivElement[]>([]);
    const horizontalRef = useRef<HTMLDivElement[]>([]);

    const [verticalSizes, setVerticalSizes] = useState([50, 50]);
    const [horizontalSizes, setHorizontalSizes] = useState([50, 50]);

    const gutterStyle: CSSProperties = {
        backgroundColor: '#403f3f',
    };

    const createGutter = (direction: 'vertical' | 'horizontal') => (index: number) => {
        const gutter = document.createElement('div');
        gutter.style.width = direction === 'horizontal' ? '100%' : '30px';
        gutter.style.height = direction === 'horizontal' ? '10px' : '100%'; // Increased height for horizontal to be more visible
        gutter.style.backgroundColor = 'transparent';
        gutter.style.cursor = direction === 'horizontal' ? 'row-resize' : 'col-resize';
        gutter.style.position = 'relative';

        const innerGutter = document.createElement('div');
        innerGutter.style.width = direction === 'horizontal' ? '100%' : '1px';
        innerGutter.style.height = direction === 'horizontal' ? '1px' : '100%';
        innerGutter.style.backgroundColor = gutterStyle.backgroundColor || '#403f3f'; // Fallback to default if undefined
        innerGutter.style.position = 'absolute';
        innerGutter.style[direction === 'horizontal' ? 'top' : 'left'] = '50%'; // Centering the inner gutter
        gutter.appendChild(innerGutter);

        return gutter;
    };

    return (
        <Split
            sizes={verticalSizes}
            minSize={100}
            expandToMin={true}
            gutterSize={10}
            gutterAlign="center"
            snapOffset={0}
            dragInterval={1}
            direction="vertical"
            cursor="row-resize"
            onDragEnd={setVerticalSizes}
            gutter={createGutter('vertical')}
            style={{ display: 'flex', height: '100%', flexDirection: 'column' }}
        >
            <Split
                sizes={horizontalSizes}
                minSize={100}
                expandToMin={true}
                gutterSize={10}
                gutterAlign="center"
                snapOffset={0}
                dragInterval={1}
                direction="horizontal"
                cursor="col-resize"
                onDragEnd={setHorizontalSizes}
                gutter={createGutter('horizontal')}
                style={{ display: 'flex', height: '100%' }}
            >
                {children[0]}
                {children[1]}
            </Split>
            <Split
                sizes={horizontalSizes}
                minSize={100}
                expandToMin={true}
                gutterSize={10}
                gutterAlign="center"
                snapOffset={0}
                dragInterval={1}
                direction="horizontal"
                cursor="col-resize"
                onDragEnd={setHorizontalSizes}
                gutter={createGutter('horizontal')}
                style={{ display: 'flex', height: '100%' }}
            >
                {children[2]}
                {children[3]}
            </Split>
        </Split>
    );
};

export default DualSplitter;
