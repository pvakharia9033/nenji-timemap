import AsteroidGraphics from '../graphics/AsteroidGraphics.js'
import renderer from '../graphics/renderer.js'

export default (state) => {
    return {
        create({ data, entity }) {
            const graphics = new AsteroidGraphics()
            renderer.walls.addChild(graphics)
            return graphics
        },
        delete({ nid, graphics }) {
            renderer.walls.removeChild(graphics)
        },
        watch: {
        }
    }
}
