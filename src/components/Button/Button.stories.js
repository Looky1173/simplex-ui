import Button from '#components/Button';
import Icon from '#components/Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        variant: { control: { type: 'select' } },
        type: { control: { type: 'select' } },
        size: { control: { type: 'select' } },
        loading: { control: { type: 'boolean' } },
        onClick: { table: { disable: true } },
    },
};

// Create a master template for mapping args to render the Button component
const Template = (args) => <Button {...args}>{args.children}</Button>;

export const Showcase = ({ ...args }) => {
    return (
        <>
            <Button {...args} type="filled">
                Filled
            </Button>
            <Button {...args} type="tonal">
                Tonal
            </Button>
            <Button {...args} type="outlined">
                Outlined
            </Button>
            <Button {...args} type="text">
                Text
            </Button>
            <Button {...args} type="filled">
                Testing
            </Button>
            <Button {...args} type="tonal">
                <Icon name="arrow-back" size={24} />
            </Button>
        </>
    );
};

Showcase.argTypes = {
    type: { table: { disable: true } },
};

// Reuse that template for creating different stories
export const Filled = Template.bind({});
Filled.args = { children: 'Button', type: 'filled' };

export const Tonal = Template.bind({});
Tonal.args = { ...Filled.args, type: 'tonal' };

export const Outlined = Template.bind({});
Outlined.args = { ...Filled.args, type: 'outlined' };

export const Text = Template.bind({});
Text.args = { ...Filled.args, type: 'text' };
