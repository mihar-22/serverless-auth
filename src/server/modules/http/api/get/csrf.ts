import { Request } from '../../../../modules/http/Request';
import { Response } from '../../../../modules/http/Response';

export default (req: Request, res: Response) => {
  // GET -> /csrf

  // call createCsrfToken on auth manager
  // return response cookie
};