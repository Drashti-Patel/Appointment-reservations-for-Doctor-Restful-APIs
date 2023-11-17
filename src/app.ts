import { port } from './config/vars';
import app from './config/express';

// listen to requests
app.listen(port, () => console.log(`server started on port ${port}`));

export default app;
