import Phaser from "phaser";

export default class Level3 extends Phaser.Scene {
    constructor() {
        super({
            key: 'level3'
        });
    }
    preload() {
        this.load.image('background', '/scene-3.jpg');
        this.load.image('button', '/button.png');
    }
    create() {
        this.add.image(400, 300, 'background');
        const button = this.add.image(400, 550, 'button');
        button.scale = 0.1;
        button.setInteractive().on('pointerdown', () => {
            this.scene.start('level1');
        });
    }
}