import { autoDetectRenderer, Container, settings, SCALE_MODES, IResourceDictionary } from 'pixi.js';
import Background from './Background.js';
import GameData from '../../common/GameData';

settings.SCALE_MODE = SCALE_MODES.NEAREST

let renderer = null
let loaded_resources = {};

const stage = new Container()
const camera = new Container()
const floor = new Container()
const floor2 = new Container()
const walls = new Container()
const trees = new Container()

camera.addChild(floor)
camera.addChild(floor2)
camera.addChild(walls)
camera.addChild(trees)
stage.addChild(camera)
// floor.addChild(new BackgroundGrid(GameData.map))
const background = new Background(GameData.map);

const resize = () => {
    renderer.resize(window.innerWidth, window.innerHeight)
}

const centerCamera = (entity) => {
    camera.x = -entity.x + 0.5 * window.innerWidth
    camera.y = -entity.y + 0.5 * window.innerHeight
}

const toWorldCoordinates = (mouseX, mouseY) => {
    return {
        x: -camera.x + mouseX,
        y: -camera.y + mouseY
    }
}

const update = (delta) => {
    // updating z-index
    // stage.children.forEach((child) => {
    //     child.children.forEach((innerChild) => {
    //         innerChild.children.sort((a, b) => {
    //             return a.zOrder - b.zOrder
    //         });
    //     })
    // });
    renderer.render(stage)
}

// init is a function we call after the DOM has loaded
// otherwise the canvas element would not yet exist
const init = () => {
    const canvas = document.getElementById('main-canvas')

    renderer = autoDetectRenderer({
        width: window.innerWidth,
        height: window.innerHeight,
        view: canvas,
        antialiasing: false,
        transparent: false,
        resolution: 1
    });
}

const getRenderer = () => {
    return renderer;
}

window.addEventListener('resize', resize)

export default {
    init,
    update,
    resize,
    centerCamera,
    toWorldCoordinates,
    camera,
    floor,
    floor2,
    walls,
    trees,
    stage,
    getRenderer,
    loaded_resources
}
