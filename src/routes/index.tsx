import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './stack.routes';
import PostsProvider from '../interfaces/posts';

const Routes = () => (
    <NavigationContainer>
        <PostsProvider>
            <StackRoutes />
        </PostsProvider>
    </NavigationContainer>
)

export default Routes;