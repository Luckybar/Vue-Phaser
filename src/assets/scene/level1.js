import Phaser from 'phaser';
export default class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'level1'
        });
    }
    preload() {
        this.load.image('background', '/scene-1.jpg');
        this.load.image('button', '/button.png');
    }
    create() {
        this.add.image(400, 300, 'background');
        const button = this.add.image(400, 550, 'button');
        button.scale = 0.1;
        button.setInteractive().on('pointerdown', () => {
            console.log('level1');
            this.scene.start('level2');
        });
    }
}