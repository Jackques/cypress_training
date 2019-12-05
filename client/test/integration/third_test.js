describe('Third test', function () {

  it('test', function () {
    cy.server();
    cy.route(
      {
        url: '/songs',
        method: 'GET',
        response: [{
          "id": 1,
          "title": "Never2mind",
          "artist": "Nirvana",
          "genre": "Alternative Rock",
          "album": "Nevermind",
          "albumImageUrl": "https://is3-ssl.mzstatic.com/image/thumb/Features/d0/cc/62/dj.nanioukp.jpg/268x0w.jpg",
          "youtubeId": "m-ofL_3EZyE",
          "lyrics": "",
          "tab": "",
          "createdAt": "2018-02-13T12:56:24.432Z",
          "updatedAt": "2018-02-13T12:56:24.432Z"
        }, {
          "id": 2,
          "title": "In the blood",
          "artist": "John Mayer",
          "genre": "Acoustic Rock",
          "album": "The Search for Everything",
          "albumImageUrl": "https://images.genius.com/a64eea0c361b6b02f4b7423adf80bb6e.1000x992x1.jpg",
          "youtubeId": "ob-jS7bqYgI",
          "lyrics": "",
          "tab": "",
          "createdAt": "2018-02-13T12:56:24.432Z",
          "updatedAt": "2018-02-13T12:56:24.432Z"
        }, {
          "id": 3,
          "title": "Drop it",
          "artist": "3 Steps Ahead",
          "genre": "Hardcore",
          "album": "Drop it",
          "albumImageUrl": "https://img.discogs.com/H7zIgOQXI5e7yXB5---U5n1kOXc=/fit-in/303x301/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-17264-1133778698.jpeg.jpg",
          "youtubeId": "KB09paeV_aE",
          "lyrics": "",
          "tab": "",
          "createdAt": "2018-02-13T12:56:24.432Z",
          "updatedAt": "2018-02-13T12:56:24.432Z"
        }, {
          "id": 4,
          "title": "I Ain't Goin' Out Like That",
          "artist": "Cypress Hill",
          "genre": "Rap",
          "album": "Black Sunday",
          "albumImageUrl": "https://upload.wikimedia.org/wikipedia/en/b/ba/Cypress_Hill-Black_Sunday.jpg",
          "youtubeId": "q7p-ihYOG5s",
          "lyrics": "",
          "tab": "",
          "createdAt": "2018-02-13T12:56:24.432Z",
          "updatedAt": "2018-02-13T12:56:24.432Z"
        }, {
          "id": 5,
          "title": "Way of Life",
          "artist": "Cypress Spring",
          "genre": "Southern Rock",
          "album": "Denim XXL",
          "albumImageUrl": "http://averagejoesent.com/wp-content/uploads/sites/4/2017/08/CS_DenimXXL_WOLdeluxe-FINAL-COVER.jpg",
          "youtubeId": "ZcOYhHDTO28",
          "lyrics": "",
          "tab": "",
          "createdAt": "2018-02-13T12:56:24.432Z",
          "updatedAt": "2018-02-13T12:56:24.432Z"
        }, {
          "id": 6,
          "title": "No bullets fly",
          "artist": "Sabaton",
          "genre": "Heavy Metal",
          "album": "Heroes",
          "albumImageUrl": "https://upload.wikimedia.org/wikipedia/en/f/f9/Sabaton_Alblem_cover.jpg",
          "youtubeId": "123",
          "lyrics": "From down below an enemy spotted...",
          "tab": "what?",
          "createdAt": "2019-12-04T10:47:01.236Z",
          "updatedAt": "2019-12-04T10:47:01.236Z"
        }, {
          "id": 7,
          "title": "No bullets fly",
          "artist": "Sabaton",
          "genre": "Heavy Metal",
          "album": "Heroes",
          "albumImageUrl": "https://upload.wikimedia.org/wikipedia/en/f/f9/Sabaton_Alblem_cover.jpg",
          "youtubeId": "123",
          "lyrics": "From down below an enemy spotted...",
          "tab": "what?",
          "createdAt": "2019-12-04T10:51:11.272Z",
          "updatedAt": "2019-12-04T10:51:11.272Z"
        }, {
          "id": 8,
          "title": "No bullets fly",
          "artist": "Sabaton",
          "genre": "Heavy Metal",
          "album": "Heroes",
          "albumImageUrl": "https://upload.wikimedia.org/wikipedia/en/f/f9/Sabaton_Alblem_cover.jpg",
          "youtubeId": "123",
          "lyrics": "From down below an enemy spotted...",
          "tab": "what?",
          "createdAt": "2019-12-04T10:57:00.501Z",
          "updatedAt": "2019-12-04T10:57:00.501Z"
        }, {
          "id": 9,
          "title": "No Bullets Fly",
          "artist": "Sabaton",
          "genre": "Heavy Metal",
          "album": "Heroes",
          "albumImageUrl": "https://upload.wikimedia.org/wikipedia/en/f/f9/Sabaton_Alblem_cover.jpg",
          "youtubeId": "123",
          "lyrics": "From down below an enemy spotted...",
          "tab": "what?",
          "createdAt": "2019-12-04T10:58:08.918Z",
          "updatedAt": "2019-12-04T10:58:08.918Z"
        }, {
          "id": 10,
          "title": "No Bullets Fly",
          "artist": "Sabaton",
          "genre": "Heavy Metal",
          "album": "Heroes",
          "albumImageUrl": "https://upload.wikimedia.org/wikipedia/en/f/f9/Sabaton_Alblem_cover.jpg",
          "youtubeId": "123",
          "lyrics": "From down below an enemy spotted...",
          "tab": "what?",
          "createdAt": "2019-12-04T11:07:53.715Z",
          "updatedAt": "2019-12-04T11:07:53.715Z"
        }]
      });
    cy.visit('http://localhost:8080/')
    .debug()
  });

});
