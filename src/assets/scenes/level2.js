import Phaser from "phaser";
import BlueButton from "@/assets/buttons/button-blue.js";
export default class Level2 extends Phaser.Scene {
    constructor() {
        super({
            key: 'level2'
        });
        this.teamACount = 0
        this.teamBCount = 0
    }

    create() {
        const teamACountText = this.add.text(200, 75, this.teamACount, {
            fontSize: 40,
            color: 'red'
        }).setOrigin(0.5);

        const teamBCountText = this.add.text(600, 75, this.teamBCount, {
            fontSize: 40,
            color: 'green'
        }).setOrigin(0.5);

        const teamACountBtn = new BlueButton(this, 200 , 550, 'button', 'Add', () => {
            this.teamACount += 1
            teamACountText.setText(this.teamACount)
        })
        const changeLevelBtn = new BlueButton(this, 400 , 550, 'button', 'level3', () => {
            this.scene.start('level3');
        })
        const teamBCountBtn = new BlueButton(this, 600 , 550, 'button', 'Add', () => {
            this.teamBCount += 1
            teamBCountText.setText(this.teamBCount)
        })

        this.add.existing(teamACountBtn)
        this.add.existing(changeLevelBtn)
        this.add.existing(teamBCountBtn)

        this.scene.start('level3');
    }
}
