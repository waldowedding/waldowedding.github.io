/**
 * Created by Dillon Kehrwald on 2/21/2016.
 */
pictures = function(m) {
    console.log(this);
    console.log(m);

    var pics,
        mainSrc,
        src,
        imgElem,
        mainDiv;


    console.log(pics);
    mainDiv = document.createElement('div');

    pics = getImgStuff(m);
    mainSrc = ".pics-div";

    for(var i= 0, size=pics.length; i<size; i++) {
        imgElem = document.createElement("img");
        imgElem.setAttribute("src", pics[i].src);
        imgElem.setAttribute("alt", pics[i].words);
        mainDiv.appendChild(imgElem);
    }

    $(mainSrc).prepend(mainDiv);

};

picturesClose = function() {
    $(".pics-div").empty();
};

getImgStuff = function(m) {
    var pics;
    switch(m) {
        case "engage":
            pics =  [
                {
                    src: 'img/us/engage/bean.jpg',
                    words: 'the bean!'
                },{
                    src: 'img/us/engage/knee.jpg',
                    words: 'Proposal'
                },
                {
                    src: 'img/us/engage/ring.jpg',
                    words: 'Aftershock'
                }
            ];
            break;
        case "college":
            pics = [
                {
                    src: 'img/us/college/img1.jpg',
                    words: 'Plaza birthday'
                },
                {
                    src: 'img/us/college/img2.jpg',
                    words: 'College Party!'
                },
                {
                    src: 'img/us/college/img3.jpg',
                    words: 'House Party!'
                },
                {
                    src: 'img/us/college/img4.jpg',
                    words: 'Wedding fun!'
                },
                {
                    src: 'img/us/college/img5.jpg',
                    words: 'Kanza Hall'
                },
                {
                    src: 'img/us/college/img6.jpg',
                    words: 'Nursing Dinner'
                },
                {
                    src: 'img/us/college/img7.jpg',
                    words: 'Dillon\'s 21st Birthday!'
                },
                {
                    src: 'img/us/college/img9.jpg',
                    words: 'Kanza Hall'
                },
                {
                    src: 'img/us/college/img10.jpg',
                    words: 'Sorority formal'
                },
                {
                    src: 'img/us/college/img11.jpg',
                    words: 'Junior Year College'
                },
                {
                    src: 'img/us/college/img12.jpg',
                    words: 'Coreen\'s Graduation'
                },
                {
                    src: 'img/us/college/img13.jpg',
                    words: 'Jason Aldean Concert'
                },
                {
                    src: 'img/us/college/img14.jpg',
                    words: 'Royals Game!'
                },
                {
                    src: 'img/us/college/img15.jpg',
                    words: 'Marissa\'s 20th Birthday!'
                },
                {
                    src: 'img/us/college/img16.jpg',
                    words: 'KU Basketball game'
                },
                {
                    src: 'img/us/college/img17.jpg',
                    words: 'KU football game!'
                },
                {
                    src: 'img/us/college/img18.jpg',
                    words: 'College Party!'
                }
            ];
            break;
        case "recent":
            pics = [
                {
                    src: 'img/us/recent/1.jpg',
                    words: 'Wedding fun'
                },
                {
                    src: 'img/us/recent/2.jpg',
                    words: 'Warrior Dash'
                },
                {
                    src: 'img/us/recent/3.jpg',
                    words: 'Dillon 23 Birthday!'
                },
                {
                    src: 'img/us/recent/4.jpg',
                    words: '4th of July, 2015'
                },
                {
                    src: 'img/us/recent/5.jpg',
                    words: 'Night Out'
                },
                {
                    src: 'img/us/recent/6.jpg',
                    words: 'Annie and James Wedding'
                },
                {
                    src: 'img/us/recent/7.jpg',
                    words: 'Annie and James Wedding'
                },
                {
                    src: 'img/us/recent/8.jpg',
                    words: 'Garth Brooks Concert in Chicago'
                },
                {
                    src: 'img/us/recent/9.jpg',
                    words: 'Night out in Chicago'
                },
                {
                    src: 'img/us/recent/10.jpg',
                    words: 'PBR Big Sky'
                },
                {
                    src: 'img/us/recent/11.jpg',
                    words: 'Frankie Ballard Concert'
                },
                {
                    src: 'img/us/recent/12.jpg',
                    words: '4th of July at Top Golf'
                },
                {
                    src: 'img/us/recent/13.jpg',
                    words: 'Dierks Bentley Concert'
                },
                {
                    src: 'img/us/recent/14.jpg',
                    words: 'Blake and Mckenna Wedding'
                },
                {
                    src: 'img/us/recent/15.jpg',
                    words: 'Christmas 2015'
                },
                {
                    src: 'img/us/recent/16.jpg',
                    words: 'Marissa\'s work Christmas party'
                }
            ];
            break;
        case "vacations":
            pics = [
                {
                    src: 'img/us/vacations/1.jpg',
                    words: 'Garth Brooks in Las Vegas, 2011'
                },
                {
                    src: 'img/us/vacations/2.jpg',
                    words: 'The Bellagio'
                },
                {
                    src: 'img/us/vacations/3.jpg',
                    words: 'Vegas 2011'
                },
                {
                    src: 'img/us/recent/4.jpg',
                    words: 'Puerto Vallarta 2011'
                },
                {
                    src: 'img/us/vacations/5.jpg',
                    words: 'Cayman Island 2013'
                },
                {
                    src: 'img/us/vacations/6.jpg',
                    words: 'Cabo 2012'
                },
                {
                    src: 'img/us/vacations/7.jpg',
                    words: 'Cabo 2012'
                },
                {
                    src: 'img/us/vacations/8.jpg',
                    words: 'Cabo 2012'
                },
                {
                    src: 'img/us/vacations/9.jpg',
                    words: 'Cabo 2012'
                },
                {
                    src: 'img/us/vacations/10.jpg',
                    words: 'Chicago 2012'
                },
                {
                    src: 'img/us/vacations/11.jpg',
                    words: 'Cayman 2013'
                },
                {
                    src: 'img/us/vacations/12.jpg',
                    words: 'Sting-ray City, Grand Cayman 2012'
                },
                {
                    src: 'img/us/vacations/13.jpg',
                    words: 'The Bean 2012'
                },
                {
                    src: 'img/us/vacations/14.jpg',
                    words: 'Grand Cayman 2012'
                },
                {
                    src: 'img/us/vacations/15.jpg',
                    words: 'Grand Cayman 2012'
                },
                {
                    src: 'img/us/vacations/16.jpg',
                    words: 'Grand Cayman 2013'
                },
                {
                    src: 'img/us/vacations/17.jpg',
                    words: 'Grand Cayman 2013'
                },
                {
                    src: 'img/us/vacations/18.jpg',
                    words: 'Grand Cayman 2013'
                },
                {
                    src: 'img/us/vacations/19.jpg',
                    words: 'Grand Cayman 2013'
                },
                {
                    src: 'img/us/vacations/20.jpg',
                    words: 'Breckenridge 2013'
                },
                {
                    src: 'img/us/vacations/21.jpg',
                    words: 'Cabo 2015'
                },
                {
                    src: 'img/us/vacations/22.jpg',
                    words: 'Cabo 2015'
                },
                {
                    src: 'img/us/vacations/23.jpg',
                    words: 'Keystone 2016'
                }
            ];
            break;
        case "hs":
            pics = [
                {
                    src: 'img/us/hs/5.jpg',
                    words: 'Junior Prom'
                },
                {
                    src: 'img/us/hs/6.jpg',
                    words: 'Senior Homecoming'
                },
                {
                    src: 'img/us/hs/1.jpg',
                    words: 'CheerBall 2009'
                },
                {
                    src: 'img/us/hs/4.jpg',
                    words: 'Senior Prom'
                },
                {
                    src: 'img/us/hs/2.jpg',
                    words: 'Senior Mass'
                },
                {
                    src: 'img/us/hs/3.jpg',
                    words: 'Graduation'
                },
                {
                    src: 'img/us/hs/early.jpg',
                    words: 'Bahama\'s Cruise'
                }
            ];
            break;
    }
    return pics;
};

getSrc = function(m) {
    var mainSrc;
    switch(m) {
        case "engage":
            mainSrc = ".engage-pics";
            break;
        case "college":
            mainSrc = ".college-pics";
            break;
        case "recent":
            mainSrc = ".recent-pics";
            break;
        case "vacations":
            mainSrc = ".vacations-pics";
            break;
        case "hs":
            mainSrc = ".hs-pics";
            break;
    }
    return mainSrc;
};