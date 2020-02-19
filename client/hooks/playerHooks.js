import Player from '../graphics/Player.js';
import renderer from '../graphics/renderer.js';
import GameData from '../../common/GameData';

export default (state) => {
    return {
        create({ data, entity }) {
            const graphics = new Player(GameData.unitTypes.human);
            renderer.walls.addChild(graphics)
            if (state.myId === entity.nid) {
                state.myEntity = entity
            }
            return graphics
        },
        delete({ nid, graphics }) {
            renderer.walls.removeChild(graphics)
        },
        watch: {
        }
    }
}
