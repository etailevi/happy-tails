import { Home } from "./views/Home"
import { About } from "./views/About"
import { LoginSignup } from "./views/LoginSignup";
import { VetIndex } from "./views/vet/VetIndex";
import { VetDetails } from "./views/vet/VetDetails";


const routes = [
    {
        path: '/',
        component: <Home />,
        label: 'Home'
    },
    {
        path: '/login',
        component: <LoginSignup />,
        label: 'Login'
    },
    {
        path: '/vet',
        component: <VetIndex />,
        label: 'Vets',
    },
    {
        path: '/vet/:vetId',
        component: <VetDetails />,
        label: 'Vet Details',
    },
    {
        path: '/about',
        component: <About />,
        label: 'About'
    },
]

export default routes