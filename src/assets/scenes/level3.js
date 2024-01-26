import Phaser from "phaser";
import BlueButton from "@/assets/buttons/button-blue.js";
export default class Level3 extends Phaser.Scene {
    constructor() {
        super({
            key: 'level3'
        });
    }

    preload () {
        this.load.html('pageHtml', 'html/page.html')
    }

    create() {
        this.add.text(400, 100, 'Level 3', {
            fontSize: 40,
            color: 'red'
        }).setOrigin(0.5);

        // this.add.dom(400, 200, 'div', 'background-color: lime;font: 48px Arial; padding: 5px 10px', 'Phaser').setOrigin(0.5);
        const changeLevelBtn = new BlueButton(this, 200 , 150, 'button', 'level4', () => {
            this.scene.start('level4');
        })
        this.add.existing(changeLevelBtn)

        this.element = this.add.dom(400, 200).createFromCache('pageHtml').setOrigin(0.5);
        const questionFrame = this.element.getChildByID('display-container');
        if (!questionFrame) return;
        const clientAPI = questionClientAPI
        const qIframe = clientAPI.create('fb4c2ce21e494f9c95378c75d4820fe4', { url: '//item.ehanlin.com.tw' })
        questionFrame.innerHTML = ''
        questionFrame.appendChild(qIframe)
        clientAPI.ready(qIframe).then((initFrame) => {
            return initFrame()
        }).then(() => {
            clientAPI.autoSize(qIframe, true)
        })
    }
}
