import React from 'react';

import Loader from '#components/Loader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Loader',
    component: Loader,
    argTypes: {
        variant: { control: { type: 'select' } },
    },
};

export const Showcase = ({ ...args }) => (
    <>
        <Loader {...args}>{args.message}</Loader>
    </>
);

Showcase.args = {
    message: 'Loading, please wait...'
}