// header
import {IFavourite, IInfoAuthor, ITimeLine} from "./type";

export const INFO_AUTHOR: IInfoAuthor = {
    FACEBOOK: {
        url: 'https://www.facebook.com/profile.php?id=100040320098398',
        icon: '/icons/icon-facebook.svg',
        name: 'Nguyen Ha'
    },
    GITHUB: {
        url: 'https://github.com/garu097', icon: '/icons/icon-github.svg', name: '@garu097'
    },
    GITLAB: {
        url: 'https://gitlab.com/garu097', icon: '/icons/icon-gitlab.svg', name: '@garu097'
    },
    GMAIL: {
        icon: '/icons/icon-envelop.svg', name: 'garu097@gmail.com'
    },
    PHONE: {
        icon: '/icons/icon-phone.svg', name: '+84936520206'
    }
};

export const SIZE_ICON = {
    DEFAULT: {
        height: 40,
        width: 40,
    },
    LARGE: {
        height: 57,
        width: 57,
    }

};

// navbar
export const LIST_ITEM_NAVBAR: any = {HOME: 'Home', SKILL: 'Skill', ABOUT: 'About', CONTACT: 'Contact'};

// introduce
export const TEXT_INTRODUCE_SEQUENCE = ['My name is Ha', 2000, 'I am a developer', 2000, 'Nice to see you', 2000];

export const PARAGRAPH_INTRODUCE = 'A hard worker <br/> who is adaptable and able to learn and<br/> use new technologies with ease. <br/>My main areas of expertise include <br/> Javascript, HTML, CSS and Python.';
// 'I am a full stack developer <br/> My main areas of expertise include <br/> Javascript, Typescript, HTML, CSS, Node.js and Python.';

export const SKILLS = {
    LANGUAGE: {
        HTML: {
            NAME: 'HTML',
            PROGRESS: 100,
        },
        CSS: {
            NAME: 'CSS',
            PROGRESS: 95,
        },
        JAVASCRIPT: {
            NAME: 'Javascript',
            PROGRESS: 100,
        },
        PYTHON: {
            NAME: 'Python',
            PROGRESS: 80,
        },
        SQL: {
            NAME: 'SQL',
            PROGRESS: 80,
        }
    },
    FRAMEWORK: {
        VUEJS: {
            NAME: 'VueJs',
            PROGRESS: 100,
        },
        REACTJS: {
            NAME: 'ReactJs',
            PROGRESS: 80,
        },
        NEXTJS: {
            NAME: 'NextJS',
            PROGRESS: 80,
        },
        DJANGO: {
            NAME: 'Django',
            PROGRESS: 80,
        },
        NESTJS: {
            NAME: 'NestJs',
            PROGRESS: 70,
        }
    }
};

// education
export const LIST_EDUCATION: ITimeLine[] = [{
    title: 'Hanoi University of Science and Technology',
    date: 'September 2016 - April 2021',
    subTitle: 'Bachelor\'s Degree - Telecommunication electronic engineering',
    paragraph: 'Studies included understanding of different algorithms and their implementation in practice.',
    iconURL: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Logo_Hust.png'
},
    {
        title: 'Korean IT School',
        date: 'April 2021 - November 2021',
        subTitle: 'Web',
        paragraph: 'Studies included fundamental programing software. Also an emphasis on algorithm',
        iconURL: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/131303306_189965539427056_2614003248938763863_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hRY0vuVxz0wAX_yQmuW&tn=j4CxX_qJ4TlXOnFb&_nc_ht=scontent.fhan2-1.fna&oh=00_AT-AcP8ozMa8mQDZ4HIXzpLwyRFI2fV_YPBCm_qkmhpKZQ&oe=636D6440'
    }];

export const LIST_EXPERIENCE: ITimeLine[] = [{
    title: 'Tripath',
    date: 'August 2021 - present',
    iconURL: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNFE2REE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--fabfcb5d72113912417b49717a78bfdcc4990a5e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--a364054a300021d6ece7f71365132a9777e89a21/tripath-vietnam-logo.png',
    paragraph: 'Front-end web development works with socket, video call, blockchain,...  emphasis on Nuxt3, Vuejs, Typescript based solutions.'
}];

// favourite

export const FAVOURITE: IFavourite = {
    LEARNING: {
        icon: '/icons/icon-book.svg',
        description: 'Exciting to learn new knowledge and technology to apply to work, not afraid of change'
    },
    GAME: {
        icon: '/icons/icon-gamepad.svg',
        description: 'Good choice for relax with my friends after hard work day, where i stay true to myself <br/> You can find me <a href="https://steamcommunity.com/id/garu097" target="_blank" class="underline italic"> here </a>',
    },
    TRAVEL: {
        icon: '/icons/icon-umbrella-beach.svg',
        description: 'Traveling introduces me to new cultures, new knowledge and cutting down on stress'
    }
};



