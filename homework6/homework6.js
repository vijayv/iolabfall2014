var homework = document.getElementsByType("http://milowski.com/syllabus/Homework")

for (i = 0; i < Object.keys(homework).length; i++) {
    title = document.data.getValues(homework[i].data.id, "http://milowski.com/syllabus/title")
    due = document.data.getValues(homework[i].data.id, "http://milowski.com/syllabus/due")
    console.log('Title: ' + title + ' Due: ' + due)
}

var presentation = document.getElementsByType("http://milowski.com/syllabus/Presentation")

for (i = 0; i < Object.keys(presentation).length; i++) {
    title = document.data.getValues(presentation[i].data.id, "http://milowski.com/syllabus/title")
    due = document.data.getValues(presentation[i].data.id, "http://milowski.com/syllabus/due")
    console.log('Title: ' + title + ' Due: ' + due)
}

/*

for (i = 0; i < Object.keys(homework).length; i++) {
    title = document.data.getValues(homework[i].data.id, "http://milowski.com/syllabus/title")
    due = document.data.getValues(homework[i].data.id, "http://milowski.com/syllabus/due")
    console.log('Title: ' + title + ' Due: ' + due)
}
Title:  Get Setup! Due: 09-04
Title: Back to the Future with CSS3 Due: 09-11
Title: Scripting - To do? Or not TO DO?! Due: 09-25
Title: Accessing USGS Earthquake Data Due: 10-02
Title: Mapping Earthquakes Due: 10-09
Title: Triples in a Haystack Due: 10-30
*/


/*

for (i = 0; i < Object.keys(presentation).length; i++) {
    title = document.data.getValues(presentation[i].data.id, "http://milowski.com/syllabus/title")
    due = document.data.getValues(presentation[i].data.id, "http://milowski.com/syllabus/due")
    console.log('Title: ' + title + ' Due: ' + due)
}
Title: Your Pitches (P1) Due: 09-16
Title: Your Pitches (P1) Due: 09-18
Title: Your Pitches (P1) Due: 09-16
Title: Mockup (P2) Due: 10-09
Title: Information Design (P3) Due: 10-30
Title: Implementation Updates (P4) and Fire Fighting Due: 11-25

*/
