import express, {Application} from "express";

import room from './roomRoutes';
import subject from './subjectRoutes';
import video from './videoRoutes';

export default (app: Application) => {
	app.use(express.json(), room, subject, video)
}
