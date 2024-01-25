import Phaser from "phaser";
export default class Level3 extends Phaser.Scene {
    constructor() {
        super({
            key: 'level3'
        });
    }

    create() {
        this.add.text(400, 100, 'Level 3', {
            fontSize: 40,
            color: 'red'
        }).setOrigin(0.5);
    }
}
