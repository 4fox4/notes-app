import { Template } from 'meteor/templating';

import { Notes } from '../api/notes.js';

import './body.html';

Template.body.helpers({
  notes() {
    return Notes.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
  'submit .new-note'(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    const colors = [
      'background-color:#fabeb9',
      'background-color:#a7e1c4',
      'background-color:#add8f7',
      'background-color:#fcb8d3',
      'background-color:#fccca7',
      'background-color:#cfcaf6',
      'background-color:#ffe9a7',
      'background-color:#a7dfe3',
    ];
    const color = colors[Math.floor(Math.random() * 7)];

    console.log(color);

    Notes.insert({
      text,
      color: color,
      createdAt: new Date(),
    });

    target.text.value = '';
  },
});
