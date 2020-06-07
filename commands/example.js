/*!
 * @plugin bastion-example-plugin
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @license MIT
 */

"use strict";

const tesseract = require("@bastion/tesseract");

class ExampleCommandPlugin extends tesseract.Command {
    constructor() {
        super("example", {
            description: "This is an example command. It logs the Command object, the message that triggered the command, and the argumens passed to this command.",
            triggers: [ "ex", "eg" ],
            arguments: {},
            scope: "guild",
            owner: false,
            typing: false,
            schedulable: true,
            unsafe: false,
            nsfw: false,
            cooldown: 0,
            ratelimit: 1,
            clientPermissions: [],
            userPermissions: [],
            syntax: [],
            condition: () => true,
        });
    }

    exec = async (message, argv) => {
        console.log("COMMAND: ", this);
        console.log("MESSAGE: ", message);
        console.log("ARGUMENTS: ", argv);
    }
}

module.exports = ExampleCommandPlugin;
