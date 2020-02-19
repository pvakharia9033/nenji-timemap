import { Container, Rectangle, Sprite, Loader } from 'pixi.js';
import renderer from './renderer.js';


class Background extends Container {
    constructor(mapData) {
        super();
        this.mapData = mapData;
        let layerZIndex = ["", "floor", "floor2", "walls", "trees"];
        let layersById = {}, layersByKey = {};
        const tilesheets = mapData.tilesets;
        const loader = new Loader();
        const insertStats = function (resource, next) {
            resource._stats = {};
            var stats = tilesheets.find(function (tilesheet) {
                if (tilesheet.image === resource.name) return true;
            });
            resource._stats = stats;
            next();
        }

        tilesheets.forEach((tilesheet) => {
            // var url = tilesheet.image + "?version=" + parseInt(Math.random() * 1000);
            loader.add(tilesheet.image, tilesheet.image, { crossOrigin: true });
        });
        loader.use(insertStats);
        loader.load((loader, resources) => {
            Object.assign(renderer.loaded_resources, resources);
            mapData.layers.forEach((tiledLayer, i) => {
                layersById[tiledLayer.name] = tiledLayer;
                layersByKey[i] = tiledLayer;
                if (tiledLayer.type === "tilelayer") {
                    const renderedLayer = this.loadLayer(tiledLayer, resources);
                    switch (tiledLayer.name) {
                        case 'floor':
                            renderer.floor.addChild(renderedLayer);
                            break;
                        case 'floor2':
                            renderer.floor2.addChild(renderedLayer);
                        case 'walls':
                            renderer.walls.addChild(renderedLayer);
                            break;
                        case 'trees':
                            renderer.trees.addChild(renderedLayer);
                            break;
                    }
                }
            });
        });
    }

    loadLayer(tiledLayer) {
        const tilesheets = this.mapData.tilesets;
        let layerGroup = new Container();
        tiledLayer.data.forEach((gid, index) => {
            let tileSprite, texture, mapX, mapY, tileX, tileY;

            if (gid > 0) {
                const tilesheet = tilesheets.find((tilesheet) => {
                    if (gid >= tilesheet.firstgid && gid <= tilesheet.firstgid + tilesheet.tilecount - 1) return true;
                });
                const spacing = parseFloat(tilesheet.spacing) || 0;
                const tilesheetColumnsCount = Math.floor(tilesheet.imagewidth / (tilesheet.tilewidth + spacing));

                gid = gid - tilesheet.firstgid + 1;

                // map x,y position of tile
                mapX = (index % this.mapData.width) * this.mapData.tilewidth;
                mapY = (Math.floor(index / this.mapData.width)) * this.mapData.tileheight;

                // tilesheet x,y position of tile
                tileX = ((gid - 1) % tilesheetColumnsCount) * this.mapData.tilewidth;
                tileY = (Math.floor((gid - 1) / tilesheetColumnsCount)) * this.mapData.tileheight;

                if (spacing > 0) {
                    tileX += spacing + spacing * ((gid - 1) % tilesheetColumnsCount);
                    tileY += spacing + spacing * Math.floor((gid - 1) / tilesheetColumnsCount);
                }

                texture = renderer.loaded_resources[tilesheet.image].texture.clone();
                texture.frame = new Rectangle(Math.round(tileX), Math.round(tileY), this.mapData.tilewidth, this.mapData.tileheight);
                tileSprite = new Sprite(texture);
                tileSprite.x = mapX;
                tileSprite.y = mapY;
                tileSprite.index = index;
                tileSprite.gid = gid;
                layerGroup.addChild(tileSprite);
            }
            else {
                layerGroup.addChild(new Sprite());
            }
        });
        const renderTexture = renderer.getRenderer().generateTexture(layerGroup);
        renderTexture.tileMap = true;
        renderTexture.tilesheets = tilesheets;
        layerGroup = new Sprite(renderTexture);
        return layerGroup;
    }
}

export default Background
