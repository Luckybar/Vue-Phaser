import Phaser from "phaser";
import BlueButton from "@/assets/buttons/button-blue.js";
import AnsButton from "@/assets/buttons/button-answer.js";
export default class Level3 extends Phaser.Scene {
    constructor() {
        super({
            key: 'level4',
        });
    }
    create() {
        this.cameras.main.setBackgroundColor('#ffffff')
        this.add.text(400, 100, 'Level 4', {
            fontSize: 40,
            color: 'red'
        }).setOrigin(0.5);

        this.getQuestion().then((data) => {
            let questionHtml = data.content.questions[0].stem
            // font css url
            let html = ''
            const fontscss = `<link rel="stylesheet" href="/css/font.css">`
            html += fontscss
            html += questionHtml

            // this.add.dom(400, 300).createFromHTML(html).setOrigin(0.5);

            const answerButton = new AnsButton(this, 400, 400, 'button', html, () => {
                window.alert('你答對了')
            })
            this.add.existing(answerButton)
        })

        const changeLevelBtn = new BlueButton(this, 400 , 550, 'button', 'level3', () => {
            this.scene.start('level3');
        })
        this.add.existing(changeLevelBtn)
    }

    getQuestion() {
        return fetch('https://itembank.s3-ap-southeast-1.amazonaws.com/v1/items/fb4c2ce21e494f9c95378c75d4820fe4/item.json', {
            method: 'GET',
        }).then((response) => {
            return response.json()
        })
    }
}
