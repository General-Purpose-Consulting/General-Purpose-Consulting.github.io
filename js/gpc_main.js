// Handles javascript for main GPC site
//
/* Discipline randomizer */
//
var disciplines = [
  'Chemistry',
  'Biology',
  'Engineering',
  'Planning',
  'Construction',
  'Science',
  'Music',
  'Programming',
  'Technology'
];

var modifiers = [
  'Rocket',
  'Behavioral',
  'Neurological',
  'Planetary',
  'Botanical',
  'Genetic',
  'Computer'
];

function getRandomDiscipline() {
  var maxDisciplines = disciplines.length;
  var maxModifiers = modifiers.length;

  var disciplineIndex = Math.floor(Math.random() * maxDisciplines);
  var modifierIndex = Math.floor(Math.random() * maxModifiers);

  var modifiedDiscipline = modifiers[modifierIndex] + " " + disciplines[disciplineIndex];

  modifiers.splice(modifierIndex,1);
  disciplines.splice(disciplineIndex,1);

  return modifiedDiscipline;

}

$( document ).ready(function() {

    $(".discipline").each(function() {
      $(this).text(getRandomDiscipline());
    });

});
