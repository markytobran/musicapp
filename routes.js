import Home from './components/Home.vue';
import Discover from './components/Discover.vue';
import Search from './components/Search.vue';
import Likes from './components/Likes.vue';
import Pop from './components/playlist/Pop.vue';
import Rap from './components/playlist/Rap.vue';
import Rock from './components/playlist/Rock.vue';
import Dance from './components/playlist/Dance.vue';
import Randb from './components/playlist/Randb.vue';
import Alternative from './components/playlist/Alternative.vue';
import Reggae from './components/playlist/Reggae.vue';
import Jazz from './components/playlist/Jazz.vue';
import Classical from './components/playlist/Classical.vue';
import UnderConst from './components/UnderConst.vue';


export const routes = [
    { path: '', component: Home },
    {
        path: '/discover', component: Discover, children: [
            { path: '/discover/pop', component: Pop },
            { path: '/discover/rap', component: Rap },
            { path: '/discover/rock', component: Rock },
            { path: '/discover/dance', component: Dance },
            { path: '/discover/randb', component: Randb },
            { path: '/discover/alternative', component: Alternative },
            { path: '/discover/reggae', component: Reggae },
            { path: '/discover/jazz', component: Jazz },
            { path: '/discover/classical', component: Classical },
        ]
    },
    { path: '/search', component: Search },
    { path: '/likes', component: Likes },
    { path: '/premium', component: UnderConst },
    { path: '/settings', component: UnderConst },
    { path: '/app', component: UnderConst },
];