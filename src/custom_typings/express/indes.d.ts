// declare global {
//   namespace Express {
//     interface Request {
//     }
//   }
// }

declare namespace Express {
  interface Request {
    _startTime: string;
    _remoteAddress: string;
  }
}
