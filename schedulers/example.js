/*!
 * @plugin bastion-example-plugin
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @license MIT
 */

"use strict";

const tesseract = require("@bastion/tesseract");

class ExampleSchedulerPlugin extends tesseract.Scheduler {
    constructor() {
        super("example", {
            // this is scheduled to run every day
            cronTime: "0 0 0 * * *",
        });
    }

    exec = async () => {
        console.log("Today is " + new Date().toDateString());
    }
}

module.exports = ExampleSchedulerPlugin;
