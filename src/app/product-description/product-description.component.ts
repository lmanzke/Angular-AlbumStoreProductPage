import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Album} from "../album";
import { AlbumInfo } from 'app/album-info';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo: AlbumInfo;

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
