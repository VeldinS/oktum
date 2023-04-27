// activitiesSaga.ts
import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_ACTIVITIES } from "./activityTypes";
import { setActivityData } from "./activityActions";

function* fetchActivities() {
    try {
        // @ts-ignore
        const response = yield call(fetch,  "http://localhost:5000/Activities/All");
        // @ts-ignore
        const data = yield response.json();
        yield put(setActivityData(data));
    } catch (error) {
        console.error(error);
    }
}


export function* activitiesSaga() {
    yield takeLatest(FETCH_ACTIVITIES, fetchActivities);
}