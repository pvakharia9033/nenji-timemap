import { Sprite, Loader, Rectangle } from 'pixi.js'
import resources from './graphics/renderer';

class SpritesGenerator {
    constructor(rows, cols, cellsheet, cb) {
        this.keyFrames = [];
        this.loadTexture(cellsheet)
            .then((texture) => {
                const spriteWidth = texture.width / cols;
                const spriteHeight = texture.height / rows;
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        const cloneTexture = texture.clone();
                        const gid = i * cols + j;
                        const posX = ((gid) % cols) * spriteWidth;
                        const posY = (Math.floor((gid) / cols)) * spriteHeight;
                        cloneTexture.frame = new Rectangle(posX, posY, spriteWidth, spriteHeight);
                        this.keyFrames.push(cloneTexture);
                    }
                }
                cb();
            });
    }

    loadTexture(cellsheet) {
        return new Promise((resolve) => {
            if (resources.loaded_resources[cellsheet]) {
                return resolve(resources.loaded_resources[cellsheet].texture.clone());
            }
            const loader = new Loader();
            loader.add(cellsheet, `${cellsheet}?version=${parseInt(Math.random() * 1000)}`, { crossOrigin: true });
            loader.load((loader, resources) => {
                return resolve(resources[cellsheet].texture.clone());
            });
        });
    }
}

export default SpritesGenerator