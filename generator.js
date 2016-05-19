(function(window, $) {

  // Lyrics data
  var lyrics = {};

  // Generate a random integer from min (inclusive) to max (exclusive)
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Get a random lyric from the data
  function getRandomLyric(field) {
    options = lyrics[field];
    length = options.length;
    index = randomInteger(0, length);
    return options[index];
  }

  // Update lyrics on the page
  function applyLyrics(person, verb, noun, place) {
    $('#person').text(person);
    $('#verb').text(verb);
    $('#noun').text(noun);
    $('#place').text(place);
  }

  // Assemble random lyrics into a verse
  function generateVerse() {
    var person = getRandomLyric('people');
    var verb = getRandomLyric('verbs');
    var noun = getRandomLyric('nouns');
    var place = getRandomLyric('places');
    applyLyrics(person, verb, noun, place);
  }

  // Click handler for the generate button
  $('#generate').on('click', generateVerse);

  // Get the lyrics data
  $.getJSON('./lyrics.json')
    .done(function(json) {
      console.log(json);
      lyrics = json;
      generateVerse();
      $('#lyrics').show();
    })
    .fail(function(error) {
      console.error(error);
    });

})(window, jQuery);
