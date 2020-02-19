import { Container, Sprite } from 'pixi.js';
import SpritesGenerator from '../SpriteGenerator';

class Player extends Container {
    constructor(stats) {
        super();
        const { rowCount, columnCount, url } = stats.cellSheet;
        this.texture = new SpritesGenerator(rowCount, columnCount, url, this.createPlayer.bind(this));
        this.stats = stats;
        this.i = 0
    }

    createPlayer() {
        const sprite = new Sprite(this.texture.keyFrames[this.i]);
        sprite.anchor.set(0.5, 0.5)
        sprite.rotation = 0.5 * Math.PI;
        setInterval(() => {
            sprite.texture = this.texture.keyFrames[this.i++];
            if (this.i >= 96) {
                this.i = 0
            }
        }, 100)
        this.addChild(sprite);
    }
}

export default Player
