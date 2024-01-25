import Phaser from 'phaser';
import BlueButton from '@/assets/buttons/button-blue.js';
import MusicButton from '@/assets/buttons/button-music.js';
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

        this.add.text(400, 100, 'Level 1', {
            fontSize: 40,
            color: 'red'
        }).setOrigin(0.5);

        const changeLevelBtn = new BlueButton(this, 200 , 550, 'button', 'level2', () => {
            this.scene.start('level2');
        })
        this.add.existing(changeLevelBtn)

        const musicButton = new MusicButton(this, 400, 550);
        this.add.existing(musicButton);

        this.scene.start('level2');
    }
}
