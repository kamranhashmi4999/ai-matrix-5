// ui/checkbox/CustomCheckbox.tsx
import { Checkbox, CheckboxProps, MantineProvider, createTheme, Tooltip } from '@mantine/core';

interface CustomCheckboxProps extends Omit<CheckboxProps, 'radius' | 'size'> {
    tooltip?: string;
    pointerCursor?: boolean;
    checked?: boolean;
    disabled?: boolean;
}

const pointerTheme = createTheme({
    cursorType: 'pointer',
});

function CustomCheckbox({ tooltip, pointerCursor, checked, disabled, ...props }: CustomCheckboxProps) {
    const fixedProps = { radius: "xs", size: "sm", checked, disabled };
    const allProps = { ...props, ...fixedProps };
    const checkboxElement = <Checkbox {...allProps} />;
    const checkboxWithTooltip = tooltip ? (
        <Tooltip label={tooltip}>
            {checkboxElement}
        </Tooltip>
    ) : (
        checkboxElement
    );

    return pointerCursor ? (
        <MantineProvider theme={pointerTheme}>
            {checkboxWithTooltip}
        </MantineProvider>
    ) : (
        checkboxWithTooltip
    );
}

export default CustomCheckbox;
