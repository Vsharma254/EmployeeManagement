import 'rxjs';
import { Observable } from 'rxjs/observable'
export class testRxJsService {
    public observableTest: Observable<string>;
    let obserber;
    constructor()
    {
        this.observableTest=Observable.create()
    }
    setValueInObseravable()
    {

    }

}