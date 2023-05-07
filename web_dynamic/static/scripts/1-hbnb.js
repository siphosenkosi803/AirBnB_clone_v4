// js script that 
// executes only when DOM is loaded
// uses JQuery
// Listens for changes on each input checkbox tag:
// if the checkbox is checked, you must store the Amenity ID in a variable (dictionary or list)
// if the checkbox is unchecked, you must remove the Amenity ID from the variable
// update the h4 tag inside the div Amenities with the list of Amenities checked
$('document').ready(function () {
  const amenities = {};
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    let amenitiesList = Object.values(amenities);
    if (amenitiesList.length > 0) {
      $('.amenities H4').text(amenitiesList.join(', '));
    } else {
      $('.amenities H4').html('&nbsp;');
    }
  });
});

