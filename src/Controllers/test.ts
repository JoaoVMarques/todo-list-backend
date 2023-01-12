import { Request, Response, NextFunction } from 'express'

class test {
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async create() {
    return this.res.status(200).json({ mensagem: "Olá mundo" })
  }
}

export default test