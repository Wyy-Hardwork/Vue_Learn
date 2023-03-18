import Chapter from '../pages/Chapter.vue'
import Login from '../pages/Login.vue'
import Books from '../pages/Books.vue'
import Admin from '../pages/Admin.vue'
import BookDetail from '@/pages/BookDetail'
import List from '@/pages/List'
import Search from '@/pages/Search'
import Ndetail from '@/pages/Ndetail'
import Read from '@/pages/Read'
import Echart from '@/components/Echart'
import Edit from '@/components/Edit'
import Favorites from '@/components/Favorites'
export default 
[   
    {
        path:'/',
        redirect:'/books'
    },
    {
        path:'/admin',
        component:Admin,
        children:[{
            path:'/',
            name:'echart',
            component:Echart
        },
        {
            path:'/edit',
            name:'edit',
            component:Edit
        },
        {
            path:'/favorites',
            name:'favorites',
            component:Favorites
        },]
    },
    {
        path:'/list',
        name:'list',
        component:List        
    },
    {
        path:'/read',
        name:'read',
        component:Read        
    },
    {
        path:'/ndetail',
        name:'ndetail',
        component:Ndetail        
    },
    {
        path:'/search',
        name:'search',
        component:Search        
    },
    {
        path:'/bookdetail',
        name:'bookdetail',
        component:BookDetail        
    },
    {
        path:'/books',
        name:'books',
        component:Books
    },
    {
        path:'/chapter',
        name:'chapter',
        component:Chapter
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/',
        redirect:'/chapter'
    }
]