/*!
 * @plugin bastion-example-plugin
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @license MIT
 */

"use strict";

const tesseract = require("@bastion/tesseract");

class ExampleListenerPlugin extends tesseract.Listener {
    constructor() {
        // This will listen to the `message` event - https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
        // Refer https://bastion.gitbook.io/docs/plugins#supported-events for all supported events.
        super("message");
    }

    exec = async (message) => {
        console.log(message);
    }
}

module.exports = ExampleListenerPlugin;
