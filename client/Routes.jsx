import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './UI/layout/MainLayout.jsx';

import Body from './UI/body/Body.jsx';

FlowRouter.route('/', {
    action() {
        mount(MainLayout, {
            content: (<Body/>)
        })
    }
});