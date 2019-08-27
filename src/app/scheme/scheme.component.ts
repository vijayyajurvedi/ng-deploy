import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.css']
})
export class SchemeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  projectmovite: any[] = [
    { motive: 'To give financial support to family members of soldiers who protect us and our family, all over the country,without caring of their own life.' },
    { motive: 'To give financial support to affected farmers, senior citizens, women, orphans / disabled / blind children, etc' },
    { motive: 'To give financial support to the groups, working  in the fields of art, literature, sports, health, music, culture etc.for wefare activities.' }
  ]

  schemeobjective: any[] = [

    { obj: 'To make the funds available to the wefare groups for social work.' },
    { obj: 'To help the needy / affected individuals through wefare groups.' },
    { obj: 'To arrange to give members , pay back of their fee amount.' },
    { obj: 'To give rewards / prizes  to the members through  lucky draws events.' },
    { obj: 'To give an opportunity /  a chance  to the members , to EARN  REGULAR  INCOME working  from home,without any investment.' }
  ]

  schemeworks: any[] = [
    { works: "Membership fee is Rs. 235 / -." },
    { works: "Members will fill the  information  ONLINE and select any one of  the gift items  available on  the web site and pay the  Membership fee ONLINE." },
    { works: "Welcome gift will be given to member immediately once he become member." },
    { works: "The selected  gift  will be sent to  member through the courier on the  address  provided." },
    { works: "Once he makes the payment of  fee, immediately ,a profile  of  the member will be created  under the scheme. Also customer's account will be opened  in the scheme in company's books." },
    { works: "The user ID and password will be given to the member to assess his / her own  profile and account." },
    { works: "Thereafter the member has to add  new  member and ask him  to fill the form  online mentioning his / her membership number or REFERENCE ID in the application form." },
    { works: "When new member fills his information online in the application form ,with your membership number/ Reference ID by selecting one of the welcome gift items available on the website and pay membership fee online, immediately 10% of the new member's fee will be automatically credited to your account." },
    { works: "Every member will receive 10% of the amount of fee  by  direct addition / referral  as a payback." }

  ]

  utilisationdetails: any[] = [
    { details: "The welcome gift value", currency: "RS", Amt: "140.00" },
    { details: "5% will be given to the  GROUPS ", currency: "RS", Amt: "11.75" },
    { details: "10% amount will given to member as  payback ", currency: "RS", Amt: "23.50" },
    { details: "The amount will be utilised for the prizes ", currency: "RS", Amt: "15.00" },
    { details: "5% amount will be utilised for projected expenditure ", currency: "RS", Amt: "11.75" },
    { details: "The Government taxes projected      ", currency: "RS", Amt: "8.00" },
    { details: "Balance amount will be donated to SOLDIURES Fund", currency: "RS", Amt: "25.00" },
    { details: "Total", currency: "RS", Amt: "25.00" }

  ]

  paybackcalcimg = "https://www.gouriimpex.com/upload/images/PAYBACK%20CHART%20NW%282%29.png";
  memberreqimg = "https://www.gouriimpex.com/upload/images/c.jpg"

  benifitdetails: any[] = [
    { details: "The gift item selected  by  the member will be given immediately to the member0n filling up the form" },
    { details: "Every member will get 10% of the amount of the fee for the newly added member" },
    { details: "Members will get prizes for various home utility items through lucky  draw  system" },
    { details: "A member will be selected for the two trips , one in Maharashtra and one out of Maharashtra through lucky draw syatem" },
    { details: "The first three members adding / reffering  highest number of  new members will get special rewards" }

  ]

  rewards: any[] = [
    { details: "Mobile handset" },
    { details: "Mobile tab" },
    { details: "Chopper" },
    { details: "Electric kettle" },
    { details: "Mixer" },
    { details: "Saris" },
    { details: "Leather wallet" },
    { details: "Purses etc." }
  ]

  trips: any[] = [
    { details: "Mahabaleshwar / Matheran / Ganpatipule / Ashtavinayak etc. in Maharastra" },
    { details: "Kulu Manali, Goa, Bangalore, Tirupati etc.  outside of  Maharashtra" }
  ]

  boundaryconditions: any[] = [
    { details: "Members have to add new members until they get 100% credit of  their membership fee in their account" },
    { details: "Members will be eligible for the refund / payback  only after balance in their  account is equal to 100% amount of  their membership fee" },
    { details: "The membership  will have to be renewed every year to get the benefits of this scheme every year" },
    { details: "Government tax or fees applicable from time to time will be deducted from the payback  amount of the member , if required" },
    { details: "For any  complaint about the Welcome  gift , it is mandatory to inform to the company within three days from the day of the receipt." },
    { details: "Once selected gift can not be canceled by the member, but gift items will be replaced with similar one  for suitable reason." },
    { details: "All transactions will be done ONLINE.only.  Transactions by cash or cheque will not be accepted" },
    { details: "Company reserves the right to modify, alter, delete, or cancel the scheme and any of the terms of the  scheme at any point of time and those will be final" },
    { details: "ANY  DISPUTE  ARISING  OUT OF OR  IN  CONNECTION  WITH  THIS  SCHEME  INCLUDING ANY  QUESTION  REGARDING ITS  TERMS  AND  CONDITIONS, VALIDITY  OR  TERMINATION, SHALL BE  REFERRED  TO THE  EXCLUSIVE  JURISDICTION  OF  THE COURTS  OF SANGLI  ((MAHARASTRA)  AND THE LANGUAGE TO  BE  USED  IN THE PROCEEDINGS  SHALL  BE ENGLISH ONLY" }

  ]

  schemeimages: any[] = [
    { details: "https://www.gouriimpex.com/upload/images/vcnuts.jpg" },
    { details: "https://www.gouriimpex.com/upload/images/braisins.jpg" },
    { details: "https://www.gouriimpex.com/upload/images/almonds.jpg" },
    { details: "https://www.gouriimpex.com/upload/images/graisins.jpg" },
    { details: "https://www.gouriimpex.com/upload/images/S1_2.jpg" },
    { details: "https://www.gouriimpex.com/upload/images/R2_3.jpg" }

  ]
}
