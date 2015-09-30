import AjaxError from '../utils/ajaxError';

export default function clientMiddleware(client){
    return ({dispatch, getState}) => {
        return next => action => {

            if(typeof action === 'function'){
                return action(dispatch, getState);
            }

            if(!action.promise){
                return next(action);
            }

            const [REQUEST, SUCCESS, FAILURE] = action.types;
            next({...action, type: REQUEST});
            return action.promise(client).then(
                result => next({...action, type: SUCCESS, result}),
                error => next({...action, type: FAILURE, error})
            );
        }
    }
}
