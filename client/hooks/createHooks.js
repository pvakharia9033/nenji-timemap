import playerHooks from './playerHooks.js';
import asteroidHooks from './asteroidHooks';

export default (state) => {
    return {
        'PlayerCharacter': playerHooks(state),
        'Asteroid': asteroidHooks(state)
    }
}
