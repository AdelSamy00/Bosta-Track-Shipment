export interface Shipment {
  provider: string,
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  CurrentStatus: {state : string, timestamp: string};
  SupportPhoneNumbers: string[];
  TransitEvents: [{state : string, timestamp: string,hub?:string,reason?:string}];
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: [{dayDate:string,dayName:string}];
  isOnlinePaymentFeatureEnabled: boolean;
}