import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../../store/allActivities/activityActions";
import {Activity} from "../../store/allActivities/activityTypes";

import './admin.css'
import 'bootstrap/dist/css/bootstrap.css';

import axios from "axios";
import image2 from "../../images/logo.webp";

const Admin: React.FC = () => {
        const navigate = useNavigate(), dispatch = useDispatch(),
        activityData = useSelector((state: any) => state.loadData);

    useEffect(() => {
        dispatch(fetchActivities());
    }, [dispatch]);

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, activityId: string) => {
        event.preventDefault();
        const response = await axios.delete(`http://localhost:5000/Admin/Control-panel/Activities/Delete/${activityId}`);
        const newData = activityData.filter((activity: { _id: string; }) => activity._id !== activityId);
        dispatch(fetchActivities());
        alert('PORUKA USPJEŠNO OBRISANA!');
    };

    return (
           <div className={"activities-page-main"} style={{ padding: 34, minHeight: '100vh', height: 'max-content'}}>
               <div className="navbar-item navbar-item-image">
                   <img id={"navbar-image"} src={image2} className={"logo-image navbar-logo"} alt="Logo" onClick={() => navigate('/')} />
               </div>
                        <div className={"activities-row1"}>
                            {activityData.map((activity:Activity) => (
                                <div  className={"activity"} key={activity._id}>
                                    <div>
                                        <div className="card card1">
                                            <Link to={`/Admin/Control-panel/Notifications/Delete/${activity._id}`}>
                                                <button onClick={(event) => handleSubmit(event, activity._id)} type="button" className="close" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </Link>
                                            <div className="card-body">
                                                <h5  className="card-title">{activity.name}</h5>
                                                <p className="card-text">{activity.email}</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li  className="list-group-item card2" style={{maxHeight: "150px", overflowY: "scroll"}}>{activity.message}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
    );
};

export default Admin;