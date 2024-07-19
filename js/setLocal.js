function setValues() {
    setFontAndText('headerTitle', 500);
    setFontAndText('footerTitle', 500);
    setFontAndText('collaboration', 500);
    setFontAndText('subTitleColab', 500);
    setFontAndText('footerLinkTitle', 500);
    setFontAndText('toConnect', 500);
    setFontAndText('address', 500);
    setFontAndText('df', 500);
    // setFontAndText('ministry', 500);
    // setFontAndText('dialog', 500);
    // setFontAndText('dialogF', 500);
    setFontAndText('freeDownload', 500);
    setFontAndText('videoLessons', 500);
    setFontAndText('suitable', 500);
    setFontAndText('totallyFree', 500);
    setFontAndText('noData', 500);
    setFontAndText('visit', 500);
    setFontAndText('nenasaTv', 500);
    setFontAndText('nenasaTv2', 500);
    setFontAndText('nenasaTvD', 500);
    setFontAndText('readMore1', 500);
    setFontAndText('timeSinhala', 500);
    setFontAndText('timeTamil', 500);
    setFontAndText('app', 500);
    setFontAndText('app2', 500);
    setFontAndText('appD', 500,true);
    setFontAndText('n1377', 500);
    setFontAndText('n1377D', 500,true);
    setFontAndText('readMore2', 500);
    setFontAndText('nSmart', 500);
    setFontAndText('nSmart2', 500);
    setFontAndText('nSmartD', 500);
    setFontAndText('readMore3', 500);
    setFontAndText('liveLessonCalendar', 500);
    setFontAndText("timeSinhala-ol", 500, true);
    setFontAndText("timeTamil-ol", 500, true);
    setFontAndText("timeSinhala-al", 500, true);
    setFontAndText("timeTamil-al", 500, true);
    // setFontAndText("timeSinhala-j", 500, true);
    // setFontAndText("timeTamil-j", 500, true);
}

function setFontAndText(name, weight, avoid) {
    const att = $('#' + name)
    att.text(language[name]);
    !avoid && att.css("font-family", localStorage.getItem('locals') === null ? 'Montserrat' :
        localStorage.getItem('locals') === 'si' ? 'FMSamntha' : 'Montserrat');
    (localStorage.getItem('locals') !== null && localStorage.getItem('locals') !== 'en') && att.css("font-weight", weight)
}
