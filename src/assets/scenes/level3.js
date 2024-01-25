import Phaser from "phaser";
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

        this.element = this.add.dom(400, 200).createFromCache('pageHtml').setOrigin(0.5);
        const questionFrame = this.element.getChildByID('display-container');
        if (!questionFrame) return;
        const clientAPI = questionClientAPI
        const qIframe = clientAPI.create('ed69816b80b042feb1e0278f12ac24e8', { url: '//item.ehanlin.com.tw' })
        questionFrame.innerHTML = ''
        questionFrame.appendChild(qIframe)
        clientAPI.ready(qIframe).then((initFrame) => {
            return initFrame()
        }).then(() => {
            clientAPI.autoSize(qIframe, true)
        })
    }
}
