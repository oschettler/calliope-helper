var Alexa = require('alexa-sdk');

    exports.handler = function(event, context, callback) {
        var alexa = Alexa.handler(event, context);
        alexa.registerHandlers(handlers);
        alexa.execute();
    };

    var handlers = {
        'LaunchRequest': function () {
            this.emit('WelcomeIntent');
        },

        'WelcomeIntent': function () {
            this.emit(':tell', 'Willkommen bei deinem Calliope Helfer.');
        },

        'InfoIntent': function () {
            this.emit(':tell', 'Mit dem Calliope mini kannst du die digitale Welt mit gestalten. Der mini soll umsonst an alle Grundschülerinnen und Grundschüler der dritten Klasse verteilt werden.');
        },

        'PartsIntent': function () {
            this.emit(':tell', 'Auf der Platine des Calliope mini  findest du Lämpchen, Knöpfe, Sensoren, Ecken, USB, Bluetooth, Lautsprecher, Mikrofon, Prozessor, Grove-Connectoren und zwei Motor-Anschlüsse');
        },

        'IdeasIntent': function () {
            this.emit(':tell', 'Willkommen im Calliope Helfer!');
        },

        'AMAZON.HelpIntent': function () {
            this.emit(':tell', 'Du kannst dich über das Calliope mini informieren, die Bauteile auf der Platine kennenlernen oder dir Projektideen geben lassen.');
        },

        'AMAZON.StopIntent': function () {
            this.emit(':tell', 'Tschüß und viel Spass mit deinem Calliope mini!');
        },

        'AMAZON.CancelIntent': function () {
            this.emit(':ask', 'OK, genug davon.');
        }
    };
