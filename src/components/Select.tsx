import type { ItemProps, SelectProps } from 'react-aria-components';
import { Text, Select, Label, Button, SelectValue, Popover, ListBox, Item } from 'react-aria-components';

interface MySelectProps<T extends object> extends Omit<SelectProps<T>, "children"> {
    label: string;
    description?: string;
    errorMessage?: string;
    children: React.ReactNode | ((item: T) => React.ReactNode);
}

export const MySelect = <T extends object>(
    { label, description, errorMessage, children, ...props }: MySelectProps<T>
) => {
    return (
        <Select {...props}>
            <Label>{label}</Label>
            <Button>
                <SelectValue />
                <span aria-hidden="true">▼</span>
            </Button>
            {description && <Text slot='description'>{description}</Text>}
            {errorMessage && <Text slot='errorMessage'>{errorMessage}</Text>}
            <Popover>
                <ListBox>
                    {children}
                </ListBox>
            </Popover>
        </Select>
    )
};

export const MyItem = (props: ItemProps) => {
    return (
        <Item
            {...props}
        // className=''
        />
    )
}

