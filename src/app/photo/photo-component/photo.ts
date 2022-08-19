export interface Photo {
   id: number;
   data: Date;
   url: string;
   description: string;
   allowComments: boolean;
   likes: number;
   comments: number;
   userId: number;

}
