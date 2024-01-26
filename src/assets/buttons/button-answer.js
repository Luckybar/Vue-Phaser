import Phaser from 'phaser';
export default class CustomButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y, background, dom, targetCallback) {
        super(scene, x, y);

        this.background = scene.add.image(0, 0, background).setScale(0.2, 0.4)
        this.domContent = scene.add.dom(-10, 0).createFromHTML(dom).setScale(0.7);


        this.add(this.background);
        this.add(this.domContent);

        this.setSize(this.domContent.width, this.domContent.height)
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
