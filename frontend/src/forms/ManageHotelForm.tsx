import { FormProvider, useForm } from "react-hook-form";

export type HotelFormdata={
    name:string;
    city:string;
    country:string;
    description:string;
    type:string;
    princePerNight:string;
    starRating:string;
    facilities:string[];
    imageFiles:FileList;
    adultCount:number;
    childCount:number;

}
function ManageHotelForm() {
  const formMethod=useForm<HotelFormdata>();

    return (
        <FormProvider>
<form>

</form>
        </FormProvider>
   
  )
}

export default ManageHotelForm
