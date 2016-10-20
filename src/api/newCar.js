import {
    fetch,
    apiUrl
} from '../api/api';

export default {
    getNewCarFilter() {
        return fetch(apiUrl.apiBaseUrl + `newCarCases/filters`)
    },
    getNewCarList(searchStrings='i0') {

        return fetch(apiUrl.apiBaseUrl + `newCarCases/s/${searchStrings}?r=${Math.random()}`)
    },
    getNewCarDetails(caseNum) {
        return fetch(apiUrl.apiBaseUrl + `newCarCases/${caseNum}`)
    }
}
