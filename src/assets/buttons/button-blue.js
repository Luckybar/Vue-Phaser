import Phaser from 'phaser';
export default class CustomButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y, background, text, targetCallback) {
        super(scene, x, y);
        this.text = scene.add.text(0, 0, text, {
            fontSize: 32,
            color: '#fff'
        }).setOrigin(0.5)

        this.background = scene.add.image(0, 0, background).setScale(0.1)


        this.add(this.background);
        this.add(this.text);

        this.setSize(this.background.width * 0.1, this.background.height * 0.1)
        this.setInteractive()
            .on('pointerdown', () => {
                if(targetCallback) targetCallback();
            })
            .on('pointerover', () => {
                this.background.setTint(0xcccccc);
            })
            .on('pointerout', () => {
                this.background.setTint(0xffffff);
            })
    }
}
