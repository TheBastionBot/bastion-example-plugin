/*!
 * @plugin bastion-example-plugin
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @license MIT
 */

"use strict";

const tesseract = require("@bastion/tesseract");

class ExampleInterruptPlugin extends tesseract.Interrupt {
    constructor() {
        super("example", {
            // Type of the interrupter
            // 0 - Interrupts `message` and `messgeUpdate` events. The event processing will be interrupted at the first encounter of this interrupter.
            // 1 - Interrupts `message` and `messgeUpdate` events. The event processing will be interrupted only after all interrupters of this type are evaluated and at least one of them evaluates to true.
            // 2 - Interrupts `message` event. The event processing will be interrupted at the first encounter of this interrupter.
            // 3 - Interrupts `message` event. The event processing will be interrupted only after all interrupters of this type are evaluated and at least one of them evaluates to true.
            type: 0,
        });
    }

    /**
     * @param {Message} message Discord.js Message object - https://bastion.gitbook.io/docs/plugins#supported-events for all supported events.
     * @returns {boolean} If a truthy value is returned, it signals the event handler to interrupt further processing.
     */
    exec = async (message) => {
        console.log(message);
    }
}

module.exports = ExampleInterruptPlugin;
