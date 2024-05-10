export {};

/*
*
* A few notes from a distressed user who tried to fix the connector in
* May 2024.
*
*
* Napster has two kind of players in the web interface, the first being
* the "Mini" player which is the default when you open web.napster.com
* and the second which appears when clicking the "Fullscreen" button.
* 
* These two have different classes for getting track listings, below
* are the hashed classes for the track name of a song.
*
* Mini: sc-bqyKOL sc-kGNyvp zmeOk kyToqs
* Fullscreen: sc-fodVek sc-kfzBvY sc-jYCGPb ieyVIW fHDFjX ieprxU
*
* When opening Fullscreen, the Mini player attributes  are not deleted,
* and its contents remain to be updated.
*
* TLDR: Use the Mini Player attributes for this
*
*
* Now, the Mini Player also happens to have human-readable non-hashed
* classes, however they are encased in a "data-testid" attribute, so
* they cannot be used calling a simple "." or "#" tag and require some
* work to read.
*
* A quickly brainstormed solution to deal with this is to write an
* injector to read this attribute's contents, writing/copying them
* to the "class" attribute and then calling it from the connector,
* constantly refreshing the injector so the written class value
* is always the most recent content update.
*
* I have absolutely no idea how to do JS so I'm just writing this incase anyone picks this up
* 
 */

Connector.trackSelector = '#mini-player .mini-player-track-name';
Connector.artistSelector = '#mini-player .mini-player-track-additional-info';
Connector.playButtonSelector = '#mini-player .player-play-pause-button';

