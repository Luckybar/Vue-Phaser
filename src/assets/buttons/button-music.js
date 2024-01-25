import Phaser from 'phaser';
export default class CustomButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.flag = true;
        this.sound = scene.sound;

        this.onText = scene.add.text(0, 0, 'On', {
            fontSize: 32,
            color: '#fff'
        }).setOrigin(0.5)

        this.offText = scene.add.text(0, 0, 'Off', {
            fontSize: 32,
            color: '#fff'
        }).setOrigin(0.5)

        this.offText.visible = false;

        this.background = scene.add.image(0, 0, 'button').setScale(0.1)
        this.add(this.background);
        this.add(this.onText);
        this.add(this.offText);

        this.setSize(this.background.width * 0.1, this.background.height * 0.1)

        this.setInteractive()
            .on('pointerdown', () => {
                console.log('clicked');
                this.flag ? this.playMusic() : this.stopMusic();
                this.flag = !this.flag;
            })
            .on('pointerover', () => {
                this.background.setTint(0xcccccc);
            })
            .on('pointerout', () => {
                this.background.setTint(0xffffff);
            })
    }

    playMusic() {
        this.sound.play('bgm');
        this.onText.visible = true;
        this.offText.visible = false;
    }

    stopMusic() {
        this.sound.stopAll();
        this.onText.visible = false;
        this.offText.visible = true;
    }
}
