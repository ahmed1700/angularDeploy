import { AbstractControl, ValidationErrors } from "@angular/forms";
import { DbService } from "../dbServices/db.service"
import { promise } from 'protractor';

export class CheckUserNameSpace {

    static checkSpace(control: AbstractControl): ValidationErrors | null {
        // Casting : Convert datatype to datatype
        // Implict Casting  :  let name : object = 'ahmed';   
        // Explict Casting  : 
        if ((<string>control.value).indexOf(' ') != -1) {
            return { checkSpace: true };
        }
        else {
            return null;
        }
    }
    // Async
    static checkExisiting(control: AbstractControl): Promise < ValidationErrors | null>  {
      return  new Promise( (reslove , reject)=>{
            setTimeout(() => {
                if ((<string>control.value) === new DbService().getUserFromDB()) {
                    reslove ( {checkExisiting: true })
                }
                else {
                    reslove (null)
                }
            }, 4);
        });
       
    

    }
}



