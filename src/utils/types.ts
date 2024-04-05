export interface Response<T = unknown> {
  code: number;
  message: string;
  result: T;
  status: number;
}

export interface Seminar {
  seminarId: number;
  seminarNo: string;
  seminarName: string;
  clientCompId: number;
  clientUser: number;
  partnerUser: number;
  townType: string;
  venueId: string;
  seminarStatus: string;
  estimatePeople: number;
  estimateAmount: number;
  startAt: string;
  endAt: string;
}

export type SignInForm = {
  id: string;
  pw: string;
};
