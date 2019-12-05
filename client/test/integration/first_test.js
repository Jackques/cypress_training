describe('First test', function () {

    // First thing you should do is validate that you are on the right page, do this by checking if the button is visible

    it('should open the main page', function () {
        // Create your test here

        cy.visit('http://localhost:8080/')

            .get('a[href="#/songs/create"]')
            .should('be.visible')

            .get('.song-title')
            .should('contain', 'Nevermind')

            .get('a[href="#/register"]')
            .click()

            .get('input[name="email"]')
            .type('fake@email.com').should('have.value', 'fake@email.com')
            .get('input[name="password"]')
            .type('welkom123').should('have.value', 'welkom123')

            .get('button[name="registerBtn"]')
            .click()

        // .get('.toolbar__items button div.btn__content')
        // .should('contain', 'Log Out')

        cy.wait(2000)

        // cy.get('.toolbar__items').then(($div) => {
        //     //debugger;
        //     if (cy.get('.toolbar__items').contains('Log Out')) {
        //         return true;
        //     } else if (cy.get('.danger-alert').contains('This email account is already in use.')) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // })
        // .get('')
        // .should('contain', 'Log Out')
    });

});

describe.only('Second test', function () {
    let bestSongInTheWorldTitle = 'No Bullets Fly';

    it('should add a song', function () {

        cy.visit('http://localhost:8080/')
            .get('a[href="#/songs/create"]')
            .click()

            .get('#sngTitle')
            .type(bestSongInTheWorldTitle)

            .get('#sngArtist')
            .type('Sabaton')

            .get('#sngGenre')
            .type('Heavy Metal')

            .get('#sngAlbum')
            .type('Heroes')

            .get('#sngAlbumImg')
            .type('https://upload.wikimedia.org/wikipedia/en/f/f9/Sabaton_Alblem_cover.jpg')

            .get('#sngYoutube')
            .type('https://www.youtube.com/watch?v=efxs-Hp0QEw')

            .get('#sngTab')
            .type('what?')

            .get('#sngLyrics')
            .type('From down below an enemy spotted...')

            .get('button#sngBtn')
            .click()

            .get('div.song').last()
            .should('contain', bestSongInTheWorldTitle)
        // .get('main div.elevation > div > div').last()

    });

    it('should edit a song', function () {
        cy.get('div[class="song-title"]').contains(bestSongInTheWorldTitle)
            .parent()
            .get('a[href="#/songs/6"')
            .click()

            //todo: cannot find this button?
            .get('a[href="#/songs/6/edit"]')
            .click()

            .get('label').contains('Tab').parent()
            .get('textarea')
            .type('I still dont know what this means')
            .should('contain', 'I still dont know what this means')


    });
});

// On the Songs page click the + button to create a new Song

//todo:
// Create a song by filling in all the fields, they are all mandatory, click the button and validate that the song is created on the first page.
//     Tip: use the last command because your song will be the last one in the list


