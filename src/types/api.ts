export interface ApiSuccessResponse {
  httpStatusCode: number;
  message: string;
  resultType: "SUCCESS";
}

export interface ApiFailResponse {
  httpStatusCode: number;
  message: string;
  resultType: "FAIL";
}
