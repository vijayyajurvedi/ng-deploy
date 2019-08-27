import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css']
})
export class CompanyprofileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  profile: string = `Gouri Import And Export Company is making a distinguishing mark in the industry. Incorporated in the year 2015 as a Manufacturer, Supplier and Exporter, our firm is based in Miraj, Maharashtra. Understanding the numerous tastes of the market, our organization is taking every measure possible so as to come up with the finest array of Raisins , Cashew Nuts and Pomegranates Acknowledged across the global market for their shape, color and taste, these goods are available in numerous sizes. Earning a great deal of appreciation across the globe, these goods are the leading choice of expert chefs across the world. Have a drool-worthy dish using our goods, and then you'll know what food actually tastes like!`

  offeredbyus: string = `Using the most state of the art technology and precision-driven equipments, our company sees to it that each and every product reaches the required international quality standards to a level of perfection.`

  offeredproductsbyus: any[] = [
    { name: 'Golden Raisins' },
    { name: 'Black Raisins' },
    { name: 'Cashew Nuts' },
    { name: 'Almonds' },
    { name: 'Dry Fruits Mixed Pack' }
  ]

  chooseuswhy: string = `With our products acclaimed to be one of the most reliable ones in the market, our organization runs on a rigorous set of customer-oriented policies, thus aiming at satisfying each patron beyond all doubt. Certain positive attributes of our company are-`


  chooseuswhydetails: any[] = [
    { name: "Rich industrial knowledge" },
    { name: "Team of professionals" },
    { name: "Top of the line infrastructural unit" },
    { name: "Wide clientele base" }
  ]

  factsheet: any[] = [
    { comment: 'Year of Establishment', value: '2015' },
    { comment: 'Nature of Business', value: 'Supplier, Exporter, Wholesaler' },
    { comment: 'Number of Production Units', value: '1' },
    { comment: 'Monthly Production Capacity', value: '100 Ton' },
    { comment: 'Capital in Rs', value: 'Rs 20 Lakhs' },
    { comment: 'Export Percentage', value: '20 percent' },
    { comment: 'Number of Employees', value: '4' },
    { comment: 'Bankers', value: 'I.C.I.C.I. BANK LTD.' },
    { comment: 'Annual Turnover', value: 'Rs 4 Crore' },
    { comment: 'Export Turnover', value: 'Rs 0.80 Crore' },

  ]

  certificates: any[] = [
    { src: 'https://www.gouriimpex.com/upload/images/cst1(1).jpg', name: 'CST Certificate No 27231209654 C' },
    { src: 'https://www.gouriimpex.com/upload/images/vat1(1).jpg', name: 'VAT Certificate No 27231209654 V' },
    { src: 'https://www.gouriimpex.com/upload/images/ptec1(1).jpg', name: 'PTEC Certificate No 99563000408 P' },
    { src: 'https://www.gouriimpex.com/upload/images/shopact1.jpg', name: 'Shop Act  No I 14747 / 48-181' },
    { src: 'https://www.gouriimpex.com/upload/images/food1.jpg', name: 'Food License No 11516040000278' },


  ]
}
