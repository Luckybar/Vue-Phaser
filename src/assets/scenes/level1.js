import Phaser from 'phaser';
export default class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'level1'
        });
    }
    preload() {
        this.load.image('background', 'img/scene-1.jpg');
        this.load.image('button', 'img/button.png');
        this.load.audio('bgm', 'sound/bgm.mp3')
    }
    create() {
        this.add.image(400, 300, 'background');
        const bgm = this.sound.add('bgm');
        bgm.setLoop(true);

        const button = this.add.image(200, 550, 'button');
        button.scale = 0.1;
        button.setInteractive().on('pointerdown', () => {
            console.log('level1');
            this.scene.start('level2');
        });

        const stopButton = this.add.image(400, 550, 'button');
        stopButton.scale = 0.1;
        let flag = true;
        stopButton.setInteractive().on('pointerdown', () => {
            flag ? bgm.play() : bgm.stop();
            flag = !flag;
        });
    }
}
