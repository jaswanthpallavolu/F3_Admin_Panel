import { useMyContext } from './context/context'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest }) {
    const { secure } = useMyContext()
    const { currentUser } = secure
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser?.email ? <Component {...props} /> : <Redirect to='/login' />
            }}
        >

        </Route>

    )
}
