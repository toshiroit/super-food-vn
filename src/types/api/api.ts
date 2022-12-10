export type CreateRequest = {
  method:
    | "GET"
    | "POST"
    | "PUT"
    | "DELETE"
    | "OPTIONS"
    | "PATCH"
    | "COPY"
    | "HEAD"
    | "LINK"
    | "UNLINK";
  url: string;
  body?: any;
  isAuthRequired: boolean;
  contentType:
    | "multipart/form-data"
    | "application/json"
    | "text/json"
    | "text/plain"
    | "text/html"
    | "application/xml";
  authorization: string;
};
