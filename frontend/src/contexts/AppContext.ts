import { Children } from "react";

type ToastMessage={
    message:string;
    type:"SuCCESS" | "Error";
}
type AppContext={
    showToast:(toastMesssage:ToastMessage)=>void;

}
const AppContext React.creatContext<AppContext | undefined>(undefined);

export const AppContextProvider=({children ,
}:{
    children:React.ReatNode;
    
}
)