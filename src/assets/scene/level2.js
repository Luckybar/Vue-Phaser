import Phaser from "phaser";
export default class Level2 extends Phaser.Scene {
    constructor() {
        super({
            key: 'level2'
        });
    }
    preload() {
        this.load.image('background2', '/scene-2.jpg');
    }
    create() {
        this.add.image(400, 300, 'background2');
        const button = this.add.image(400, 550, 'button');
        button.scale = 0.1;
        button.setInteractive().on('pointerdown', () => {
            console.log('level2');
            this.scene.start('level1');
        });
    }
}