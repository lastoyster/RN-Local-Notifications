// RootNavigation.js

import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

/**
 * Navigate to the given route. This will only work if the navigation ref
 * has already been set up by the time this function is called.
 *
 * @param {string} name The name of the route to navigate to.
 * @param {Object} [params] The params to pass to the route.
 */
export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
