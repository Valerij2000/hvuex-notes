export default {
    state: {
        note: {
            id: 4,
            title: '',
            descr: '',
            
        },

       notes: [
            {   
                id: 1,
                title: 'Java Script',
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea assumenda neque illum, ab impedit ducimus minima, culpa sapiente animi natus excepturi, ratione dolore officia? Porro consectetur temporibus architecto deserunt autem.',
                time: new Date().toLocaleTimeString(),
                checked: false,
            },
            {
                id: 2,
                title: 'Python',
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea assumenda neque illum, ab impedit ducimus minima, culpa sapiente animi natus excepturi, ratione dolore officia? Porro consectetur temporibus architecto deserunt autem.',
                time: new Date().toLocaleTimeString(),
                checked: true,
            },
            {
                id: 3,
                title: 'Ruby',
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea assumenda neque illum, ab impedit ducimus minima, culpa sapiente animi natus excepturi, ratione dolore officia? Porro consectetur temporibus architecto deserunt autem.',
                time: new Date().toLocaleTimeString(),
                checked: false,
            },
       ],

       gallery: [
           'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg', 
           'https://itsecforu.ru/wp-content/uploads/2019/04/recursosprogramadores.png', 
           'https://www.thegravity.agency/wp-content/uploads/2019/03/0_Q8orlqiDox0yJG2g.jpg', 
           'https://info-comp.ru/wp-content/uploads/2019/11/Top_popular_programming_languages_1.jpg',
           'https://курсы-программирования.рус/wp-content/uploads/2019/12/%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D0%BA%D0%BE%D0%B2-2-1.jpg',
           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoHezV5HqATy4rTmmhB8B6IR5cmAQTdM2hFw&usqp=CAU',
           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0hUCb-bx7ZXXid_wQPrmd4dXDTVJyc3m6A&usqp=CAU',
           'https://i.4meahc.com/img/new-next/9/what-is-programming-is-it-same.jpg',
        ],


    },
    mutations: {
        addNote (state, payload) {
            state.notes.unshift(payload);
            console.log(payload)
       },

    }, 
    actions: {
        addNote ({commit}, payload) {
            commit('addNote', payload);
        },

    },
    getters: {
       getNotes (state) {
           return state.notes;
       },
       getNote (state) {
           return state.note;
       },

       getNoteOnly: (state) => (id) => {
        return state.notes.find(product => product.id == id);
    },

    getGalleryImg (state) {
        return state.gallery;
    },
       
    },
}

