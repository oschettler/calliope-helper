/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/*
Alexa starte Calliope Helfer
Alexa frage Callope Helfer nach den Lämpchen
Alexa frage Calliope Helfer nach Projektideen

InfoIntent Was ist das Calliope Mini
PartsIntent Welche Bauteile sind auf der Platine
PartsIntent Was macht die {Part}
PartsIntent Was machen die {Part}
PartsIntent Was macht der {Part}
IdeasIntent Gib mir eine Projektidee
*/
'use strict';

const Alexa = require('alexa-sdk');
const Parts = require('./parts');
const Ideas = require('./ideas');
const CALLIOPE = '<phoneme alphabet="ipa" ph="kalɪo:pɛ">Calliope</phoneme>';

function pronounce(text) {
    return text.replace(/Calliope/, CALLIOPE);
}

const handlers = {
    'LaunchRequest': function () {
        this.emit('WelcomeIntent');
    },

    'WelcomeIntent': function () {
        this.emit(':ask', pronounce('Willkommen bei deinem Calliope Helfer.'));
    },

    'InfoIntent': function () {
        this.emit(':tell', pronounce('Mit dem Calliope mini kannst du die digitale Welt mit gestalten. Der mini soll umsonst an alle Grundschülerinnen und Grundschüler der dritten Klasse verteilt werden.'));
    },

    'PartsIntent': function () {
        const part = this.event.request.intent.slots.Part;

        if (part && Parts.parts[part.value]) {
            this.emit(':tell', pronounce(Parts.parts[part.value.toLowerCase()]));
        }
        else {
            this.emit(':tell', pronounce('Auf der Platine des Calliope mini findest du Lämpchen, Knöpfe, Sensoren, Ecken, USB, Bluetooth, Lautsprecher, Mikrofon, Prozessor, Grove-Connectoren und zwei Motor-Anschlüsse.'));
        }
    },

    'IdeasIntent': function () {
        const index = Math.floor(Math.random() * Ideas.ideas.length);
        const idea = Ideas.ideas[index];
        this.emit(':tell', 'Eine Projektidee: ' + pronounce(idea));
    },

    'AMAZON.HelpIntent': function () {
        this.emit(':tell', pronounce('Du kannst dich über das Calliope mini informieren, die Bauteile auf der Platine kennenlernen oder dir Projektideen geben lassen.'));
    },

    'AMAZON.StopIntent': function () {
        this.emit(':tell', pronounce('Tschüß und viel Spass mit deinem Calliope mini!'));
    },

    'AMAZON.CancelIntent': function () {
        this.emit(':ask', 'OK, genug davon.');
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
