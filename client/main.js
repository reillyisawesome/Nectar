currentSearch = new Mongo.Collection("currentsearch");

Meteor.subscribe('movies');
Meteor.subscribe('tv');
Meteor.subscribe('settings');
Meteor.subscribe('version');
Meteor.subscribe('weeklylimit');

Session.set('searchType', '');

Router.configure({
    notFoundTemplate: "NotFound"
});

Router.route('/', function () {
    this.render('index');
});

Router.route('/couchpotato', function () {
    this.render('couchpotato');
});

Router.route('/plex', function () {
    this.render('plex');
});

Router.route('/sickrage', function () {
    this.render('sickrage');
});

Router.route('/sonarr', {
    name: 'sonarr'
});

Router.route('/about', {
    name: 'about'
});

Router.route('/settings', {
    name: 'settings'
});

//Router.route('/status', {
   // name: 'status'
//});

Router.route('/requests', {
    name: 'home'
});

Router.route('/getstarted', {
    name: 'started'
});


Template.body.helpers({
    url: function () {
    return Meteor.absoluteUrl();
    }
});

Houston.menu({
    'type': 'link',
    'use': '/about',
    'title': 'About',
    'target': '_blank'
});

Houston.menu({
    'type': 'link',
    'use': '/plex',
    'title': 'Plex Auth Setup',
    'target': '_blank'
});

Houston.menu({
    'type': 'link',
    'use': '/couchpotato',
    'title': 'CouchPotato Status',
    'target': '_blank'
});

Houston.menu({
    'type': 'link',
    'use': '/sickrage',
    'title': 'SickRage Status',
    'target': '_blank'
});

Houston.menu({
    'type': 'link',
    'use': '/sonarr',
    'title': 'Sonarr Status',
    'target': '_blank'
});

Houston.menu({
    'type': 'link',
    'use': 'http://plexrequests.8bits.ca',
    'title': 'Project Site',
    'target': '_blank'
});
