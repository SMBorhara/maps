import { User } from "./user";
import { Company } from "./Company";

export class CustomMap {
   private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mapped: User | Company): void {
    
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mapped.location.lat,
                lng: mapped.location.lng
            }
        })
    }

    // addCompany(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     })
    // }
}