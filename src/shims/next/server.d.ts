declare module 'next/server' {
  export class NextResponse extends Response {
    static json(data: any, init?: ResponseInit): Response;
    static redirect(url: string, status?: number): Response;
  }
  export type NextRequest = Request;
}
